import { Component } from '@angular/core';
import {Patient} from "../services/patient";
import {PatientService} from "../services/patient.service";

@Component({
  selector: 'app-doctor-dash',
  templateUrl: './doctor-dash.component.html',
  styleUrl: './doctor-dash.component.css'
})
export class DoctorDashComponent {
  constructor(
    private patientService:PatientService
  ) {
  }
  patients: Patient[]=[]

  ngOnInit(){
    this.getPatients()
  }

  getPatients(){
    this.patientService.getPatients().subscribe(data=>{
      this.patients=data
    })
  }

}
