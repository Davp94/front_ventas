import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  private apiUrl = `${environment.apiUrl}/categorias`;
    constructor(private _http: HttpClient, private _authService: AuthService) {
    }


  getCategorias(): Observable<any> {
    return this._http.get<any>(this.apiUrl);
  }

  createCategorias(categoria: any): Observable<any> {

    return this._http.post(this.apiUrl, categoria);
  }

  updateCategorias(categoria: any): Observable<any> {

    const url = `${this.apiUrl}/${categoria.id_categoria}`;
    return this._http.put(url, categoria);
  }

  deleteCategoria(id: number): Observable<void> {

    const url = `${this.apiUrl}/${id}`;
    return this._http.delete<void>(url);
  }

}
