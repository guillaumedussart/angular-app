import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  providers: [UserService]
})
export class CardComponent implements OnInit {

  collegues = this.getAllUser();

  constructor(private service: UserService) {
  }

  ngOnInit(): void {
  }

  getAllUser(): any {
    return this.service.findAllUser()
      .then(collegue => collegue.filter(col => col.email)
        .filter(col => col.nom).filter(col => col.photo))
      .then(collegues => this.collegues = collegues)
      .catch((error) => error);
  }
}
