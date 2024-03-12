import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  private apiUrl = "http://localhost:8090/categorias";

  constructor(private _http: HttpClient) { }

  getCategorias(): Observable<any> {
    return this._http.get<any>(this.apiUrl);
  }

  createCategorias(categoria: any): Observable<any> {
    return this._http.post(this.apiUrl, categoria);
  }

  updateCategorias(id:number, categoria: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this._http.post(url, categoria);
  }

  deleteCategoria(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this._http.delete<void>(url);
  }

}
