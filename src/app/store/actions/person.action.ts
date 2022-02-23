import { createAction, props } from '@ngrx/store';
import { Person } from '../../models/person.model';

export const ADD_PERSON = '[PERSON] Add';
export const REMOVE_PERSON = '[PERSON] Remove';

export const AddPerson = createAction(ADD_PERSON, props<Person>());

export const RemovePerson = createAction(REMOVE_PERSON, props<Person>());
