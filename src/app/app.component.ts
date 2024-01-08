import { CartService } from './cart.service';
import { Component, OnInit, inject } from '@angular/core';
import {faCartPlus  , faHome } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'projectApi';
  icon1=faHome;
  icon2=faCartPlus  ;
cartitemcount!:number;
  constructor(private CartService:CartService) {}
  ngOnInit(): void {
    this.CartService.realcartcount.subscribe((count)=>(this.cartitemcount=count));
  }





}
