import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserJSON, UserModel } from '../model/user.model';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  private host = environment;
  private subjectCurrentUser = new Subject<UserJSON>();
  private searchResults = new Subject<Array<UserJSON>>();

  constructor(private http: HttpClient) {}

  get currentUser(): Observable<UserJSON> {
    return this.subjectCurrentUser.asObservable();
  }

  get resultUsers() {
    return this.searchResults.asObservable();
  }

  publishCurantUser(userChoise: UserJSON) {
    this.subjectCurrentUser.next(userChoise);
  }

  /**
   *
   * @param value
   */
  search(value: FormControl) {
    return this.http.get<UserJSON[]>(
      environment.baseUrlApiCollegueSearch + value
    );
  }

  /**
   * create user
   * @param user
   */
  createUser(user: UserJSON): Observable<UserJSON> {
    const user$ = this.http.post<UserJSON>(
      environment.baseUrlApiCollegue,
      { user },
      this.httpOptions
    );
    return user$.pipe(
      tap((userTap) =>
        this.publishCurantUser({
          id: userTap.id,
          nom: userTap.nom,
          prenom: userTap.prenom,
          societe: userTap.societe,
          email: userTap.email,
          photo: userTap.photo,
          departement: userTap.departement,
          sexe: userTap.sexe,
          password: userTap.password,
          adresse: userTap.adresse,
          dateNaissance: userTap.dateNaissance,
        })
      )
    );
  }

  /**
   * find all user
   */
  findAllUser(): Observable<UserJSON[]> {
    return this.http.get<UserJSON[]>(
      environment.baseUrlApiCollegue,
      this.httpOptions
    );
    /*const response = await fetch(config.baseUrlApiCollegue);
    const data: UserJSON[] = await response.json();
    return data.filter(col => col.nom).filter(col => col.email);*/
  }

  getUsers(): Observable<UserJSON[]> {
    return this.http.get<UserJSON[]>(environment.baseUrlApiCollegue);
  }

  /**
   * find user by id
   * @param id
   */
  public findUserById(id: string): Observable<UserJSON> {
    return this.http.get<UserJSON>(this.host.baseUrlApiCollegue + id);
  }

  // async updateUser(user: UserJSON) {
  //   const userM = this.findUserById(user.id).then(async (userFind) => {
  //     const model = new UserModel();
  //     model.setNom(user.nom);
  //     model.setPrenom(user.prenom);
  //     const response = await fetch(environment.baseUrlApiCollegue + user.id, {
  //       method: 'put',
  //       body: JSON.stringify(model),
  //       headers: { 'Content-Type': 'application/json' },
  //     });
  //     return response.json();
  //   });
  // }
}
