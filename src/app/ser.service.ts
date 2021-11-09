import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SerService {

  constructor() { }
   
    tabColor = 'rgb(100, 10, 184)';
    tColor = 'rgb(255, 255, 255, 0.87)';
    generalBcolor :any = 'rgb(83, 83, 189)';
    darkClr = '#121212';
    bColor = 'rgb(83, 83, 189)';

    jColor = '#1d1c1c';


    cartOrders=[];
    
    cartSubject = new Subject();


  starters = [
    {id:"ST001",name: 'Chicken Wings', price: 270, qty:0,panelOpenState:false},
    {id:"ST002",name: 'Chilli Chicken', price: 240, qty:0,panelOpenState:false},
    {id:"ST003",name: 'Chicken 65', price: 190, qty:0,panelOpenState:false},
    {id:"ST004",name: 'Apollo Fish', price: 250, qty:0,panelOpenState:false},
    {id:"ST005",name: 'Prawn Tempura', price: 220, qty:0,panelOpenState:false}
];
  // tslint:disable-next-line: member-ordering
  tandoori =  [
    {id:"TN001",qty:0,panelOpenState:false, name: 'Chicken Tikka', price: 260},
    {id:"TN002",qty:0,panelOpenState:false, name: 'Malai kebab', price: 190},
    {id:"TN003",qty:0,panelOpenState:false, name: 'Thangdi Kebab', price: 220},
    {id:"TN004",qty:0,panelOpenState:false, name: 'Tandoori Chicken', price: 290}
];
  // tslint:disable-next-line: member-ordering
biryani = [
{id:"BN001",qty:0,panelOpenState:false, name: 'Veg Biryani', price: 110},
{id:"BN002",qty:0,panelOpenState:false, name: 'Sp Veg Biryani', price: 140},
{id:"BN003",qty:0,panelOpenState:false, name: 'Chicken Dum Biryani', price: 190},
{id:"BN004",qty:0,panelOpenState:false, name: 'Chicken fry peice Biryani', price: 200},
{id:"BN005",qty:0,panelOpenState:false, name: 'Mutton Biryani', price: 240},
{id:"BN006",qty:0,panelOpenState:false, name: 'Panner Biryani', price: 155},
{id:"BN007",qty:0,panelOpenState:false, name: 'Prawns Biryani', price: 210}
];

// tslint:disable-next-line: member-ordering
chineese = [
{id:"CN001",qty:0,panelOpenState:false, name: 'Veg Fried rice', price: 85},
{id:"CN002",qty:0,panelOpenState:false, name: 'Veg Noodles', price: 80},
{id:"CN003",qty:0,panelOpenState:false, name: 'Veg Manchuria', price: 90},
{id:"CN004",qty:0,panelOpenState:false, name: 'Egg Fried rice', price: 95},
{id:"CN005",qty:0,panelOpenState:false, name: 'Egg Noodles', price: 100},
{id:"CN006",qty:0,panelOpenState:false, name: 'Egg Manchuria', price: 100},
{id:"CN007",qty:0,panelOpenState:false, name: 'Chicken Fried rice', price: 120},
{id:"CN008",qty:0,panelOpenState:false, name: 'Chicken Noodles', price: 120},
{id:"CN009",qty:0,panelOpenState:false, name: 'Chicken Manchuria', price: 125}
];

// tslint:disable-next-line: member-ordering
curries = [
{id:"CU001",qty:0,panelOpenState:false, name: 'Aloo curry', price: 75},
{id:"CU002",qty:0,panelOpenState:false, name: 'Dal curry', price: 85},
{id:"CU003",qty:0,panelOpenState:false, name: 'Egg curry', price: 85},
{id:"CU004",qty:0,panelOpenState:false, name: 'Chicken curry', price: 110},
{id:"CU005",qty:0,panelOpenState:false, name: 'Mutton curry', price: 140},
{id:"CU006",qty:0,panelOpenState:false, name: 'Fiah curry', price: 140},
{id:"CU007",qty:0,panelOpenState:false, name: 'Prawns curry', price: 135}
];
// tslint:disable-next-line: member-ordering
desserts = [
{id:"DE001",qty:0,panelOpenState:false, name: 'Gulab jamun', price: 50},
{id:"DE002",qty:0,panelOpenState:false, name: 'Rasagulla', price: 55},
{id:"DE003",qty:0,panelOpenState:false, name: 'Rasmalai', price: 70},
{id:"DE004",qty:0,panelOpenState:false, name: 'Basundi', price: 75}
];

beverages = [
{id:"BV001",qty:0,panelOpenState:false, name: 'Cold Coffee', price: 75},
{id:"BV002",qty:0,panelOpenState:false, name: 'Grape Juice', price: 60},
{id:"BV003",qty:0,panelOpenState:false, name: 'Musk Melon Juice', price: 65},
{id:"BV004",qty:0,panelOpenState:false, name: 'Badam Milk', price: 75},
{id:"BV005",qty:0,panelOpenState:false, name: 'Soft drinks', price: 70}
];

soups = [
{id:"SP001",qty:0,panelOpenState:false, name: 'Tomato soup', price: 65},
{id:"SP002",qty:0,panelOpenState:false, name: 'Veg lemon coriander soup', price: 70},
{id:"SP003",qty:0,panelOpenState:false, name: 'Chicken manchow soup', price: 75},
{id:"SP004",qty:0,panelOpenState:false, name: 'Mushroom soup', price: 85},
{id:"SP005",qty:0,panelOpenState:false, name: 'Sweet corn soup', price: 80}
];


}
