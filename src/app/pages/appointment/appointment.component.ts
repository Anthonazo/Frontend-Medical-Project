import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../services/patient.service';
import { Paciente } from '../../models/Paciente';
import { FormsModule } from '@angular/forms';
import { Cita, CitaResponse } from '../../models/Cita';
import { CommonModule } from '@angular/common';
import { AppointmentService } from '../../services/appointment.service';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.scss'
})
export class AppointmentComponent implements OnInit {

  pacientes: Paciente[] = [];
  citass: CitaResponse[] = [];
  cita: Cita = new Cita();
  selectedPacienteId?: number; // ID del paciente seleccionado


  constructor(private patientService: PatientService,
    private appointmentService: AppointmentService
  ) { }

  ngOnInit() {
    this.getPatients();
    this.getCitas();
  }

   // Función para agendar la cita
   agendarCita() {
    if (!this.selectedPacienteId) {
      alert('Por favor, selecciona un paciente.');
      return;
    }
  
    // Obtener el médico_id del localStorage
    const medicoId = localStorage.getItem('id');
    if (!medicoId) {
      alert('No se encontró el ID del médico.');
      return;
    }
  
    // Asegurar que la hora tenga el formato correcto "HH:mm:ss"
    this.cita.hora = this.cita.hora ? this.cita.hora + ":00" : undefined;
  
    // Asignar valores a la cita
    this.cita.paciente_id = this.selectedPacienteId;
    this.cita.medico_id = +medicoId; // Convertir a número
  
    console.log('Cita a agendar:', this.cita);
  
    // Enviar al backend
    this.appointmentService.registerAppointment(this.cita).subscribe(
      (response) => {
        console.log(response);
        alert('Cita agendada correctamente.');
        this.getCitas();
      },
      (error) => {
        console.log(error);
        alert('Ocurrió un error al agendar la cita.');
      }
    );
  }
  

  getPatients() {
    this.patientService.getPatients().subscribe(
      (response: Paciente[]) => {
        this.pacientes = response;
        console.log(this.pacientes);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getCitas(){
    let id = localStorage.getItem('id');
    this.appointmentService.getAppointmentsById(id!).subscribe(
      (response: CitaResponse[]) => {
        console.log(response);
        this.citass = response;
        console.log(this.citass);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  cancelarCita(cita: CitaResponse) {
    let id = cita.id;
    this.appointmentService.cancelAppointment(id!.toString()).subscribe(
      (response) => {
        console.log(response);
        alert('Cita cancelada correctamente.');
        this.getCitas();
      },
      (error) => {
        console.log(error);
        alert('Ocurrió un error al cancelar la cita.');
      }
    );
  }
    

}
