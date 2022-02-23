import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/person.state';
import { Person } from './models/person.model';
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
    this.person = new Person(null, '');
  }

  addPerson() {
    this.store.dispatch(PersonActions.AddPerson(this.person));
    this.clearPerson();
  }

  clearPerson() {
    this.person = new Person(null, '');
  }
}
