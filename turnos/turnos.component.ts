import { Component } from '@angular/core';

@Component({
  selector: 'app-turnos',
  templateUrl: './turnos.component.html',
  styleUrls: ['./turnos.component.css']
})
export class TurnosComponent {
  selectedDate: Date | undefined;

  showTimeSlots(selectedDate: Date): void {
    this.selectedDate = selectedDate;
  }
}
