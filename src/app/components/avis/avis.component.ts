import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AvisEnum} from "../../model/avis.model";


@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.scss']
})
export class AvisComponent implements OnInit {
  @Output() vote = new EventEmitter<AvisEnum>();
  @Input() likeDisable = false;
  @Input() dislikeDisable = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  like() {
    this.vote.emit(AvisEnum.AIMER);
  }


  unLike() {
    this.vote.emit(AvisEnum.DETESTER);
  }
}
