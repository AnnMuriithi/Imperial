import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { ClientAddEditComponent } from './client-add-edit/client-add-edit.component';
import { ProductsComponent } from './products/products.component';
import { NavComponent } from './nav/nav.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { IssueProductsComponent } from './issue-products/issue-products.component';
import { IssueProductsListComponent } from './issue-products-list/issue-products-list.component';

const routes: Routes = [
{ path: 'dashboard', component: DashComponent },
{ path: 'client-add-edit', component: ClientAddEditComponent },
{ path: 'products', component: ProductsComponent },
{path: 'nav', component: NavComponent },
{path:'client-list', component: ClientListComponent },
{ path: 'products-list', component: ProductsListComponent },
{ path: 'issue-products', component: IssueProductsComponent},
{ path: 'issued-products-list', component: IssueProductsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
children: [
  {
    path: 'dashboard',
    component: DashComponent,
    data: {
        title: 'Dashboard'
    }
  },
  {
  path: 'client-add-edit',
  component: ClientAddEditComponent,
  data: {
      title: 'Clients'
  }
},
{
  path: 'products',
  component: ProductsComponent,
  data: {
      title: 'Products'
  }
},
{
  path: 'client-list',
  component: ClientListComponent,
  data: {
      title: 'Clients List'
  }
},
{
  path: 'products-list',
  component: ProductsListComponent,
  data: {
      title: 'Products List'
  }
},
{
path: 'issue-products',
component: IssueProductsComponent,
data: {
    title: 'Issue Insurance Product'
}
},
{
  path: 'issued-products-list',
  component: IssueProductsListComponent,
  data: {
      title: 'Issued Insurance Product'
  }
  },
]
