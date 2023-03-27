import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { IssueProductsComponent } from '../issue-products/issue-products.component';
import { IssueProductsService } from '../services/issue-products.service';

@Component({
  selector: 'app-issue-products-list',
  templateUrl: './issue-products-list.component.html',
  styleUrls: ['./issue-products-list.component.css']
})
export class IssueProductsListComponent implements OnInit {
  displayedColumns: string[] = ['id','firstname', 'lastname', 'idno','category','pname','start','end','amount','duration','status',];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog:MatDialog, 
    private _issueproductsService: IssueProductsService,

    ){} ngOnInit(): void {
      
      this.getIssuedProductsList();
    }
    openIssueProductsForm(){
      const dialogRef =this._dialog.open(IssueProductsComponent);
      dialogRef.afterClosed().subscribe({
        next:(val)=> { 
          if(val){
            this.getIssuedProductsList();
          }
        }
      });
      }
      getIssuedProductsList(){
        this._issueproductsService.getIssuedProductsList().subscribe({
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
     
      deleteIssuedProduct(category: number) {
        this._issueproductsService.deleteIssuedProduct(category).subscribe({
          next: (res) => {
            alert('Product deleted!');
            this.getIssuedProductsList();
          },
          error: console.log,
        });
      }
      openProductsEditForm(data: any) {
        const dialogRef = this._dialog.open(IssueProductsComponent, {
          data,
        });
        dialogRef.afterClosed().subscribe({
          next:(val)=> { 
            if(val){
              this.getIssuedProductsList();
            }
          }
        });
    
        dialogRef.afterClosed().subscribe({
          next: (val) => {
            if (val) {
              this.getIssuedProductsList();
            }
          },
        });


}
}
