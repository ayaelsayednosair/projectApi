

import {faCartPlus  } from'@fortawesome/free-solid-svg-icons';
import { ProductsService } from './../products.service';
import { Product } from '../product';
import { Component, OnInit, inject } from '@angular/core';
import { CartService } from '../cart.service';



@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css']
})
export class ListproductComponent implements OnInit{
  icon1=faCartPlus;

  varapi!:Product[];
  // ProductsServe:ProductsService=inject(ProductsService);


  constructor(private Product:ProductsService,private cserve:CartService){
  // this.ProductsServe.getdataformapi().subscribe((dat:Product[])=>{this.varapi=dat});



  }
  ngOnInit(): void {
  this.Product.getdataformapi().subscribe((dat:Product[])=>{this.varapi=dat});
  }
  // addTocart(item: Product) {
  //   this.Product.addTocart(item).subscribe(
  //     response => {
  //       console.log('Item added to cart:', response);
  //     },

  //   );
  // }
  // showditalis(item:Product){

  //   console.log('item added to cart',item)

  // }
  addTOcart(Product:Product){
this.cserve.addtocart(Product);
console.log(this.addTOcart)
  }



}




