import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DatosTurnoComponent } from './datos-turno.component';



@NgModule({
  declarations: [DatosTurnoComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    DatosTurnoComponent
  ]
})
export class DatosTurnoModule { }
