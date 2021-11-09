import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SerService } from '../ser.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private serservice:SerService ) { }
  dataOfCart =0;
  ngOnInit(): void {
    this.serservice.cartSubject.subscribe((bhagya:any)=>{
      this.dataOfCart = bhagya.data;
    })
  }



  
  
}
