import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyModRoutingModule } from './lazy-mod-routing.module';
import { CompLazyComponent } from './components/comp-lazy/comp-lazy.component';


@NgModule({
  declarations: [CompLazyComponent],
  imports: [
    CommonModule,
    LazyModRoutingModule
  ]
})
export class LazyModModule { }
