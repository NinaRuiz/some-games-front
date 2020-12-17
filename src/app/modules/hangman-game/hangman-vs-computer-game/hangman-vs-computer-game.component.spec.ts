import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HangmanVsComputerGameComponent } from './hangman-vs-computer-game.component';

describe('HangmanVsComputerGameComponent', () => {
  let component: HangmanVsComputerGameComponent;
  let fixture: ComponentFixture<HangmanVsComputerGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HangmanVsComputerGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HangmanVsComputerGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
