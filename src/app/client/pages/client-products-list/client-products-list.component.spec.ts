import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientProductsListComponent } from './client-products-list.component';

describe('ClientProductsListComponent', () => {
  let component: ClientProductsListComponent;
  let fixture: ComponentFixture<ClientProductsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientProductsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
