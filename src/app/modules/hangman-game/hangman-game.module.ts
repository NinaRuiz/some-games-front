import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HangmanGameRoutingModule } from './hangman-game-routing.module';
import { GameMenuComponent } from './game-menu/game-menu.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { HangmanVsComputerGameComponent } from './hangman-vs-computer-game/hangman-vs-computer-game.component';
import { HangmanVsPlayerGameComponent } from './hangman-vs-player-game/hangman-vs-player-game.component';


@NgModule({
  declarations: [GameMenuComponent, HangmanVsComputerGameComponent, HangmanVsPlayerGameComponent],
  imports: [
    CommonModule,
    HangmanGameRoutingModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class HangmanGameModule { }
