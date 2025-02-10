import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Doctor, Usuario } from '../models/Doctor';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  registerUser(usuario: Usuario, especialidad: string) {
    console.log(usuario);
    return this.http.post(environment.apiUrl+'api/usuario/save', usuario, {params: {especialidad: especialidad}});
  }

}
