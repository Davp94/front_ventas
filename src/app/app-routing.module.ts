import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './modules/form/form.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { TableComponent } from './modules/table/table.component';
import { CategoriasComponent } from './modules/ventas/categorias/categorias.component';
import { LoginComponent } from './shared/login/login.component';
import { VentasComponent } from './modules/ventas/ventas.component';
import { AlmacenComponent } from './modules/ventas/almacen/almacen.component';
import { ProductosComponent } from './modules/ventas/productos/productos.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'formularios',
    component: FormComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'tabla',
    component: TableComponent,
  },
  {
    path: 'ventas',
    component: VentasComponent,
    children: [
      {
        path: 'productos',
        component: ProductosComponent,
      },
      {
        path: 'categorias',
        component: CategoriasComponent,
      },
      {
        path: 'almacen',
        component: AlmacenComponent,
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
