import {Component, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";
import {UserModelScore} from "../../model/avis.model";

@Component({
  selector: 'app-list-avis',
  templateUrl: './list-avis.component.html',
  styleUrls: ['./list-avis.component.scss']
})
export class ListAvisComponent implements OnInit {
  collegues: UserModelScore[] = [];
  messageErr = false;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.getAllCollegueScore()
      .then(collegues => this.collegues = collegues)
      .catch(() => this.messageErr = true)
  }

  deleteVote(vote: UserModelScore) {
    console.log(vote)
    this.dataService.deleteOpinion(vote).then((res) => console.log(res));
  }
}
