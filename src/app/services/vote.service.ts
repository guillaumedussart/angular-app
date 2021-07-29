import {HttpClient} from '@angular/common/http';

import {Injectable} from "@angular/core";
import {VoteModel} from "../model/vote.model";
import {UserService} from "./user.service";
import {UserModel} from "../model/user.model";
import {environment} from "../../environments/environment";

@Injectable()
export class VoteService {

  constructor(private http: HttpClient,
              private userService: UserService) {
  }

  async createVote(vote: VoteModel): Promise<VoteModel> {
    const user = this.userService.findUserById(vote.getCollegueId());
    const response = await fetch(environment.baseUrlApiVote, {
        method: 'post',
        body: JSON.stringify(vote),
        headers: {'Content-Type': 'application/json'}
      }
    );
    return response.json();
  }

  /* async updateVote(id: string): Promise<VoteModel> {

   }*/

  async findVoteById(id: string) {
    const response = await fetch(environment.baseUrlApiVote + id);
    const data: UserModel = await response.json();
    return data;
  }
}
