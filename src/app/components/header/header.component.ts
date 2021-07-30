import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {fromEvent, Observable} from "rxjs";
import {UserModel} from "../../model/avis.model";
import {DataService} from "../../services/data.service";
import {map, mergeMap} from "rxjs/operators";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  // @ts-ignore
  messageSuc: string = localStorage.getItem("messageSuc");

  @ViewChild('search') searchInput!: ElementRef;

  collegue$!: Observable<UserModel[]>;

  constructor(
    public router: Router,
    private dataService: DataService
  ) {
  }

  ngOnInit() {

  }

  getListPage() {
    this.router.navigate(["/list-votes"]);
  }

  getVotePage() {
    this.router.navigateByUrl("/votes")
  }

  getHomePage() {
    this.router.navigate(["/"])
  }

  /**
   *
   */
  ngAfterViewInit(): void {
    this.collegue$ = fromEvent<KeyboardEvent>(this.searchInput.nativeElement, 'keyup')
      .pipe(
        map(kEvt => (<HTMLInputElement>kEvt.target).value),
        mergeMap(valeurSaisie => this.dataService.searchCollegue(valeurSaisie)),
      );
  }
}
