import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SerService } from '../ser.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {


  constructor(private serService: SerService, private router: Router) { }

  ngOnInit(): void {
  }
  panelOpenState = false;
  cartOrdersTemp:any=[];

  starters = this.serService.starters
  tandoori = this.serService.tandoori
  biryani = this.serService.biryani
  chineese = this.serService.chineese
  curries = this.serService.curries
  desserts = this.serService.desserts
  beverages = this.serService.beverages
  soups = this.serService.soups


  updateItem(action: any, type: any, idd: any) {

    if (type == 'starters') {
      this.starters.forEach((val: any, ind) => {
        if (val.id == idd) {
          if (action == 'add') {
            val.qty = val.qty + 1;


            let valNumber = 0;
            this.cartOrdersTemp.forEach((value:any)=>{
              if(value.id==val.id){
                valNumber = 1;
                value.qty = val.qty;
              }
            })

            if(valNumber==0){
              this.cartOrdersTemp.push(val);
            }

            console.log(this.cartOrdersTemp);


           
          }
          if (action == 'remove' && (val.qty > 0)) {
            val.qty = val.qty - 1;


            this.cartOrdersTemp.forEach((value:any,index:number)=>{
              if(value.id==val.id){
               if(val.qty==0){

                 this.cartOrdersTemp.splice(index,1);
               }else{
                 value.qty = val.qty;
               }
              }
            })

           
            console.log(this.cartOrdersTemp);
          }
        }
      })

    }



    if (type == 'tandoori') {
      this.tandoori.forEach((val: any, ind) => {
        if (val.id == idd) {
          if (action == 'add') {

            val.qty = val.qty + 1;


            let valNumber = 0;
            this.cartOrdersTemp.forEach((value:any)=>{
              if(value.id==val.id){
                valNumber = 1;
                value.qty = val.qty;
              }
            })

            if(valNumber==0){
              this.cartOrdersTemp.push(val);
            }

            console.log(this.cartOrdersTemp);







          }
          if (action == 'remove' && (val.qty > 0)) {
            val.qty = val.qty - 1





            this.cartOrdersTemp.forEach((value:any,index:number)=>{
              if(value.id==val.id){
               if(val.qty==0){

                 this.cartOrdersTemp.splice(index,1);
               }else{
                 value.qty = val.qty;
               }
              }
            })

           
            console.log(this.cartOrdersTemp);
          }

        }
      })
    }



    if (type == 'biryani') {
      this.biryani.forEach((val: any, ind) => {
        if (val.id == idd) {
          if (action == 'add') {

            val.qty = val.qty + 1;
            let valNumber = 0;
            this.cartOrdersTemp.forEach((value:any)=>{
              if(value.id==val.id){
                valNumber = 1;
                value.qty = val.qty;
              }
            })

            if(valNumber==0){
              this.cartOrdersTemp.push(val);
            }

            console.log(this.cartOrdersTemp);






          }
          if (action == 'remove' && (val.qty > 0)) {
            val.qty = val.qty - 1


            this.cartOrdersTemp.forEach((value:any,index:number)=>{
              if(value.id==val.id){
               if(val.qty==0){

                 this.cartOrdersTemp.splice(index,1);
               }else{
                 value.qty = val.qty;
               }
              }
            })

           
            console.log(this.cartOrdersTemp);
          }

        }
      })
    }


    if (type == 'chineese') {
      this.chineese.forEach((val: any, ind) => {
        if (val.id == idd) {
          if (action == 'add') {

            val.qty = val.qty + 1;




            let valNumber = 0;
            this.cartOrdersTemp.forEach((value:any)=>{
              if(value.id==val.id){
                valNumber = 1;
                value.qty = val.qty;
              }
            })

            if(valNumber==0){
              this.cartOrdersTemp.push(val);
            }

            console.log(this.cartOrdersTemp);


          }
          if (action == 'remove' && (val.qty > 0)) {
            val.qty = val.qty - 1


            this.cartOrdersTemp.forEach((value:any,index:number)=>{
              if(value.id==val.id){
               if(val.qty==0){

                 this.cartOrdersTemp.splice(index,1);
               }else{
                 value.qty = val.qty;
               }
              }
            })

           
            console.log(this.cartOrdersTemp);
          }

        }
      })
    }



    if (type == 'curries') {
      this.curries.forEach((val: any, ind) => {
        if (val.id == idd) {
          if (action == 'add') {

            val.qty = val.qty + 1;


            let valNumber = 0;
            this.cartOrdersTemp.forEach((value:any)=>{
              if(value.id==val.id){
                valNumber = 1;
                value.qty = val.qty;
              }
            })

            if(valNumber==0){
              this.cartOrdersTemp.push(val);
            }

            console.log(this.cartOrdersTemp);


          }
          if (action == 'remove' && (val.qty > 0)) {
            val.qty = val.qty - 1


            this.cartOrdersTemp.forEach((value:any,index:number)=>{
              if(value.id==val.id){
               if(val.qty==0){

                 this.cartOrdersTemp.splice(index,1);
               }else{
                 value.qty = val.qty;
               }
              }
            })

           
            console.log(this.cartOrdersTemp);
          }

        }
      })
    }




    if (type == 'desserts') {
      this.desserts.forEach((val: any, ind) => {
        if (val.id == idd) {
          if (action == 'add') {

            val.qty = val.qty + 1;

          }
          if (action == 'remove' && (val.qty > 0)) {
            val.qty = val.qty - 1
          }

        }
      })
    }



    if (type == 'beverages') {
      this.beverages.forEach((val: any, ind) => {
        if (val.id == idd) {
          if (action == 'add') {

            val.qty = val.qty + 1;

          }
          if (action == 'remove' && (val.qty > 0)) {
            val.qty = val.qty - 1
          }

        }
      })
    }



    if (type == 'soups') {
      this.soups.forEach((val: any, ind) => {
        if (val.id == idd) {
          if (action == 'add') {

            val.qty = val.qty + 1;

          }
          if (action == 'remove' && (val.qty > 0)) {
            val.qty = val.qty - 1
          }

        }
      })


    }

    this.serService.cartSubject.next({data:this.cartOrdersTemp.length})
  }



  saveToService(){
    
    this.serService.cartOrders = this.cartOrdersTemp;
    

        this.router.navigate(['/cart']);
  }

  

  cancelOrders(){
    location.reload();
  }

}
