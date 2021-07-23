import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { ApiComponent } from './api/api.component';

const routes: Routes = [
  { path: '', component: CardComponent },
  { path: 'api', component: ApiComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}
