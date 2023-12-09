import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//COMPONENTES
import { MenuComponent } from './components/menu/menu.component';
import { PersonalComponent } from './components/personal/personal.component';
import { ProductosComponent } from './components/productos/productos.component';
import { VacacionesComponent } from './components/vacaciones/vacaciones.component';
import { DietasComponent } from './components/dietas/dietas.component';
import { LoginComponent } from './components/login/login.component';
import { ProductConsultComponent } from './components/product-consult/product-consult.component';
import { PersonalConsultComponent } from './components/personal-consult/personal-consult.component';
import { ReportsComponent } from './components/reports/reports.component';
import { RolVacacionalComponent } from './components/rol-vacacional/rol-vacacional.component';
const routes: Routes = [

  {path : 'home' , component: MenuComponent},
  {path : 'productos' , component: ProductosComponent},
  {path : 'productConsult', component : ProductConsultComponent},
  {path : 'personal' , component: PersonalComponent},
  {path : 'vacaciones' , component: VacacionesComponent},
  {path : 'dietas' , component: DietasComponent},
  {path : 'login' , component: LoginComponent},
  {path: 'personal_consult', component : PersonalConsultComponent},
  {path: 'rol-vacacional',component: RolVacacionalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
