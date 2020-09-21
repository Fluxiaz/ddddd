import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css']
})
export class SeatsComponent implements OnInit {

  SeatsForm = new FormGroup({
    name: new FormControl(''),
    tickets: new FormControl(''),
    Email: new FormControl (''),
    
  });

  

  onSubmit() {
    console.warn(this.SeatsForm.value); 

    
  }
  constructor() { }

  ngOnInit(): void {
  }
}
