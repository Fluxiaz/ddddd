import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { from } from 'rxjs';
import { Seats } from '../seats';
import {SeatsService} from '../seats.service';


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
  seats: Seats[];
  seats1: Seats;

  

  onSubmit() {
    console.warn(this.SeatsForm.value); 

      this.SeatService.postTodosHttp2(this.SeatsForm.value).subscribe(Data => {
      console.log(Data + "Her tester jeg");
    });
    
  }
  constructor(private SeatService:SeatsService) { }

  ngOnInit(): void {
    
      this.SeatService.getTodosHttp1().subscribe(data=>{this.seats=data
      });

    
      
      

  }

}
