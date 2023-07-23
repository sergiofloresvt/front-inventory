import { MediaMatcher } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
  mobileQuery: MediaQueryList;
  /*Declaramos una variable llamada mobileQuery de tipo MediaQueryList. Una MediaQueryList
   es un objeto que representa el resultado de una consulta de medios (media query). */
  menuNav = [
    {name: "Home", route: "home", icon: "home"},
    {name: "Categorias", route: "category", icon: "category"},
    {name: "Productos", route: "product", icon: "production_quantity_limits"}
  ]
  constructor(media: MediaMatcher) {
    /*Atra vez del constructor inyectamos la dependencias de servicio MediaMatcher. */
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    /* Le aplicamos a todas las pantallas con un ancho máximo de 600 píxeles. 
    Esta consulta se le asigna a la variable mobileQuery.
    */
  }
  ngOnInit() {}
}
