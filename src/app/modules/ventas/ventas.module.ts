import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VentasComponent } from './ventas.component';
import { ProductosComponent } from './productos/productos.component';
import { CategoriasFormComponent } from './categorias/categorias-form/categorias-form.component';
import { CategoriasViewComponent } from './categorias/categorias-view/categorias-view.component';



@NgModule({
  declarations: [
    VentasComponent,
    ProductosComponent,
    CategoriasFormComponent,
    CategoriasViewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class VentasModule { }
