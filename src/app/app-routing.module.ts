import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { DeliveryservicesComponent } from './deliveryservices/deliveryservices.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {path:"",pathMatch:'full',component:HomeComponent},
  {path:"menu",component:MenuComponent},
  {path:"about",component:AboutComponent},
  {path:"services",component:DeliveryservicesComponent},
  {path:"cart",component:CartComponent},
  {path:"home",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
