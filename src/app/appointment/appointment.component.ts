import { Component } from '@angular/core';
import {AppointmentService} from "../services/appointment.service";
import {Appointment} from "../services/appointment";

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css'
})
export class AppointmentComponent {
  appointments: Appointment[] = []
  constructor(private appointmentService:AppointmentService) {
  }

  ngOnInit(){
    this.getAppointments()

  }

  getAppointments(){
    this.appointmentService.getAppointments().subscribe(data=>{
      this.appointments = data
    })
  }

  deleteAppointment(id:number){
    this.appointmentService.deleteAppointment(id).subscribe(data=>{
      console.log(data)
      this.getAppointments()
    })
  }
}
