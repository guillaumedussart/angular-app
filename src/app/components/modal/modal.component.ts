import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'ngbd-modal-basic',
  templateUrl: './modal.component.html',
})
export class NgbdModalBasic implements OnInit {
  closeResult = '';
  submitted = false;
  formUser!: FormGroup;
  sexeSelect = 'female';
  departmentSelect = 'DSI/INDUS/Solaris';

  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {}

  get formValid() {
    return this.formUser.controls;
  }

  ngOnInit(): void {
    this.formUser = this.formBuilder.group({
      id: [null, [Validators.required, Validators.maxLength(5)]],
      email: [null, [Validators.required, Validators.email]],
      nom: [null, [Validators.required]],
      prenom: [null, Validators.required],
      societe: [null, Validators.required],
      dateNaissance: [null, Validators.required],
      sexe: [null, Validators.required],
      adresse: [null, Validators.required],
      password: [null, Validators.required],
      photo: [
        null,
        [
          Validators.required,
          Validators.pattern(
            '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'
          ),
        ],
      ],
      departement: [null, Validators.required],
    });
  }

  // @ts-ignore
  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  onSubmit($event: any): void {
    $event.preventDefault();
    this.submitted = true;

    if (this.formUser.invalid) {
      console.warn('Your order has been submitted', this.formUser.value);
      return;
    }
    this.userService.createUser(this.formUser.value);
    this.formUser.reset();
    this.modalService.dismissAll();
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
