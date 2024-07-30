import { Component } from '@angular/core';
import {Patient} from "../services/patient";
import {PatientService} from "../services/patient.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrl: './create-patient.component.css'
})
export class CreatePatientComponent {

patient: Patient = new Patient()

  constructor(
    private patientService:PatientService,
    private router: Router) {
  }


  createPatient(){
  this.patientService.createPatient(this.patient).subscribe(data=>{
    console.log(data)
  })
  }

  onSubmit(){
    this.createPatient()
    this.router.navigateByUrl('/doctor-dash')
  }

}
