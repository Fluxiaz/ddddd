import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm = new FormGroup({
    name: new FormControl(''),
    phonenumber: new FormControl(''),
    Email: new FormControl (''),
    text: new FormControl(''),
  });

  

  onSubmit() {
    console.warn(this.contactForm.value); 

    
  }
  constructor() { }

  ngOnInit(): void {
  }
}
