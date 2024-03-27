import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatTreeModule } from '@angular/material/tree';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { NavigationComponent } from './modules/navigation/navigation.component';
import { TableComponent } from './modules/table/table.component';
import { FormComponent } from './modules/form/form.component';
import { TreeComponent } from './modules/tree/tree.component';
import { CategoriasService } from './core/service/categorias.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './shared/login/login.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AuthService } from './core/service/auth.service';
import { MatTabsModule } from '@angular/material/tabs';
import { VentasModule } from './modules/ventas/ventas.module';
import { HomeComponent } from './modules/home/home.component';
import { AuthInterceptorProviders } from './core/interceptor/auth.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavigationComponent,
    TableComponent,
    FormComponent,
    TreeComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatTreeModule,
    HttpClientModule,
    MatDialogModule,
    MatTabsModule,
    VentasModule,
  ],
  providers: [
    provideAnimationsAsync(),
    CategoriasService,
    AuthService,
    AuthInterceptorProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
