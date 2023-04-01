import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from '../products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http:HttpClient) { }
  getProductsList(): Observable<any>{
    return this._http.get('http://localhost:8080/products/all');
  }
  addProduct(products: Products): Observable<Products>{
    return this._http.post<Products>('http://localhost:8080/products/add',products);
    
  }
  
  updateProduct(id:number,data: any): Observable<any>{
    return this._http.put<Products>(`http://localhost:8080/products/update`,data);
   
  }
  
  deleteProduct(id: number): Observable<any> {
    return this._http.delete(`http://localhost:8080/products/delete/${id}`);
  }
}


