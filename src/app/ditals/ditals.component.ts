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
export class DitalsComponent implements OnInit{
  // route: ActivatedRoute = inject(ActivatedRoute);
  // ProductsServe:ProductsService=inject(ProductsService);
  // Product!:Product|undefined;
  product: Product | undefined;

  constructor(private productService: ProductsService , private route: ActivatedRoute) {



  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productService.getProductById(params['productId']).subscribe(
        (data: Product) => {
          this.product = data;
          console.log('Product details:', this.product);
        },
        error => {
          console.error('Error fetching product details:', error);
        }
      );
    });

  }

 getProduct(id: number) {

  }





}
