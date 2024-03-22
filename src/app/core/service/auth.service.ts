import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginDto } from '../../infraestructure/dto/login.dto';
import { Observable, map, tap } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string | null = null;
  private apiUrl = `${environment.apiUrl}/auth`;
  constructor(private _http: HttpClient) { }

  login(credentials: LoginDto): Observable<any> {
    return this._http.post<any>(this.apiUrl, credentials, { observe: 'response' }).pipe(
      map(response => this.token = response.headers.get('Authorization'))
    );
  }

  setToken(token: string){
    console.log("🚀 ~ AuthService ~ setToken ~ token:", token)
    this.token = token;
  }

  getToken(): string | null {
    console.log('token', this.token)
    return this.token;
  }

  isAuthenticated(): boolean {
    return !!this.token
  }

  logout(): void {
    this.token = null;
  }
}
