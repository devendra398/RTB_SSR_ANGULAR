import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PagenotfoundComponent} from './shared/pagenotfound/pagenotfound.component';
import {ShoppinglistComponent} from './shoppinglist/shoppinglist.component';
const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'shopping-list', component:ShoppinglistComponent},
  {path:'**', component:PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
