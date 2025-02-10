import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router, RouterModule } from '@angular/router';
import { DoctorResponse } from '../../models/Doctor';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    RouterModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  email: string = '';
  password: string = '';
  responseDoctor: DoctorResponse = new DoctorResponse();

  constructor(private loginService: LoginService,
    private router: Router
  ) {}

  login(){
    this.loginService.login(this.email, this.password).subscribe(
      (response: DoctorResponse) => {
        this.responseDoctor = response;
        localStorage.setItem('id', this.responseDoctor.id!.toString());
        localStorage.setItem('nombre', this.responseDoctor.nombre!);
        localStorage.setItem('apellido', this.responseDoctor.apellido!);  
        this.router.navigate(['/home']);
      },
      (error) => {
        console.log(error);
      }
  );

  }

}
