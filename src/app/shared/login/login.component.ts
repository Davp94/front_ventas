import { Component } from '@angular/core';
import { AuthService } from '../../core/service/auth.service';
import { LoginDto } from '../../infraestructure/dto/login.dto';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: any = '';
  password: any = '';
  constructor(private _authService: AuthService, private _router: Router){
  }

  login(): void {

    const credentials: LoginDto = { username: this.username, password: this.password };
    console.log("🚀 ~ LoginComponent ~ login ~ credentials:", credentials)
    this._authService.login(credentials).subscribe({
      next: (response) => {
        this._router.navigate(["dashboard"]);
        alert('Login Successful')
      },
      error: (error: any) => {
        console.log("🚀 ~ LoginComponent ~ this._authService.login ~ error:", error)
        console.log('Error login');
      }
    }
    )
  }
}
