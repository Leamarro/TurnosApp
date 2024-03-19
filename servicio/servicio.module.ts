// servicio.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Importa RouterModule
import { ServicioComponent } from './servicio.component';

@NgModule({
  declarations: [ServicioComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [ServicioComponent]
})
export class ServicioModule { }
