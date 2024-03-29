import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, OnChanges, OnDestroy, SimpleChanges, type OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CategoriasService } from '../../../core/service/categorias.service';
import { HttpClientModule } from '@angular/common/http';
import { CategoriasTableComponent } from './categorias-table/categorias-table.component';

@Component({
    selector: 'app-categorias',
    standalone: true,
    providers: [
        CategoriasService
    ],
    templateUrl: './categorias.component.html',
    styleUrl: './categorias.component.scss',
    imports: [
        CommonModule,
        MatButtonModule,
        HttpClientModule,
        CategoriasTableComponent
    ]
})
export class CategoriasComponent implements OnInit, AfterViewInit, OnDestroy, OnChanges  {
  //declarar variables
  saludo: string = 'HOLA MUNDO';
  isDisabled = false;

  constructor() {}



  // CICLO DE VIDA DE COMPONENTES
  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngOnDestroy(): void {
    console.log('EXECUTING ON DESTROY');
  }

  ngAfterViewInit(): void {
    console.log('EECUTING AFTER VIEW INIT')
  }

  onClick(){
    console.log('CLICK');
  }


}
