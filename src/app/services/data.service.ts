import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AvisEnum, PostModel, UserModel, UserModelScore} from "../model/avis.model";
import {Observable, Subject} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // @ts-ignore
  model: PostModel;
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  private subjectCurrentUser = new Subject<UserModelScore[]>();

  constructor(private http: HttpClient) {
  }

  get currentUser(): Observable<UserModelScore[]> {
    return this.subjectCurrentUser.asObservable();
  }

  publierUserCourant(postChoisi: UserModelScore[]) {
    // ajouter une valeur dans le flux
    this.subjectCurrentUser.next(postChoisi);
  }


  getAllCollegue(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(environment.baseUrlApiAvis);
  }

  getAllCollegueScore(): Observable<UserModelScore[]> {
    return this.http.get<UserModelScore[]>(environment.baseUrlApiAvisVote);
  }

  giveOpinion(user: UserModel, avis: AvisEnum): Observable<UserModel> {

    return this.http.post<UserModel>(environment.baseUrlApiAvisVote, {pseudo: user.pseudo, avis}, this.httpOptions);
    // const response = await fetch(config.baseUrlApiAvisVote, {
    //     method: 'post',
    //     body: JSON.stringify({pseudo: user.pseudo, avis}),
    //     headers: {'Content-Type': 'application/json'}
    //   }
    // );
    // return response.json();
  }

  deleteOpinion(vote: UserModelScore): Observable<UserModelScore> {
    return this.http.delete<UserModelScore>(environment.baseUrlApiAvisVote, this.httpOptions);
  }

  searchCollegue(search: string) {
    return this.http.get<UserModel[]>(environment.baseUrlApiAvis + search);
  }
}
