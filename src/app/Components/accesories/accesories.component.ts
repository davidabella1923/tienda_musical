import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accesories',
  templateUrl: './accesories.component.html',
  styleUrls: ['./accesories.component.css']
})
export class AccesoriesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  instrumentos:any = [
    {
      "title":"Afinador Electronico",
      "Description":"Cromático PW",
      "Imagen":"assets/img/catalogue/afinador1.jpg",
      "price":48000
    },
    {
      "title":"Afinador Andario",
      "Description":"Cromatico-Black",
      "Imagen":"assets/img/catalogue/afinador2.jpg",
      "price":48500
    },
    {
      "title":"Afinador Taylor",
      "Description":"Texas ADK-E10W",
      "Imagen":"assets/img/catalogue/afinador3.jpg",
      "price":368000
    },{
      "title":"Afinor Electronico ",
      "Description":"Cromatico, Black",
      "Imagen":"assets/img/catalogue/afinador4.jpg",
      "price":74200
    },
    {
      "title":"Guitarra Eléctrica ",
      "Description":"Washburn S1TS",
      "Imagen":"assets/img/catalogue/guitarra5.jpg",
      "price":602000
    },
    {
      "title":"Guitarra Eléctrica ",
      "Description":"Washburn S1TS-Black",
      "Imagen":"assets/img/catalogue/guitarra6.jpg",
      "price":605000
    },
    {
      "title":"Bajo Eléctrico ",
      "Description":"Warwick, Blak",
      "Imagen":"assets/img/catalogue/bajo1.jpg",
      "price":3798000
    },
    {
      "title":"Bajo Eléctrico ",
      "Description":"Warwick RB Corvette",
      "Imagen":"assets/img/catalogue/bajo2.jpg",
      "price":3456000
    },
    {
      "title":"Bajo electrico Texas",
      "Description":"ADKE88BP-MWR",
      "Imagen":"assets/img/catalogue/bajo3.jpg",
      "price":731000
    },
    {
      "title":"Bajo Eléctrico  ",
      "Description":"Gibson-Natural",
      "Imagen":"assets/img/catalogue/bajo4.jpg",
      "price": 5757000
    }
  ]
}

