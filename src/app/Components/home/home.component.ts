import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
tipoArticulos: any = [
"assets/img/catalogue/cars1.png",
"assets/img/catalogue/cars2.jpg",
"assets/img/catalogue/cars3.jpg",
"assets/img/catalogue/cars4.jpg",
"assets/img/catalogue/cars5.jpg",
"assets/img/catalogue/cars6.jpg"

]
cardCirculos: any = [
  {
    title: "AMPLIFICADOR",
    ImagenCirculo:"assets/img/catalogue/img1.jpg"
  },
  {
    title: "BOCINAS",
    ImagenCirculo:"assets/img/catalogue/img2.jpg"
  },
  {
    title: "REGULADOR",
    ImagenCirculo:"assets/img/catalogue/img3.jpg"
  },
  {
    title: "POTENCIADOR",
    ImagenCirculo:"assets/img/catalogue/img4.jpg"
  },
  {
    title: "MEZCLADOR",
    ImagenCirculo:"assets/img/catalogue/img5.jpg"
  }

]
}

