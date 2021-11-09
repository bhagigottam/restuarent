import { Component, OnInit } from '@angular/core';
import { SerService } from '../ser.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  bgcolor = this.serservice.generalBcolor;
textcolor = this.serservice.tColor;

  constructor(private serservice:SerService) { }

  ngOnInit(): void {
  }
  setStyles() {
    const styles = {
          background: this.bgcolor,
          color: this.textcolor
    };
    return styles;
  }

  
}


