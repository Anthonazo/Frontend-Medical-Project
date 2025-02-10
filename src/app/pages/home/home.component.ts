import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FormsModule,
    RouterModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
verDetalleCita(_t36: any) {
throw new Error('Method not implemented.');
}

  userName: string = "Dr. Juan Pérez"; // Nombre del usuario autenticado
  pacientesCount: number = 120; // Número de pacientes registrados
  citasHoyCount: number = 5; // Número de citas para hoy
  ingresosMensuales: number = 7500; // Ingresos mensuales

  constructor() {}

  ngOnInit(): void {
    // Aquí puedes cargar datos dinámicos desde un servicio
  }

  logout() {
    // Lógica para cerrar sesión
    console.log("Sesión cerrada");
  }

}
