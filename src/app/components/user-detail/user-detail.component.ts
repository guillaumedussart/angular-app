import { UserService } from 'src/app/services/user.service';
import { UserJSON } from './../../model/user.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  private idUser!: string;
  user!: UserJSON;

  constructor(
    private router: ActivatedRoute,
    private userService: UserService
  ) {
    this.router.params.subscribe((params) => {
      this.idUser = params.id;
    });
  }

  ngOnInit(): void {
    this.userService.findUserById(this.idUser).subscribe((user) => {
      this.user = user;
    });
  }
}
