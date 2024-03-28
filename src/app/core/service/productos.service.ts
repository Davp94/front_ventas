import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private apiUrl = `${environment.apiUrl}/productos`;
  constructor(private _http: HttpClient) { }

  getProductos(paginationParams?: any): Observable<any> {
    return this._http.get(this.apiUrl, {params: paginationParams});;
  }
}
