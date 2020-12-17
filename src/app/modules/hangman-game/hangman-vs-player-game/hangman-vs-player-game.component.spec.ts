import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HangmanVsPlayerGameComponent } from './hangman-vs-player-game.component';

describe('HangmanVsPlayerGameComponent', () => {
  let component: HangmanVsPlayerGameComponent;
  let fixture: ComponentFixture<HangmanVsPlayerGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HangmanVsPlayerGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HangmanVsPlayerGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
