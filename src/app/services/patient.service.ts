import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Patient} from "./patient";


const baseUrl = ["http://localhost:8080/api"]

@Injectable({
  providedIn: 'root'
})
export class PatientService {


  constructor(
    private httpClient : HttpClient
  ) { }

  getPatients():Observable<Patient[]>{
    return this.httpClient.get<Patient[]>(baseUrl+ "/patients" )
  }

  deletePatient(id:number):Observable<object>{
    return this.httpClient.delete(baseUrl + `/patients/${id}`)
  }

  createPatient(patient:Patient):Observable<Patient>{
    return this.httpClient.post<Patient>(baseUrl + '/patient',patient)
  }
}
