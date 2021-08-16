import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UserService } from '../services/user.service';
import { UserJSON } from '../model/user.model';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {

  results!: UserJSON[];
  queryField: FormControl = new FormControl();

  @Output() searchModelChange: EventEmitter<any> = new EventEmitter();

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.queryField.valueChanges
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe((queryField: any) => {
        this.userService.search(queryField).subscribe((result: UserJSON[]) => {
          this.results = result.filter((v) => v.nom);
        });
      });
  }
}
