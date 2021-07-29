import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {AvisEnum, PostModel, UserModel, UserModelScore} from "../../model/avis.model";
import {DataService} from "../../services/data.service";
import {Router} from "@angular/router";
import {fromEvent, Observable} from "rxjs";
import {map, mergeMap} from "rxjs/operators";

@Component({
  selector: 'app-histo',
  templateUrl: './histo.component.html',
  styleUrls: ['./histo.component.scss']
})
export class HistoComponent implements OnInit, AfterViewInit {
  @ViewChild('search') searchInput!: ElementRef;
  collegue$!: Observable<UserModel[]>;
  collegues: UserModel[] = [];
  messageErr = false;
  @Input()
  messageSuc = false;
  // @ts-ignore
  @Input() avis: PostModel;
  votes!: UserModelScore[];

  constructor(private dataService: DataService,
              public router: Router
  ) {
  }

  ngAfterViewInit(): void {
    this.collegue$ = fromEvent<KeyboardEvent>(this.searchInput.nativeElement, 'keyup')
      .pipe(
        map(kEvt => (<HTMLInputElement>kEvt.target).value),
        mergeMap(valeurSaisie => this.dataService.searchCollegue(valeurSaisie)),
      );

  }


  ngOnInit(): void {
    this.dataService.getAllCollegue()
      .subscribe(
        collegues => this.collegues = collegues,
        () => this.messageErr = true
      );
    this.dataService.getAllCollegueScore().subscribe(
      votes => this.votes = votes,
      () => this.messageErr = true
    );
  }

  giveOpinion(user: UserModel, avis: AvisEnum) {

    this.dataService.giveOpinion(user, avis).subscribe(
      () => localStorage.setItem("messageSuc", "Vote enregistre"),
      () => this.messageErr = true
    );
    this.dataService.getAllCollegueScore().subscribe(
      votes => this.votes = votes);
    this.dataService.publierUserCourant(this.votes);
    console.log(this.votes)
    this.ngOnInit();
    //this.router.navigate(["HistoComponent"]);
  }

  deleteVote(vote: UserModelScore) {
    this.dataService.deleteOpinion(vote).subscribe(data => console.log(data));
  }
}
