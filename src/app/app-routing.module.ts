import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { ClientAddEditComponent } from './client-add-edit/client-add-edit.component';
import { ProductsComponent } from './products/products.component';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
{ path: 'dashboard', component: DashComponent },
{ path: 'client-add-edit', component: ClientAddEditComponent },
{ path: 'products', component: ProductsComponent },
{path: 'nav', component: NavComponent },];

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
        title: 'Clients'
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
}]
