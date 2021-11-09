import { Component, OnInit } from '@angular/core';
import { SerService } from '../ser.service';

@Component({
  selector: 'app-deliveryservices',
  templateUrl: './deliveryservices.component.html',
  styleUrls: ['./deliveryservices.component.scss']
})
export class DeliveryservicesComponent implements OnInit {

  constructor(private serservice:SerService) { }

  ngOnInit(): void {
  }
  jColor() {
    return this.serservice.jColor;
}


}
