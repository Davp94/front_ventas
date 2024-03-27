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
import { HomeComponent } from './modules/home/home.component';
import { authGuard } from './infraestructure/guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    component: HomeComponent,
    children: [
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
        canActivate: [authGuard],
        loadChildren: () => import("./modules/ventas/ventas.module").then(m => m.VentasModule)
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
