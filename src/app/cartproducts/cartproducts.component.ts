import { Component, OnInit } from '@angular/core';
import {faTrash }from'@fortawesome/free-solid-svg-icons';
import { Product } from '../product';
import { CartService } from '../cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cartproducts',
  templateUrl: './cartproducts.component.html',
  styleUrls: ['./cartproducts.component.css']
})
export class CartproductsComponent implements OnInit{

  icon1=faTrash;
  products!:Product[];
  constructor(private cserve:CartService) {
    console.log("constructor")



  }

ngOnInit() {
this.products= this.cserve.getcartitem();
console.log("tedfrhyt")
console.log(this.products)
  }

  Delepro(id:number){
    this.cserve.Deletpro(id)

  }

}




