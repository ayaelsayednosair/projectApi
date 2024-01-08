import { ProductsService } from './../products.service';
import { Product } from './../product';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-ditals',
  templateUrl: './ditals.component.html',
  styleUrls: ['./ditals.component.css']
})
export class DitalsComponent {
  // route: ActivatedRoute = inject(ActivatedRoute);
  // ProductsServe:ProductsService=inject(ProductsService);
  // Product!:Product|undefined;
  id!:number
  Product!:Observable<Product>;
  // product: Product | undefined;

  constructor(private productService: ProductsService , private route: ActivatedRoute) {



  }

  ngOnInit():void {
  //   this.route.params.subscribe(params => {
  //     this.productService.getProductById(params['productId']).subscribe(
  //       (data: Product) => {
  //         this.product = data;
  //         console.log('Product details:', this.product);
  //       },
  //       error => {
  //         console.error('Error fetching product details:', error);
  //       }
  //     );
  this.id = Number(this.route.snapshot.params['id']);
  this.Product=this.productService.getProductById(this.id);
    };

  }









