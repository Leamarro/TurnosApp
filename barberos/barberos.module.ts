import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BarberosComponent } from './barberos.component';



@NgModule({
  declarations: [BarberosComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [BarberosComponent]
})
export class BarberosModule { }
