import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminDashboardComponent} from "./admin/admin-dashboard/admin-dashboard.component";
import {AppointmentComponent} from "./appointment/appointment.component";
import {CreateAppointmentComponent} from "./create-appointment/create-appointment.component";
import {HomeComponent} from "./home/home.component";
import {DoctorDashComponent} from "./doctor-dash/doctor-dash.component";
import {CreatePatientComponent} from "./create-patient/create-patient.component";
import {MedicineListComponent} from "./medicine-list/medicine-list.component";
import {CreateMedicineComponent} from "./create-medicine/create-medicine.component";

const routes: Routes = [
  {path:'admin', component:AdminDashboardComponent},
  {path:'appointments', component: AppointmentComponent},
  {path:'create-appointment', component: CreateAppointmentComponent},
  {path:'home', component:HomeComponent},
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'doctor-dash', component:DoctorDashComponent},
  {path:'create-patient', component:CreatePatientComponent},
  {path:'view-medicine', component:MedicineListComponent},
  {path:'create-medicine', component:CreateMedicineComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
