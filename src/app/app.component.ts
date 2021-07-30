import {Component} from '@angular/core';
import {UserService} from 'src/app/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UserService]
})
export class AppComponent {
  title = 'angular-app';
  collegues = this.getAllUser();

  constructor(private service: UserService) {
  }

  getAllUser(): any {
    return this.service.findAllUser()
      .then(collegue => collegue.filter(col => col.email).filter(col => col.nom))
      .then(collegues => this.collegues = collegues)
      .catch((error) => error);
  }

}
