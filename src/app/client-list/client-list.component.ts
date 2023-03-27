import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ClientAddEditComponent } from '../client-add-edit/client-add-edit.component';
import { ClientsService } from '../services/clients.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { IssueProductsComponent } from '../issue-products/issue-products.component';


@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit{
  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'idno','gender', 'dob', 'phonenumber', 
  'email', 'fname', 'lname','phone','relation', 'fname1', 'lname1','phone1', 'relation1','action'];
  dataSource!: MatTableDataSource<any>;

  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog:MatDialog, 
    private _clientsService:ClientsService,
  
    ){}

    ngOnInit(): void {
      this.getClientList();
      
    }
    openIssueProductsForm(){
      const dialogRef =this._dialog.open(IssueProductsComponent);
      dialogRef.afterClosed().subscribe({
        next:(val)=> { 
          if(val){
            this.getClientList();
          }
        }
      });
      }
    openAddClientForm(){
      const dialogRef =this._dialog.open(ClientAddEditComponent);
      dialogRef.afterClosed().subscribe({
        next:(val)=> { 
          if(val){
            this.getClientList();
          }
        }
      });
      }
      getClientList(){
        this._clientsService.getClientList().subscribe({
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
      deleteClient(id: number) {
        this._clientsService.deleteClient(id).subscribe({
          next: (res) => {
            alert('Client deleted!');
            this.getClientList();
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
              this.getClientList();
            }
          }
        });
    
        dialogRef.afterClosed().subscribe({
          next: (val) => {
            if (val) {
              this.getClientList();
            }
          },
        });
      }

}
