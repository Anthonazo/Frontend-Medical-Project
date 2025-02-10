import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Cita, CitaResponse } from '../models/Cita';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http: HttpClient) { }

  registerAppointment(cita: Cita) {
    return this.http.post(environment.apiUrl+'api/medico/crearcita', cita);
  }

  getAppointmentsById(id: string): Observable<CitaResponse[]> {
    return this.http.get<CitaResponse[]>(`${environment.apiUrl}api/medico/getcitas/${id}`);
  }
  
  cancelAppointment(id: string) {
    return this.http.delete(`${environment.apiUrl}api/medico/cancelarcita/${id}`);
  }
  
}
