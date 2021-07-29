import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {config} from '../config/config';
import {AvisEnum, PostModel, UserModel, UserModelScore} from "../model/avis.model";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // @ts-ignore
  model: PostModel;

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

  async deleteOpinion(vote: UserModelScore): Promise<UserModelScore> {
    const response = await fetch(config.baseUrlApiAvisVote, {
      method: 'delete',
      body: JSON.stringify(vote),
      headers: {'Content-type': 'application/json'}
    })
    return response.json();
  }
}
