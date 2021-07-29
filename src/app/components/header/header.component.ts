import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // @ts-ignore
  messageSuc: string = localStorage.getItem("messageSuc");

  constructor(public router: Router) {
  }

  ngOnInit() {

  }

  reloadCurrentPage() {
    window.location.reload();
  }

}
