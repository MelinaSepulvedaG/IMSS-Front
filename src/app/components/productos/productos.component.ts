import { Component, OnInit } from '@angular/core';
import { products } from 'src/app/modelos/productos';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos : products[] = [];

  constructor(){

  }
  ngOnInit():void{
    
  }

}
