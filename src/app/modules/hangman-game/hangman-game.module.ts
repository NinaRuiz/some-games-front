import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HangmanGameRoutingModule } from './hangman-game-routing.module';
import { GameMenuComponent } from './game-menu/game-menu.component';


@NgModule({
  declarations: [GameMenuComponent],
  imports: [
    CommonModule,
    HangmanGameRoutingModule
  ]
})
export class HangmanGameModule { }
