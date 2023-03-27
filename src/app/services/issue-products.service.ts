import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IssueProductsService {

  
  constructor(private _http:HttpClient) { }
  addIssuedProducts(data: any): Observable<any>{
    return this._http.post('http://localhost:3000/issueproducts', data);
  }
  
  updateIssuedProduct(id:number,data: any): Observable<any>{
    return this._http.put(`http://localhost:3000/issueproducts/${id}`,data);
  }
  getIssuedProductsList(): Observable<any>{
    return this._http.get('http://localhost:3000/issueproducts');
  }
  deleteIssuedProduct(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/issueproducts/${id}`);
  }
}
