import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {config} from '../config/config';
import {AvisEnum, PostModel, UserModel, UserModelScore} from "../model/avis.model";
import {Subscription} from "rxjs";

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

  getAllCollegue(): Promise<UserModel[]> {
    return this.http.get<UserModel[]>(config.baseUrlApiAvis).toPromise();
  }

  getAllCollegueScore(): Promise<UserModelScore[]> {
    return this.http.get<UserModelScore[]>(config.baseUrlApiAvisVote).toPromise();
  }

  async giveOpinion(user: UserModel, avis: AvisEnum): Promise<UserModel> {

    const response = await fetch(config.baseUrlApiAvisVote, {
        method: 'post',
        body: JSON.stringify({pseudo: user.pseudo, avis}),
        headers: {'Content-Type': 'application/json'}
      }
    );
    return response.json();
  }

  async deleteOpinion(vote: UserModelScore): Promise<Subscription> {
    return this.http.delete<UserModelScore>(config.baseUrlApiAvisVote, this.httpOptions).subscribe(data => console.log(data));
  }
}
