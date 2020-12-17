import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GameMenuComponent} from './game-menu/game-menu.component';

const routes: Routes = [
  {
    path: '',
    component: GameMenuComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HangmanGameRoutingModule { }
