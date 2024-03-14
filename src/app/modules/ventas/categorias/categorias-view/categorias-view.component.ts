import { Component, Inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { CategoriasService } from '../../../../core/service/categorias.service';
import { Operation } from '../../../../shared/operation.enum';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-categorias-view',
  templateUrl: './categorias-view.component.html',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, MatCardModule],
  providers: [CategoriasService],
  styleUrl: './categorias-view.component.scss'
})
export class CategoriasViewComponent implements OnInit{
  categoria: any;
  operation: Operation;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {categoria: any, operation: Operation},
    private _categorias_service: CategoriasService,
    private _dialogRef: MatDialogRef<CategoriasViewComponent>
  ) {
    this.categoria = data.categoria;
    console.log("🚀 ~ CategoriasViewComponent ~ this.categoria :", this.categoria )
    this.operation = data.operation;
    console.log("🚀 ~ CategoriasViewComponent ~ this.operation:", this.operation)
  }
  ngOnInit(): void {
    console.log('DATA', this.data);
  }

  eliminarCategoria(id: number){
    this._categorias_service.deleteCategoria(id).subscribe({
      next: (val: any) => {
        alert('Categoria eliminada');
        this._dialogRef.close(true);
      }
    })
  }
}
