import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Clients } from '../clients';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
public apiServerUrl= environment.apiBaseUrl ;
  constructor(private _http:HttpClient) { }

   getAllClient(): Observable<any>{
    return this._http.get('http://localhost:8080/clients/all');
  }

  addClient(clients: Clients): Observable<Clients>{
    return this._http.post<Clients>('http://localhost:8080/clients/add',clients);
    
  }
  updateClient(idno:number,data: any): Observable<any>{
    return this._http.put<Clients>('http://localhost:8080/clients/update',data);
    
  }
   deleteClient(idno: number): Observable<any>{
    return this._http.delete(`${this.apiServerUrl}${idno}`);
   
    
  }
  
}
