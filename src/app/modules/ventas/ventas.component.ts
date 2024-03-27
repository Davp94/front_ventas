import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrl: './ventas.component.scss'
})
export class VentasComponent implements OnInit{
  links = ["productos", "categorias", "almacenes"];
  activeLink = this.links[0];
  ngOnInit(): void {

  }

}
