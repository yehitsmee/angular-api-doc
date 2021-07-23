import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { ApiComponent } from './api/api.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: CardComponent,
    data: { breadcrumb: 'Home' },
    children: [
      {
        path: 'pet',
        component: ApiComponent,
        data: { breadcrumb: 'Pet', kind: 'Pet' }
      },
      {
        path: 'store',
        component: ApiComponent,
        data: { breadcrumb: 'Store', kind: 'Store' }
      },
      {
        path: 'user',
        component: ApiComponent,
        data: { breadcrumb: 'User', kind: 'User' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}
