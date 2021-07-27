import {Component} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-basic',
  templateUrl: './modal.component.html'
})
export class NgbdModalBasic {
  closeResult = '';

  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder
  ) {
  }

  formUser = this.formBuilder.group({
    id: '',
    nom: '',
    prenom: '',
    email: ''
  });

  // @ts-ignore
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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

  onSubmit(): void {
    console.warn('Your order has been submitted', this.formUser.value);
    this.formUser.reset();
  }
}
