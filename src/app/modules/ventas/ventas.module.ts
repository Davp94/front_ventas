import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VentasComponent } from './ventas.component';
import { ProductosComponent } from './productos/productos.component';
import { AlmacenComponent } from './almacen/almacen.component';
import {MatTabsModule} from '@angular/material/tabs';
import { VentasRoutingModule } from './ventas-routing.module';
import { CategoriasComponent } from './categorias/categorias.component';

@NgModule({
  declarations: [
    VentasComponent,
    ProductosComponent,
    AlmacenComponent,
  ],
  imports: [
    VentasRoutingModule,
    CommonModule,
    MatTabsModule,
    CategoriasComponent,
  ]
})
export class VentasModule { }
