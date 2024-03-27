import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'frontend_ventas';
  constructor(private _authService: AuthService){}
  ngOnInit(): void {
    const token = localStorage.getItem("token");
    if(token){
      this._authService.getToken();
    }
  }
}
