import {Component, Input, OnInit} from '@angular/core';
import {AvisEnum, PostModel, UserModel} from "../../model/avis.model";
import {DataService} from "../../services/data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-histo',
  templateUrl: './histo.component.html',
  styleUrls: ['./histo.component.scss']
})
export class HistoComponent implements OnInit {
  collegues: UserModel[] = [];
  messageErr = false;
  @Input()
  messageSuc = false;
  // @ts-ignore
  @Input() avis: PostModel;

  constructor(private dataService: DataService,
              private router: Router
  ) {
  }

  ngOnInit(): void {
    this.dataService.getAllCollegue()
      .then(collegues => this.collegues = collegues)
      .catch(() => this.messageErr = true)
  }

  giveOpinion(user: UserModel, avis: AvisEnum) {
    this.dataService.giveOpinion(user, avis).then(() => localStorage.setItem("messageSuc", "Vote enregistre")).catch(() => this.messageErr = true);

    this.ngOnInit();
    //this.router.navigate(["HistoComponent"]);
  }

}
