import { Component, OnInit } from '@angular/core';
import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';

import { SerService } from '../ser.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  time1: NgbTimeStruct= null;
    selected;

  dateSelected: string = null; 
  
  partySize: number[] = [];
  constructor(private serService:SerService) { 
   
  }

  ngOnInit(): void {
    for ( let i = 1 ; i <= 12; i++) {
      this.partySize.push(i);
  }
  }
  images = [];
  

  resStyle(){
    const res = {
      background : this.serService.darkClr,
      color : this.serService.tColor
  };
  return res;
  }


  backImg(){
    const backImg = {
      'background': 'url(\'../../assets/six.png\')',
      'object-fit': 'cover',
      'background-size': 'cover',
      'background-repeat': 'no-repeat',
      'height':'300px'
  };

  return backImg;
  }

  textColor() {
    const textcolor = {
      color: this.serService.tColor
    };
    return textcolor;
}
OnDateChange(v) {
  this.dateSelected = (v._i.date + '-' + (v._i.month + 1) + '-' + v._i.year);
}




bookNow(){

}
}
