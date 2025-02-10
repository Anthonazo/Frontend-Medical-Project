import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { PatientComponent } from './pages/patient/patient.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';

export const routes: Routes = [

    {path: 'main', component: IndexComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'home', component: HomeComponent},
    {path: 'register-patient', component: PatientComponent},
    {path: 'appointment', component: AppointmentComponent},
    {path: '', redirectTo: 'main', pathMatch: 'full'},
];
