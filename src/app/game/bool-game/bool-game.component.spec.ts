import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoolGameComponent } from './bool-game.component';

describe('BoolGameComponent', () => {
  let component: BoolGameComponent;
  let fixture: ComponentFixture<BoolGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoolGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoolGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
