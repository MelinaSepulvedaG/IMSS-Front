import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FullCalendarModule } from '@fullcalendar/angular';
import { MatTableModule } from '@angular/material/table';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProductosComponent } from './components/productos/productos.component';
import { LoginComponent } from './components/login/login.component';
import { PersonalComponent } from './components/personal/personal.component';
import { VacacionesComponent } from './components/vacaciones/vacaciones.component';
import { DietasComponent } from './components/dietas/dietas.component';
import { ProductConsultComponent } from './components/product-consult/product-consult.component';
import { PersonalConsultComponent } from './components/personal-consult/personal-consult.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DietaConsultComponent } from './components/dieta-consult/dieta-consult.component';
import { RolVacacionalComponent } from './components/rol-vacacional/rol-vacacional.component';
import { ReportsComponent } from './components/reports/reports.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProductosComponent,
    LoginComponent,
    PersonalComponent,
    VacacionesComponent,
    DietasComponent,
    ProductConsultComponent,
    PersonalConsultComponent,
    DietaConsultComponent,
    RolVacacionalComponent,
    ReportsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
