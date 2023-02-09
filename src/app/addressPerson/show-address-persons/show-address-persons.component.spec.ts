import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAddressPersonsComponent } from './show-address-persons.component';

describe('ShowAddressPersonsComponent', () => {
  let component: ShowAddressPersonsComponent;
  let fixture: ComponentFixture<ShowAddressPersonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAddressPersonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAddressPersonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
