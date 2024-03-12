import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VentasComponent } from './ventas.component';
import { ProductosComponent } from './productos/productos.component';



@NgModule({
  declarations: [
    VentasComponent,
    ProductosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class VentasModule { }
