import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Store
import { StoreModule } from '@ngrx/store';
import { personReducer } from './store/reducers/person.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PersonListComponent } from './person-list/person-list.component';


@NgModule({
  declarations: [
    PersonListComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    StoreModule.forRoot({
      person: personReducer
    }),
    AppRoutingModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
