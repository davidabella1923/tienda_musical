import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  instrumentos:any = [
    {
      "title":"Guitarra Clasica",
      "Description":"Electroacústica Texas",
      "Imagen":"assets/img/catalogue/guitarra1.jpg",
      "price":330000
    },
    {
      "title":"Guitarra Acústica",
      "Description":"Marcate Ecológica",
      "Imagen":"assets/img/catalogue/guitarra2.jpg",
      "price":280000
    },
    {
      "title":"Guitarra electrica ",
      "Description":"Texas ADK-E10W",
      "Imagen":"assets/img/catalogue/guitarra3.jpg",
      "price":368000
    },{
      "title":"Guitarra Eléctrica ",
      "Description":"Texas ADK-E100, Black",
      "Imagen":"assets/img/catalogue/guitarra4.jpg",
      "price":370000
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
