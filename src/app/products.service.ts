import { faIndent } from './../../node_modules/@fortawesome/free-solid-svg-icons/faIndent.d';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Product } from './product';




@Injectable({
  providedIn: 'root'
})
export class ProductsService {

private apiUrl='https://fakestoreapi.com/products';




constructor( private http : HttpClient) { }



// getProducts(): Observable<Product[]> {
//   const Products = of(Products);
//   return Products;
// }
// getProducts(): Observable<Product[]> {
//   return this.http.get<Product[]>(this.apiUrl)
//   }

//   getHero<Product>(id: number): Observable<Product[]> {
//     const url = `${this.apiUrl}/?id=${id}`;
//  return this.http.get<Product[]>(url)
//   }



getdataformapi():Observable<Product[]> {
  return this.http.get<Product[]>(this.apiUrl);
}
getproduct(){

  return this.http.get<Product[]>(this.apiUrl);
  // return this.http.get('https://fakestoreapi.com/products');

}

addTocart(item:Product){
  return  this.http.post("https://fakestoreapi.com/products",item)
}

// deletprodect(id:Product):Observable<any>{
//   return this.http.delete(`https://fakestoreapi.com/products/${id}`);
//   }
getProductById(id: number): Observable<Product> {
  return this.http.get<Product>(`${this.apiUrl}/${id}`);
  // return this.http.get<Product>('https://fakestoreapi.com/products/'+id.toString())
}


}


