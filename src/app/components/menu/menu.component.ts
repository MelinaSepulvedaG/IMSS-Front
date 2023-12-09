import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  selector : number = 0
  
  constructor(private router: Router){}

  btn_Productos(){
    this.selector = 1
  }
  
  btnPersonal(){
    this.selector = 2
  }
  btnVacations(){
    this.selector = 3
  }
  btnDietas(){
    this.selector = 4
  }
  btnProductConsult(){
    this.selector=5
  }
  btnPersonalConsult(){
    this.selector = 6
  }
  btnDietasConsult(){
    this.selector = 7
  }
  btnReporte(){
    this.selector=8
  }
  btnRol(){
    this.selector=9
  }
  ngOnInit(): void {
    
  }
  
}
