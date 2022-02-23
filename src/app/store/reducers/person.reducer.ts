import { Person } from '../../models/person.model';
import { AddPerson, RemovePerson } from '../actions/person.action';
import { createReducer, on, Action } from '@ngrx/store';

export const initialState: Person[] = [];

function removePerson(state: Person[], payload: Person) {
    return [...state.filter(x => x.Id !== payload.Id)];
}

function addPerson(state: Person[], payload: Person) {
    return [...state, payload];
}

const reducer = createReducer(
    initialState,
    on(AddPerson, (state, payload) => {
        return addPerson(state, payload);
    }),
    on(RemovePerson, (state, payload) => removePerson(state, payload)),
  );
   
  export function personReducer(state: Person[], action: Action) {
    return reducer(state, action);
  }

