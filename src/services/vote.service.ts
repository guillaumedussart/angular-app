import {HttpClient} from '@angular/common/http';
import {config} from '../config/config';

import {Injectable} from "@angular/core";
import {VoteModel} from "../model/vote.model";

@Injectable()
export class VoteService {
  constructor(private http: HttpClient) {
  }

  async createVote(vote: VoteModel): Promise<VoteModel> {
    const response = await fetch(config.baseUrlApiVote, {
        method: 'post',
        body: JSON.stringify(vote),
        headers: {'Content-Type': 'application/json'}
      }
    );
    return response.json();
  }

}
