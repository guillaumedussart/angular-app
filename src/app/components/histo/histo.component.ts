import {Component, Input, OnInit} from '@angular/core';
import {AvisEnum, PostModel, UserModel} from "../../model/avis.model";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-histo',
  templateUrl: './histo.component.html',
  styleUrls: ['./histo.component.scss']
})
export class HistoComponent implements OnInit {
  collegues: UserModel[] = [];
  messageErr = false;
  // @ts-ignore
  @Input() avis: PostModel;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.getAllCollegue()
      .then(collegues => this.collegues = collegues)
      .catch(() => this.messageErr = true)
  }

  giveOpinion(user: UserModel, avis: AvisEnum) {
    return this.dataService.giveOpinion(user, avis).catch(() => this.messageErr = true);
  }

}
