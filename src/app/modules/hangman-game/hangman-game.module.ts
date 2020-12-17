import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HangmanGameRoutingModule } from './hangman-game-routing.module';
import { GameMenuComponent } from './game-menu/game-menu.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [GameMenuComponent],
  imports: [
    CommonModule,
    HangmanGameRoutingModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class HangmanGameModule { }
