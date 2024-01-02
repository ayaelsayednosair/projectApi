

import {faCartPlus   } from'@fortawesome/free-solid-svg-icons';
import { ProductsService } from './../products.service';
import { Product } from '../product';
import { Component, inject } from '@angular/core';


@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css']
})
export class ListproductComponent {
  icon1=faCartPlus;
  varapi!:Product[];
  ProductsServe:ProductsService=inject(ProductsService);


  constructor(private Product:ProductsService){
  this.ProductsServe.getdataformapi().subscribe((dat:Product[])=>{this.varapi=dat});



  }
  addTocart(item: Product) {
    this.ProductsServe.addTocart(item).subscribe(
      response => {
        console.log('Item added to cart:', response);
      },

    );
  }
  showditalis(item:Product){

    console.log('item added to cart',item)

  }



}
