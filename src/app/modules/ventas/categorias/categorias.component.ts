import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, OnChanges, OnDestroy, SimpleChanges, type OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CategoriasService } from '../../../core/service/categorias.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [
    CategoriasService
  ],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriasComponent implements OnInit, AfterViewInit, OnDestroy, OnChanges  {
  //declarar variables
  saludo: string = 'HOLA MUNDO';
  isDisabled = false;
  categorias: any = [];
  constructor(private _categorias_service: CategoriasService) {}



  // CICLO DE VIDA DE COMPONENTES
  ngOnInit(): void {
    //TODO TRAER LISTA DE CATEGORIAS
    console.log('EECUTING ON INIT');
    this._categorias_service.getCategorias().subscribe(
      (res) => {this.categorias = res}
    );
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
