import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/home/home.component';
import { ServicioComponent } from 'src/servicio/servicio.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'servicio', component: ServicioComponent }, // Define la ruta para el componente de Servicio
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
