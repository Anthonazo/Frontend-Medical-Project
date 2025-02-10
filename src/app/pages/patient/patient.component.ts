import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Paciente } from '../../models/Paciente';
import { RouterModule } from '@angular/router';
import { PatientService } from '../../services/patient.service';

@Component({
  selector: 'app-patient',
  standalone: true,
  imports: [
    FormsModule,
    RouterModule
  ],
  templateUrl: './patient.component.html',
  styleUrl: './patient.component.scss'
})
export class PatientComponent {

  paciente: Paciente = new Paciente();  

  constructor(private patientService: PatientService) { }

  registrarPaciente() {
    this.patientService.registerPatient(this.paciente).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }



}
