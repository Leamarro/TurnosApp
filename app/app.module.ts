// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicioModule } from 'src/servicio/servicio.module';
import { HomeModule } from 'src/home/home.module';
import { BarberosModule } from 'src/barberos/barberos.module';
import { TurnosModule } from 'src/turnos/turnos.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatosTurnoModule } from 'src/datos-turno/datos-turno.module';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServicioModule,
    BarberosModule,
    TurnosModule,
    HomeModule,
    DatosTurnoModule,
    HttpClientModule ,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
