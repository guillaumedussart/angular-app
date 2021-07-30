import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AvisEnum, UserModel, UserModelScore} from "../model/avis.model";
import {Observable, Subject} from "rxjs";
import {environment} from "../../environments/environment";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  private subjectCurrentUser = new Subject<UserModelScore>();

  constructor(private http: HttpClient) {
  }

  get currentVote(): Observable<UserModelScore> {
    return this.subjectCurrentUser.asObservable();
  }

  publishCurantVote(postChoisi: UserModelScore) {
    this.subjectCurrentUser.next(postChoisi);
  }


  getAllCollegue(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(environment.baseUrlApiAvis);
  }

  getAllCollegueScore(): Observable<UserModelScore[]> {
    return this.http.get<UserModelScore[]>(environment.baseUrlApiAvisVote);
  }

  giveOpinion(user: UserModel, avis: AvisEnum): Observable<UserModel> {
    const avis$ = this.http.post<UserModel>(environment.baseUrlApiAvisVote, {
      pseudo: user.pseudo,
      avis
    }, this.httpOptions);
    return avis$.pipe(
      tap(coleApTap => this.publishCurantVote({
        collegue: coleApTap,
        avis
      }))
    );
  }

  deleteOpinion(vote: UserModelScore): Observable<UserModelScore> {
    return this.http.delete<UserModelScore>(environment.baseUrlApiAvisVote, this.httpOptions);
  }

  searchCollegue(search: string) {
    return this.http.get<UserModel[]>(environment.baseUrlApiAvis + search);
  }
}
