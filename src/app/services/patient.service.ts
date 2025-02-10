import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Paciente } from '../models/Paciente';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }

  registerPatient(paciente: Paciente) {
    return this.http.post(environment.apiUrl+'api/medico/crearpaciente', paciente);
  }

  getPatients(): Observable<Paciente[]> {
    return this.http.get<Paciente[]>(environment.apiUrl+'api/paciente/getall');
  }

}
