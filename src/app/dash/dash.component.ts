import { Component, OnInit ,ViewChild} from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { ProductsService } from '../services/products.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent  implements OnInit {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Manage Clients', cols: 1, rows: 1 },
          { title: 'Products', cols: 1, rows: 1 },
          { title: 'Issue Product', cols: 1, rows: 1 },
          { title: 'Issued Products', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Manage Clients', cols: 2, rows: 1 },
        { title: 'Products', cols: 1, rows: 1 },
        { title: 'Issue Products', cols: 1, rows: 2 },
        { title: 'Issued Products', cols: 1, rows: 1 }
      ];
    })
  );
  

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private breakpointObserver: BreakpointObserver,
    

    )  {}
    
    ngOnInit(): void {
      
    }

 
}
