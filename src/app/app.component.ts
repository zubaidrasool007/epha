import { Component } from '@angular/core';
// 1a. Import Store
import { Store } from '@ngrx/store';
// 1b. Import App State
import { AppState } from './store/person.state';
// 1c. Import Person object
import { Person } from './models/person.model';
// 1d. Import Actions
import * as PersonActions from './store/actions/person.action';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'EPHA';
  person: Person;
  list: boolean = false;

  constructor(private store: Store<AppState>) {
    this.person = new Person(0, 'abc');
  }

  addPerson() {
    this.store.dispatch(PersonActions.AddPerson(this.person));
  }

  clearPerson() {
    this.person = new Person(0, '');
  }
}
