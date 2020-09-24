import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { from } from 'rxjs';
import {Contacts} from "./contact";
import {contactService} from "../contact.service"

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  ngOnInit():void{

  }

  contactForm = new FormGroup({
    Name: new FormControl(''),
    phoneNumber: new FormControl(''),
    Email: new FormControl (''),
    Text: new FormControl(''),
  });

  
  contact: Contacts[];
  contact1 : Contacts;
  

  onSubmit() {
    console.warn(this.contactForm.value); 

      this.ContactsService.postTodosHttp2(this.contactForm.value).subscribe(Data => {
      console.log(Data + "Her tester jeg");
    });
  }
    constructor(private ContactsService:contactService) { }

  
}
