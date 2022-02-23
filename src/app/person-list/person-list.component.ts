import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Person } from '../models/person.model';
import { AppState } from '../store/person.state';
import * as PersonActions from '../store/actions/person.action';

@Component({
    selector: 'app-person-list',
    templateUrl: './person-list.component.html',
    styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {
    persons: Person[];

    constructor(private store: Store<AppState>) {
        store.select('persons').subscribe(state => {
            this.persons = state;
        });
    }

    ngOnInit() {
    }

    deletePerson(p: Person) {
        this.store.dispatch(PersonActions.RemovePerson(p));
    }
}
