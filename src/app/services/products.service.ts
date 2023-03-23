import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http:HttpClient) { }
  addProduct(data: any): Observable<any>{
    return this._http.post('http://localhost:3000/products', data);
  }
  
  updateProduct(id:number,data: any): Observable<any>{
    return this._http.put(`http://localhost:3000/products/${id}`,data);
  }
  getProductsList(): Observable<any>{
    return this._http.get('http://localhost:3000/products');
  }
  deleteProduct(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/products/${id}`);
  }
}


