import { Person } from '../../models/person.model';
import { AddPerson, RemovePerson } from '../actions/person.action';
import { createReducer, on, Action } from '@ngrx/store';

export const initialState: Person[] = [];

function removePerson(state: Person[], payload: Person) {
    state.forEach((p, index) => {
        if (p.Id === payload.Id) {
            state.splice(index, 1);
        }
    });
    return state;
}

function addPerson(state: Person[], payload: Person) {
    console.log({payload});
    return [...state, payload];
}

const reducer = createReducer(
    initialState,
    on(AddPerson, (state, payload) => {
        console.log({AddPerson});
        return addPerson(state, payload);
    }),
    on(RemovePerson, (state, payload) => removePerson(state, payload)),
  );
   
  export function personReducer(state: Person[], action: Action) {
    return reducer(state, action);
  }

