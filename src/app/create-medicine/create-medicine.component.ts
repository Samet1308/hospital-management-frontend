import { Component } from '@angular/core';
import {MedicineService} from "../services/medicine.service";
import {Router} from "@angular/router";
import {Medicine} from "../services/medicine";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Appointment} from "../services/appointment";

@Component({
  selector: 'app-create-medicine',
  templateUrl: './create-medicine.component.html',
  styleUrl: './create-medicine.component.css'
})
export class CreateMedicineComponent {

  medicine:Medicine =new Medicine()

    constructor(
      private medicineService:MedicineService,
      private router:Router,
      private httpClient:HttpClient
    ) {
    }
  createMedicine(){
    this.medicineService.createMedicine(this.medicine).subscribe(data=>{
      console.log(data)
      this.router.navigateByUrl("/view-medicine")
    })
  }


    onSubmit(){
    this.createMedicine()
    }
}
