import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {UserJSON} from "../../model/user.model";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  collegues: UserJSON[] = [];
  messageErr = false;

  constructor(private service: UserService) {
  }


  ngOnInit(): void {
    // @ts-ignore
    this.collegues = this.getAllUser();
  }

  getAllUser(): Promise<UserJSON[] | boolean> {
    const reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
    return this.service.findAllUser()
      .then(collegue => collegue.filter(col => col.email)
        .filter(col => col.nom)
        .filter(col => col.photo.match(reg)))
      .then(collegues => this.collegues = collegues)
      .catch(() => this.messageErr = true);
  }
}
