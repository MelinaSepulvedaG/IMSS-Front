import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableModule} from '@angular/material/table';


export interface PeriodicElement {
  id: number;
  nombre : string;
  start: string;
  end: string;
  total: number;
  observaciones :string;
}

const ELEMENT_DATA: PeriodicElement[] = [
 {id :1,nombre: 'Xochiquetzal',start: '2024-07-25',end: '2024-08-03',total: 10,observaciones:''},
 {id :1,nombre: 'Xochiquetzal',start: '2024-07-25',end: '2024-08-03',total: 10,observaciones:''},
 {id :1,nombre: 'Xochiquetzal',start: '2024-07-25',end: '2024-08-03',total: 10,observaciones:''},
 {id :1,nombre: 'Xochiquetzal',start: '2024-07-25',end: '2024-08-03',total: 10,observaciones:''},
 {id :1,nombre: 'Xochiquetzal',start: '2024-07-25',end: '2024-08-03',total: 10,observaciones:''},
 {id :1,nombre: 'Xochiquetzal',start: '2024-07-25',end: '2024-08-03',total: 10,observaciones:''},
 {id :1,nombre: 'Xochiquetzal',start: '2024-07-25',end: '2024-08-03',total: 10,observaciones:''},
 {id :1,nombre: 'Xochiquetzal',start: '2024-07-25',end: '2024-08-03',total: 10,observaciones:''},
 {id :1,nombre: 'Xochiquetzal',start: '2024-07-25',end: '2024-08-03',total: 10,observaciones:''},
 {id :1,nombre: 'Xochiquetzal',start: '2024-07-25',end: '2024-08-03',total: 10,observaciones:''},
 {id :1,nombre: 'Xochiquetzal',start: '2024-07-25',end: '2024-08-03',total: 10,observaciones:''},
 {id :1,nombre: 'Xochiquetzal',start: '2024-07-25',end: '2024-08-03',total: 10,observaciones:''},
];
/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-rol-vacacional',
  templateUrl: './rol-vacacional.component.html',
  styleUrls: ['./rol-vacacional.component.css']
})
export class RolVacacionalComponent {
  displayedColumns: string[] = ['id','nombre','start','end','total','observaciones'];
  dataSource = ELEMENT_DATA;

  columnas = [
    {titulo: "Matricula",name: "id"},
    {titulo: "Nombre",name: "nombre"},
    {titulo: "Fecha Inicio",name: "start"},
    {titulo: "Fecha Termino",name: "end"},
    {titulo: "Total de dias", name: "total"},
    {titulo: "Observaciones", name:"observaciones"}
  ];
}
