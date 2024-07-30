import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Medicine} from "./medicine";
import {Appointment} from "./appointment";


const baseUrl = ["http://localhost:8080/api"]

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  constructor(
    private httpClient : HttpClient
  ) { }

  getMedicine():Observable<Medicine[]>{
    return this.httpClient.get<Medicine[]>(baseUrl + '/medicines')
  }
  createMedicine(medicine:Medicine):Observable<Medicine>{
    return this.httpClient.post<Medicine>(baseUrl+ '/medicine', medicine)
  }

}
