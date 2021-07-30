import {Component, Input, OnInit} from '@angular/core';
import {AvisEnum, PostModel, UserModel, UserModelScore} from "../../model/avis.model";
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
  votes!: UserModelScore[];


  /**
   *
   * @param dataService
   * @param router
   */
  constructor(private dataService: DataService,
              public router: Router
  ) {
  }


  /**
   *
   */
  ngOnInit(): void {
    this.dataService.getAllCollegue()
      .subscribe(
        collegues => this.collegues = collegues,
        () => this.messageErr = true
      );

  }

  /**
   *
   * @param user
   * @param avis
   */
  giveOpinion(user: UserModel, avis: AvisEnum) {

    this.dataService.giveOpinion(user, avis).subscribe(
      () => localStorage.setItem("messageSuc", "Vote enregistre"),
      () => this.messageErr = true
    );
    this.dataService.getAllCollegueScore().subscribe(
      votes => this.votes = votes);
    //console.log(this.votes)
    //this.router.navigate(['/list-votes'])
    this.ngOnInit();
    //this.router.navigate(["HistoComponent"]);
  }

  /**
   *
   * @param vote
   */
  deleteVote(vote: UserModelScore) {
    this.dataService.deleteOpinion(vote).subscribe(data => console.log(data));
  }
}
