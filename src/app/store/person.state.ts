import { Person } from '../models/person.model';
 
export  interface AppState {
  readonly persons: Person[];
}
