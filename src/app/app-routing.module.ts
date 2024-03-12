import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './modules/form/form.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { TableComponent } from './modules/table/table.component';
import { CategoriasComponent } from './modules/ventas/categorias/categorias.component';


const routes: Routes = [
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
    path: 'categorias',
    component: CategoriasComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
