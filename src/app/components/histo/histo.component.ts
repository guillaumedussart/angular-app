import {Component, OnInit} from '@angular/core';
import {AvisModel} from "../../model/avis.model";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-histo',
  templateUrl: './histo.component.html',
  styleUrls: ['./histo.component.scss']
})
export class HistoComponent implements OnInit {
  collegues: AvisModel[] = [];
  messageErr = false;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.getAllCollegue()
      .then(collegues => this.collegues = collegues)
      .catch(() => this.messageErr = true)
  }

}
