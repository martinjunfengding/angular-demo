import { NgModule } from '@angular/core';
import { CompLazyComponent } from '~martin/app/lazy-mod/components/comp-lazy/comp-lazy.component'
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'lazyComp', component: CompLazyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyModRoutingModule { }
