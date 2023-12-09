import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  product: string;
  canti: number;
  price: number;
  date: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { product: 'arroz', canti: 1.79, price: 25 ,date : '2023-11-23'},
  { product: 'carne', canti: 7, price: 700 ,date : '2023-11-29'},
  { product: 'papa', canti: 3, price: 30 ,date : '2023-12-01'},
  { product: 'azucar', canti: 6, price: 180 ,date : '2023-10-21'},
  { product: 'pollo', canti: 9, price: 500 ,date : '2023-09-23'},
  { product: 'pescado', canti: 8, price: 300 ,date : '2023-11-26'},
  { product: 'leche', canti: 5, price: 250 ,date : '2023-11-25'},

];
/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-product-consult',
  templateUrl: './product-consult.component.html',
  styleUrls: ['./product-consult.component.css']
})
export class ProductConsultComponent {
  displayedColumns: string[] = ['product', 'canti', 'price', 'date'];
  dataSource = ELEMENT_DATA;

  columnas = [
    {titulo: "Producto",name: "product"},
    {titulo: "Cantidad",name: "canti"},
    {titulo: "Precio",name: "price"},
    {titulo: "Fecha Compra",name: "date"},
  ];
}
