import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Candy1Component } from './candy1/candy1.component';
import { Candy2Component } from './candy2/candy2.component';
import { Candy3Component } from './candy3/candy3.component';
import { Candy4Component } from './candy4/candy4.component';
import { FormaComponent } from './forma/forma.component';

 const routes: Routes = [
  { path: '', redirectTo: '/Candy1', pathMatch: 'full' },
  {path: 'Candy1', component: Candy1Component},
  {path: 'Candy2', component: Candy2Component},
  {path: 'Candy3', component: Candy3Component},
  {path: 'Candy4', component: Candy4Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  FormaComponent,
  Candy1Component,
  Candy2Component,
  Candy3Component,
  Candy4Component
]                             