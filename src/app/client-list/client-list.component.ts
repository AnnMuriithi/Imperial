import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClientAddEditComponent } from '../client-add-edit/client-add-edit.component';
import { ClientsService } from '../services/clients.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { IssueProductsComponent } from '../issue-products/issue-products.component';
import { Clients } from '../clients';



@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit{
  public clients!: Clients[];
  
  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'idno','gender', 'dob', 'phonenumber', 
  'email', 'fname', 'lname','phone','relation', 'fname1', 'lname1','phone1', 'relation1',
    'bfname','bflname','rel','bfname1','bflname1','rel1','action'];
  dataSource!: MatTableDataSource<any>;

  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog:MatDialog, 
    private _clientsService:ClientsService,
  
    ){}

    ngOnInit(){
      this.getAll();
      
    }
    openIssueProductsForm(){
      const dialogRef =this._dialog.open(IssueProductsComponent);
      dialogRef.afterClosed().subscribe({
        next:(val)=> { 
          if(val){
            this.getAll();
          }
        }
      });
      }
    openAddClientForm(){
      const dialogRef =this._dialog.open(ClientAddEditComponent);
      dialogRef.afterClosed().subscribe({
        next:(val)=> { 
          if(val){
            this.getAll();
          }
        }
      });
      }
      getAll(): void {
        this._clientsService.getAllClient().subscribe({
          next:(res) => {
            this.dataSource = new MatTableDataSource(res);
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
          },
          error: console.log,
          
        })
      }
      applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    
        if (this.dataSource.paginator) {
          this.dataSource.paginator.firstPage();
        }
      }
      deleteClient(idno:number ){
        this._clientsService.deleteClient(idno).subscribe({
          next: (res) => {
            alert('Client deleted!');
            this.getAll();
          },
          error: console.log,
        });
      }
      openAddEditForm(data: any) {
        const dialogRef = this._dialog.open(ClientAddEditComponent, {
          data,
        });
        dialogRef.afterClosed().subscribe({
          next:(val)=> { 
            if(val){
              this.getAll();
            }
          }
        });
    
        dialogRef.afterClosed().subscribe({
          next: (val) => {
            if (val) {
              this.getAll();
            }
          },
        });
      }

}
