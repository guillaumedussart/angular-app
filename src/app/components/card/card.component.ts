import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserJSON } from '../../model/user.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  collegues: UserJSON[] = [];
  messageErr = false;
  searchTerm!: string;
  searchModel!: string;

  constructor(private service: UserService, private router: Router) {}

  ngOnInit(): void {
    // @ts-ignore
    this.collegues = this.getAllUser();
    this.service.currentUser.subscribe((newUser) =>
      this.collegues.unshift(newUser)
    );
  }

  getAllUser(): Promise<UserJSON[] | boolean> {
    const reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
    return this.service
      .findAllUser()
      .then((collegue) =>
        collegue
          .filter((col) => col.email)
          .filter((col) => col.nom)
          .filter((col) => col.photo.match(reg))
      )
      .then((collegues) => (this.collegues = collegues))
      .catch(() => (this.messageErr = true));
  }

  getDetails(id: string) {
    this.router.navigate(['/detail', id]);
  }

  search(value: string): void {
    this.collegues = this.collegues.filter((val) =>
      val.nom.toLowerCase().includes(value)
    );
  }
}
