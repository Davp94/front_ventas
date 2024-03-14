import { Component, Inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { CategoriasService } from '../../../../core/service/categorias.service';
import { Operation } from '../../../../shared/operation.enum';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-categorias-form',
  templateUrl: './categorias-form.component.html',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatDialogModule, ReactiveFormsModule, MatCardModule, MatFormFieldModule],
  providers: [CategoriasService],
  styleUrl: './categorias-form.component.scss'
})
export class CategoriasFormComponent implements OnInit{
  categoriasForm: FormGroup;
  categoria: any;
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {categoria: any},
    private _categorias_service: CategoriasService,
    private _dialogRef: MatDialogRef<CategoriasFormComponent>,
    private _formbuilder: FormBuilder
  ){
    this.categoriasForm = this._formbuilder.group({
      id_categoria: [''],
      cat_nombre: [''],
      cat_descripcion: [''],
      cat_estado: ['']
    })
  }
  ngOnInit(): void {
    if(this.data){
      this.categoriasForm.patchValue(this.data)
    }
  }

  onSubmit(){
    if(this.categoriasForm.valid){
      if(this.data){
        this._categorias_service.updateCategorias(this.categoriasForm.value).subscribe({
          next: (res: any) => {
            alert('Categoria updated');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            alert('error al actualizar la categoria');
          }
        })
      } else {
        console.log("🚀 ~ CategoriasFormComponent ~ this._categorias_service.createCategorias ~ this.categoriasForm.value:", this.categoriasForm.value)
        this._categorias_service.createCategorias(this.categoriasForm.value).subscribe({
          next: (res: any) => {
            alert('Categoria created');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            alert('error al crear la categoria');
          }
        })
      }
    }
  }

}
