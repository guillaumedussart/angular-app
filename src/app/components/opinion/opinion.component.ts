import {Component, Input, OnInit} from '@angular/core';
import {VoteService} from "../../services/vote.service";
import {VoteModel} from "../../model/vote.model";

@Component({
  selector: 'app-opinion',
  templateUrl: './opinion.component.html',
  styleUrls: ['./opinion.component.scss'],
  providers: [VoteService]
})
export class OpinionComponent implements OnInit {
  @Input()
  coll: any;
  // @ts-ignore
  messageSuccess: string;

  constructor(private voteService: VoteService) {
  }

  ngOnInit(): void {
  }

  likeUser(id: string): boolean {
    let vote = new VoteModel();
    vote.setCollegueId(id);
    vote.setLike(true);
    if (this.voteService.createVote(vote)) {
      this.messageSuccess = "it's ok!";
      return true;
    }
    return false;
  }
}
