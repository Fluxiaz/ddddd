import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import {Seats} from './seats';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}
  

@Injectable({
  providedIn: 'root'
})
export class SeatsService {
  seat = Seats;
  constructor(private http:HttpClient) { }
  url1 = 'https://localhost:44395/api/seats'

  getTodosHttp1():Observable<Seats[]>{

    return this.http.get<Seats[]>(this.url1)
  
  }
  postTodosHttp2(seats1:any):Observable<Seats>{
    return this.http.post<Seats>(this.url1,seats1,httpOptions);
  }
}



