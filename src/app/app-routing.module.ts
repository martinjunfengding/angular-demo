import { NgModule } from '@angular/core';
import {CompAComponent} from '~martin/app/components/comp-a/comp-a.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'eager', component: CompAComponent},
  {path: 'lazy', loadChildren: () => import('~martin/app/lazy-mod/lazy-mod.module').then((m) => m.LazyModModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
