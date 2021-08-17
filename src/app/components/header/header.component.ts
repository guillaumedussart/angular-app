import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserJSON } from '../../model/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  // @ts-ignore
  messageSuc: string = localStorage.getItem('messageSuc');
  users!: UserJSON[];
  // @ts-ignore
  @Input() searchModel;

  @Output() searchModelChange: EventEmitter<any> = new EventEmitter();
  @Output() searchEvent = new EventEmitter();

  constructor(public router: Router) {}

  ngOnInit() {}
  getHome() {
    this.router.navigate(['/']);
  }
  getListPage() {
    this.router.navigate(['/list-votes']);
  }

  getVotePage() {
    this.router.navigateByUrl('/votes');
  }

  getHomePage() {
    this.router.navigate(['/']);
  }

  updateSearchModel(value: string) {
    this.searchModel = value;
    this.searchModelChange.emit(this.searchModel);
  }
}
