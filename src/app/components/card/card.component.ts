import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  providers:[UserService]
})
export class CardComponent implements OnInit {

  ngOnInit(): void {
  }
  constructor(private service: UserService) {
  }

  collegues = this.getAllUser();

  getAllUser(): any {
    return this.service.findAllUser()
      .then(collegue => collegue.filter(col => col.email).filter(col => col.nom))
      .then(collegues => this.collegues = collegues)
      .catch((error)=>error);
  }
}
