import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowGuessessComponent } from './show-guessess.component';

describe('ShowGuessessComponent', () => {
  let component: ShowGuessessComponent;
  let fixture: ComponentFixture<ShowGuessessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowGuessessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowGuessessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
