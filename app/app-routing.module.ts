import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarberosComponent } from 'src/barberos/barberos.component';
import { DatosTurnoComponent } from 'src/datos-turno/datos-turno.component';
import { HomeComponent } from 'src/home/home.component';
import { ServicioComponent } from 'src/servicio/servicio.component';
import { TurnosComponent } from 'src/turnos/turnos.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'servicio', component: ServicioComponent },
  { path: 'barbero', component: BarberosComponent },
  { path: 'turnos', component: TurnosComponent },
  { path: 'datos', component: DatosTurnoComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
