import { Component } from '@angular/core';
import {MedicineService} from "../services/medicine.service";
import {Medicine} from "../services/medicine";

@Component({
  selector: 'app-medicine-list',
  templateUrl: './medicine-list.component.html',
  styleUrl: './medicine-list.component.css'
})
export class MedicineListComponent {

  medicines:Medicine[]=[]

  constructor(
    private medicineService: MedicineService
  ) {}

  ngOnInit(){
    this.getMedicine()
  }

  getMedicine(){
    this.medicineService.getMedicine().subscribe(data=>{
      this.medicines=data
    })
  }
}
