import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import {ContactComponent} from "./contact/contact.component"
import { Contacts } from "./contact/contact"

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}
  

@Injectable({
  providedIn: 'root'
})
export class contactService {
  Contact = ContactComponent;
  constructor(private http:HttpClient) { }
  url1 = 'https://localhost:44395/api/contact'

  
  postTodosHttp2(Contacts:any):Observable<Contacts>{
    return this.http.post<Contacts>(this.url1,Contacts,httpOptions);
  }
}
