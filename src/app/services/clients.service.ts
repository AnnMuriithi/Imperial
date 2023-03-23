import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private _http:HttpClient) { }

  addClient(data: any): Observable<any>{
    return this._http.post('http://localhost:3000/clients', data);
  }
  
  updateClient(id:number,data: any): Observable<any>{
    return this._http.put(`http://localhost:3000/clients/${id}`,data);
  }
  getClientList(): Observable<any>{
    return this._http.get('http://localhost:3000/clients');
  }
  deleteClient(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/clients/${id}`);
  }
}
