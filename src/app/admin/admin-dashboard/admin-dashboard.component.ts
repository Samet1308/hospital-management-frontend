import { Component } from '@angular/core';
import {PatientService} from "../../services/patient.service";
import {Patient} from "../../services/patient";

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {
  patients:Patient[]=[]
constructor(
  private patientService: PatientService
) {}

  ngOnInit(){
    this.getPatients()
  }


  getPatients(){
  this.patientService.getPatients().subscribe(data=>{
    this.patients=data
  })
  }
  deletePatient(id:number){
    this.patientService.deletePatient(id).subscribe(data=>{
      console.log(data)
      this.getPatients()
    })
  }
}
