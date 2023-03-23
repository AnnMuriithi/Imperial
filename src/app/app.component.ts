import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {ClientAddEditComponent} from './client-add-edit/client-add-edit.component';
import { ClientsService } from './services/clients.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ProductsComponent } from './products/products.component';
import { ProductsService } from './services/products.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
 
  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'idno','gender', 'dob', 'phonenumber', 
  'email', 'fname', 'lname','phone','relation', 'fname1', 'lname1','phone1', 'relation1','action'];
  dataSource!: MatTableDataSource<any>;
  displayColumns: string[] = ['category','pname','start','end','amount','duration','status','ation'];
 
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(
    private _dialog:MatDialog, 
    private _clientsService:ClientsService,
    private _productsService: ProductsService,
    ){}

    ngOnInit(): void {
      this.getClientList();
      this.getProductsList();
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
  openProductsForm(){
    const dialogRef =this._dialog.open(ProductsComponent);
    dialogRef.afterClosed().subscribe({
      next:(val)=> { 
        if(val){
          this.getProductsList();
        }
      }
    });
    }
    getProductsList(){
      this._productsService.getProductsList().subscribe({
        next:(res) => {
          this.dataSource = new MatTableDataSource(res);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
        },
        error: console.log,
        
      })
    }
   
    deleteProduct(category: number) {
      this._productsService.deleteProduct(category).subscribe({
        next: (res) => {
          alert('Product deleted!');
          this.getProductsList();
        },
        error: console.log,
      });
    }
    openProductsEditForm(data: any) {
      const dialogRef = this._dialog.open(ProductsComponent, {
        data,
      });
      dialogRef.afterClosed().subscribe({
        next:(val)=> { 
          if(val){
            this.getProductsList();
          }
        }
      });
  
      dialogRef.afterClosed().subscribe({
        next: (val) => {
          if (val) {
            this.getProductsList();
          }
        },
      });
    }


}
