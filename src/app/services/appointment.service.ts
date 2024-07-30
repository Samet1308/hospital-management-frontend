import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Appointment} from "./appointment";
import {HttpClient} from "@angular/common/http";

const baseUrl = ["http://localhost:8080/api"]

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {


  constructor(private httpClient: HttpClient) { }

  getAppointments():Observable<Appointment[]>{
    return this.httpClient.get<Appointment[]>(baseUrl +'/appointments')
  }

  createAppointment(appointment:Appointment):Observable<Appointment>{
    return this.httpClient.post<Appointment>(baseUrl+ '/appointment', appointment)
  }

  deleteAppointment(id:number):Observable<object>{
    return this.httpClient.delete(baseUrl + `/appointments/${id}`)
  }
}
