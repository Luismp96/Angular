import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {


  numero_articulos: number = 10;

  //CREAMOS ARRAY CON TODO RELLENO A 0
  articulos = Array(this.numero_articulos).fill(0);
  
}
