import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {fromEvent, Observable} from "rxjs";
import {map, mergeMap} from "rxjs/operators";
import {UserModel} from "../../model/avis.model";
import {DataService} from "../../services/data.service";

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
    this.router.navigate(["/votes"])
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

  reloadCurrentPage() {
    window.location.reload();
  }
}
