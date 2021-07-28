import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {config} from '../config/config';
import {AvisEnum, PostModel, UserModel} from "../model/avis.model";

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

  async giveOpinion(user: UserModel, avis: AvisEnum): Promise<UserModel> {
    console.log(user)
    console.log(avis)
    const response = await fetch(config.baseUrlApiAvisVote, {
        method: 'post',
        body: JSON.stringify({pseudo: user.pseudo, avis}),
        headers: {'Content-Type': 'application/json'}
      }
    );
    return response.json();
  }
}
