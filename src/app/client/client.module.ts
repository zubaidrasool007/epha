import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientProfileComponent } from './pages/client-profile/client-profile.component';
import { ClientProductsListComponent } from './pages/client-products-list/client-products-list.component';
import { ClientRoutingModule } from './client-routing.module';



@NgModule({
  declarations: [ClientProfileComponent, ClientProductsListComponent],
  imports: [
    CommonModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
