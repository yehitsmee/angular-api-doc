import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { ApiComponent } from './api/api.component';

const routes: Routes = [
  {
    path: '',
    component: CardComponent,
    data: { breadcrumb: 'Home' }
  },
  {
    path: 'api',
    data: { breadcrumb: { skip: true}},
    children: [
      {
        path: 'pet',
        component: ApiComponent,
        data: { breadcrumb: 'Pet' }
      },
      {
        path: 'store',
        component: ApiComponent,
        data: { breadcrumb: 'Store' }
      },
      {
        path: 'user',
        component: ApiComponent,
        data: { breadcrumb: 'User' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}
