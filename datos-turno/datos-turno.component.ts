import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos-turno',
  templateUrl: './datos-turno.component.html',
  styleUrls: ['./datos-turno.component.css']
})
export class DatosTurnoComponent implements OnInit {
  ngOnInit(): void {
  }

  contacto = {
    nombre: '',
    telefono: ''
  };

  submitForm() {
    console.log(this.contacto); // Aquí puedes realizar acciones adicionales, como enviar los datos a un servidor
  }
}