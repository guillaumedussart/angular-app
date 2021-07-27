import {Component} from '@angular/core';
import {UserService} from 'src/services/user.service';
import {error} from "@angular/compiler/src/util";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UserService]
})
export class AppComponent {
  title = 'angular-app';

  constructor(private service: UserService) {
  }

  collegues = this.getAllUser();

  getAllUser(): any {
    return this.service.findAllUser()
      .then(collegue => collegue.filter(col => col.email).filter(col => col.nom))
      .then(collegues => this.collegues = collegues)
      .catch((error)=>error);
  }

  updateUser(id:string) {
    console.log(id)
  }
}
