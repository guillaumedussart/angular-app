import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {config} from '../config/config';
import {AvisEnum, PostModel, UserModel, UserModelScore} from "../model/avis.model";
import {Observable} from "rxjs";
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

  constructor(private http: HttpClient) {
  }

  getAllCollegue(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(environment.baseUrlApiAvis);
  }

  getAllCollegueScore(): Observable<UserModelScore[]> {
    return this.http.get<UserModelScore[]>(environment.baseUrlApiAvisVote);
  }

  giveOpinion(user: UserModel, avis: AvisEnum): Observable<UserModel> {
    let options = {
      body: JSON.stringify({pseudo: user.pseudo, avis}),
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    return this.http.post<UserModel>(environment.baseUrlApiAvisVote, options);
    // const response = await fetch(config.baseUrlApiAvisVote, {
    //     method: 'post',
    //     body: JSON.stringify({pseudo: user.pseudo, avis}),
    //     headers: {'Content-Type': 'application/json'}
    //   }
    // );
    // return response.json();
  }

  deleteOpinion(vote: UserModelScore): Observable<UserModelScore> {
    return this.http.delete<UserModelScore>(config.baseUrlApiAvisVote, this.httpOptions);
  }
}
