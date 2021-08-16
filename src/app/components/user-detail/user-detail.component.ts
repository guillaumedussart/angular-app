import { UserService } from 'src/app/services/user.service';
import { UserJSON } from './../../model/user.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  private idUser!: string;
  user!: UserJSON;
  subject = new Subject<UserJSON>();
  submitted: boolean = false;
  formUser!: FormGroup;
  closeResult = '';

  constructor(
    private router: ActivatedRoute,
    private userService: UserService,
    private formBuilder: FormBuilder
  ) {
    this.router.params.subscribe((params) => {
      this.idUser = params.id;
    });
  }
  // @ts-ignore
  ngOnInit(): void {
    this.userService.findUserById(this.idUser).subscribe((user) => {
      this.user = user;
      this.subject.next(this.user);
    });
    
    this.subject.asObservable().subscribe((v) => {
      this.formUser = this.formBuilder.group({
        email: [v.email, [Validators.required, Validators.maxLength(5)]],
        nom: [v.nom, [Validators.required, Validators.email]],
        prenom: [v.prenom, [Validators.required]],
        societe: [v.societe, Validators.required],
        photo: [v.photo, Validators.required],
      });
    });
  }

  onSubmit($event: any) {
    $event.preventDefault();
    console.log(this.formUser.value);
  }
}
