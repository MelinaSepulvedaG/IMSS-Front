import { Component } from '@angular/core';
import { MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  matricula : string;
  nombre: string;
  telefono: string;
  descanso: string;
  categoria: string;
  tipoEmp: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
 { matricula:'99033147',nombre:'	Andrade Leyva Martha Valeria',telefono:'', descanso:'DOM Y LUNES',categoria:'	MANEJADOR DE ALIMENTOS 80',tipoEmp:'BASE' },
{matricula:'99031284'	,nombre:'Badillo Cota Xochiquetzal',telefono:'' , descanso:'SAB Y DOM',categoria:	'NUTRICIONISTA DIETISTA 80'	,tipoEmp:'BASE'},
{matricula:'99032789',nombre:'Caceres Espinoza Daniela Gpe.',telefono:'', descanso:	'SAB Y DOM',categoria:	'NUTRICIONISTA DIETISTA 80'	,tipoEmp:'BASE' },
{matricula:'99034194'	,nombre:'Camacho Villalobos Miguel Angel',telefono:'', descanso:	'VIER Y SAB',categoria:	'MANEJADOR DE ALIMENTOS 80'	,tipoEmp:'BASE' },
{matricula:'99034397'	,nombre:'Castro Camacho Meyvic Angel',telefono:''	, descanso:'DOM Y LUN',categoria:	'MANEJADOR DE ALIMENTOS 80'	,tipoEmp:'BASE'} ,
{matricula:'99035144'	,nombre:'ceseña mendoza carlos antonio',telefono:'', descanso:'MARTES Y MIERCOLES'	,categoria:'MANEJADOR DE ALIMENTOS 80	',tipoEmp:'BASE' },
{matricula:'99032035'	,nombre:'Cuevas Urias Yanitzin' ,telefono:''	, descanso:'DOM Y LUN'	,categoria:''	,tipoEmp:''},
{matricula:'99035436'	,nombre:'De La Peña Meza Gilberto Abraham',telefono:''	, descanso:''	,categoria:'MANEJADOR DE ALIMENTOS 80'	,tipoEmp:'SUPLENTE'},
{matricula:'99036848	',nombre:'EDGAR DAVID ORTIZ PEREZ',telefono:'' , descanso:	'JUEVES Y VIERNES',categoria:	'NUTRICIONISTA DIETISTA 80',tipoEmp:	'SUPLENTE' },
{matricula:'99033805'	,nombre:'Escamilla Cota Christopher Iván',telefono:'', descanso:	'MIERC Y JUEV',categoria:'MANEJADOR DE ALIMENTOS 80'	,tipoEmp:'BASE' },
{matricula:'99033858',nombre:	'Espinoza Carreon Erick Oswaldo',telefono:'', descanso:	'desc mart, trab mier,vier y dom'	,categoria:'MANEJADOR DE ALIMENTOS 80'	,tipoEmp:'BASE'},
{matricula:'99036192'	,nombre:'Espinoza Osuna Adriana',telefono:'', descanso:	'LUN Y MARTES',categoria:	'NUTRICIONISTA DIETISTA 80',tipoEmp:	'SUPLENTE'},


  

];
/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-personal-consult',
  templateUrl: './personal-consult.component.html',
  styleUrls: ['./personal-consult.component.css'],
})
export class PersonalConsultComponent {
  displayedColumns: string[] = ['matricula', 'nombre', 'telefono', 'descanso','categoria','tipoEmp'];
  dataSource = ELEMENT_DATA;

  columnas = [
    {titulo: "Matricula",name: "matricula"},
    {titulo: "Nombre",name: "nombre"},
    {titulo: "Telefono",name: "telefono"},
    {titulo: "Dias de Descanso",name: "descanso"},
    {titulo: "Categoria",name: "categoria"},
    {titulo: "Tipo de Contratacion",name: "tipoEmp"},
  ];

}




