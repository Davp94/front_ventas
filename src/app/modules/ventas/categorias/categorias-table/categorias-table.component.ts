import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTable, MatTableModule } from '@angular/material/table';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CategoriasService } from '../../../../core/service/categorias.service';
import { Operation } from '../../../../shared/operation.enum';
import { CategoriasFormComponent } from '../categorias-form/categorias-form.component';
import { CategoriasViewComponent } from '../categorias-view/categorias-view.component';

@Component({
  selector: 'app-categorias-table',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatIconModule, MatDialogModule],
  providers: [CategoriasService],
  templateUrl: './categorias-table.component.html',
  styleUrl: './categorias-table.component.scss',
})
export class CategoriasTableComponent implements OnInit, AfterViewInit {
  @ViewChild(MatTable)table!: MatTable<any>;
  categorias: any = [];
  displayedColumns = [
    'id_categoria',
    'cat_nombre',
    'cat_descripcion',
    'cat_estado',
    'actions',
  ];
  constructor(
    private _categorias_service: CategoriasService,
    private _dialog: MatDialog
  ) {}

  ngAfterViewInit(): void {
    this.getCategorias();
  }

  ngOnInit(): void {
    //this.getCategorias();
  }

  getCategorias() {
    this._categorias_service.getCategorias().subscribe({
      next: (categorias: any[]) => {
        this.categorias = categorias;
        this.table.dataSource = categorias;
      },
      error: (error: any) => {
        console.log('Error al cargar las categorias', error);
      }

    });
  }

  openDialog(operation: Operation, categoria?: any){
    switch(operation){
      case Operation.CREATE: {
        const dialogRef = this._dialog.open(CategoriasFormComponent)
        dialogRef.afterClosed().subscribe(()=>{
          this.getCategorias();
          //alternative -- state management (ngrx)
        });
        break;
      }
      case Operation.UPDATE: {
        const dialogRef = this._dialog.open(CategoriasFormComponent, { data: categoria})
        dialogRef.afterClosed().subscribe(()=>{
          this.getCategorias();
          //alternative -- state management (ngrx)
        });
        break;
      }
      case Operation.READ:
      case Operation.DELETE: {
        const dialogRef = this._dialog.open(CategoriasViewComponent, { data: {categoria, operation}})
        dialogRef.afterClosed().subscribe(()=>{
          this.getCategorias();
          //alternative -- state management (ngrx)
        });
        break;
      }
    }

  }

  onClick() {
    console.log('clicking button')
  }
}
