import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TurnosComponent } from './turnos.component';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [TurnosComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatButtonModule
  ],
  exports: [TurnosComponent]
})
export class TurnosModule { }
