import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VentasComponent } from './ventas.component';
import { ProductosComponent } from './productos/productos.component';
import { AlmacenComponent } from './almacen/almacen.component';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    VentasComponent,
    ProductosComponent,
    AlmacenComponent,
  ],
  imports: [
    CommonModule,
    MatTabsModule,
  ]
})
export class VentasModule { }
