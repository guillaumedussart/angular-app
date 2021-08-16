import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UserService],
})
export class AppComponent {
  title = 'angular-app';
  collegues = this.getAllUser();

  constructor(private service: UserService) {}

  getAllUser(): any {
    const reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
    return this.service
      .findAllUser()
      .pipe(
        map((items) =>
          items
            .filter((coll) => coll.email)
            .filter((coll) => coll.nom)
            .filter((col) => col.photo.match(reg))
        )
      )
      .subscribe(
        (collegues) => (this.collegues = collegues),
        (error) => console.log(error)
      );
  }
}
