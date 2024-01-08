import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from './product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
    cartitem:Product[]=[]
  private cartitemcount= new BehaviorSubject<number>(0);
  realcartcount=this.cartitemcount.asObservable();



  constructor() { }

  addtocart(Product:Product){
    this.cartitem.push(Product);
    this.cartitemcount.next(this.cartitem.length);
      }
     getcartitem():Product[]{
return this.cartitem
     }
     Deletpro(id:number){

      const index=this.cartitem.findIndex(pro => pro.id === id)
      this.cartitem.splice(index,1);
      this.cartitemcount.next(this.cartitem.length);
    }




}
