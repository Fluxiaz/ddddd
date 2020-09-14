import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  contactForm = new FormGroup({
    name: new FormControl(''),
    phonenumber: new FormControl(''),
    Email: new FormControl (''),
    text: new FormControl(''),
  });

  myimage1: string= "../../../assests/img/banner_4.png";

  onSubmit() {
    console.warn(this.contactForm.value); 

    
  }
}
