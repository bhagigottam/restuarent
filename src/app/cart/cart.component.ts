import { Component, OnInit } from '@angular/core';
import { SerService } from '../ser.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor( private serservice:SerService) { }

  ngOnInit(): void {


    this.cartOrdersFinal=this.serservice.cartOrders;
    this.cartOrdersFinal.forEach((val:any,ind:any)=>{
      this.mainTotal = this.mainTotal+ val.price*val.qty;
    })
  }
         

  updateItem(action:any,idd:any){
    console.log(idd);
    console.log(this.cartOrdersFinal);
    
    
   this.cartOrdersFinal.forEach((val:any,ind:any)=>{
     if(val.id==idd){
       if(action=='add'){
 
         val.qty = val.qty+1;
 
         
 
       }
 
       if(action=='remove'&&(val.qty>0)){
         val.qty = val.qty-1;
 
        
       
           if(val.id==val.id){
            if(val.qty==0){
 
              this.cartOrdersFinal.splice(ind,1);
            }else{
              val.qty = val.qty;
            }
           }
        
 
        
        
       }
     }
   })
   this.mainTotal=0;
   this.cartOrdersFinal.forEach((val:any,ind:any)=>{
     this.mainTotal =  this.mainTotal+ val.price*val.qty;
   })
  }
  panelOpenState = false;



  cartOrdersFinal:any = [];

  mainTotal=0;
}
