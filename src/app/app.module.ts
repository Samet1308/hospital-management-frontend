import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import {HttpClientModule} from "@angular/common/http";
import { AppointmentComponent } from './appointment/appointment.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import {FormsModule} from "@angular/forms";
import { HomeComponent } from './home/home.component';
import { DoctorDashComponent } from './doctor-dash/doctor-dash.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { MedicineListComponent } from './medicine-list/medicine-list.component';
import { CreateMedicineComponent } from './create-medicine/create-medicine.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    AppointmentComponent,
    CreateAppointmentComponent,
    HomeComponent,
    DoctorDashComponent,
    CreatePatientComponent,
    MedicineListComponent,
    CreateMedicineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
