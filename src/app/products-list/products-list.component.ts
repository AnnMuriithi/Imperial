import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ProductsComponent } from '../products/products.component';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  displayedColumns: string[] = ['id','category','pname','start','end','amount','duration','status','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog:MatDialog, 
    private _productsService: ProductsService,
    ){}

    ngOnInit(): void {
      
      this.getProductsList();
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
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
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
