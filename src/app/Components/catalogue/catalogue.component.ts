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
  instrumentos: any = [

   
    {
      "title": "GUITARRA ELECTRICA ",
      "Description": "Washburn S1TS",
      "Imagen": "assets/img/catalogue/guitarra5.jpg",
      "price": 602000
    },
    {
      "title": "GUITARRA ELECTRICA ",
      "Description": "Washburn S1TS-Black",
      "Imagen": "assets/img/catalogue/guitarra6.jpg",
      "price": 605000
    },
    {
      "title": "BAJO ELECTRICO ",
      "Description": "Warwick, Blak",
      "Imagen": "assets/img/catalogue/bajo1.jpg",
      "price": 3798000
    },
    {
      "title": "BAJO ELECTRICO ",
      "Description": "Warwick RB Corvette",
      "Imagen": "assets/img/catalogue/bajo2.jpg",
      "price": 3456000
    },
    {
      "title": "BATERIA STANDAR NIÑO ",
      "Description": "Mapex Prodigy series",
      "Imagen": "assets/img/catalogue/Bateria standar2.png",
      "price": 2175000
    },
    {
      "title": "BATERIA CHERRY MIST MAPLE ",
      "Description": "Saturn V Exotic Cherry",
      "Imagen": "assets/img/catalogue/Bateria_3.png",
      "price": 15203000
    },
    {
      "title": "BATERIA YAMAHA  ",
      "Description": "Drumbass IV",
      "Imagen": "assets/img/catalogue/bateria1.jpg",
      "price": 8564000
    },
    {
      "title": "BATERIA YAMAHA  ",
      "Description": "Apocalipse Red Limited Edition",
      "Imagen": "assets/img/catalogue/bateria2.jpg",
      "price": 12639000
    },
    {
      "title": "ACORDEON HOHNER  ",
      "Description": "Bravo  II 48 bajos rojo",
      "Imagen": "assets/img/catalogue/acordeon01.png",
      "price": 3562000
    },
    {
      "title": "ACORDEON HOHNER  ",
      "Description": "Clasico Corona II",
      "Imagen": "assets/img/catalogue/acordeon2.png",
      "price": 2800000
    },
    {
      "title": "ACORDEON HONNER ",
      "Description": "Rey Vallenato Rojo",
      "Imagen": "assets/img/catalogue/REYVALLENATOHOHNERROJO.jpg",
      "price": 2670000
    },
    {
      "title": "ACORDEON HOHNER ",
      "Description": "BRAVO III  72 BAJOS ROJO",
      "Imagen": "assets/img/catalogue/acordeon hohner bravo rojo.png",
      "price": 4800000
    },
    {
      "title": "PIANO DIGITAL ",
      "Description": "KURZWEIL KA130",
      "Imagen": "assets/img/catalogue/Piano digital KA130.jpg",
      "price": 3300000
    },
    {
      "title": "SINTETIZADOR ROLAND ",
      "Description": " XPS-10 Profesional",
      "Imagen": "assets/img/catalogue/Sintetizador Roland.png",
      "price": 2500000
    },
    {
      "title": "PIANO VERTICAL  ",
      "Description": "ESSEX BY STEINWAY",
      "Imagen": "assets/img/catalogue/piano vertical essex.jpg",
      "price": 25900000
    },
    {
      "title": "PIANO DE COLA ",
      "Description": "By Steinway EGP155",
      "Imagen": "assets/img/catalogue/piano de cola essex.jpg",
      "price": 63500000
    },
    {
      "title": "MICROFONO VOCAL TECHNICA ",
      "Description": "Vocal Audio de Condensador",
      "Imagen": "assets/img/catalogue/microfono vocal technica.png ",
      "price": 500000
    },
    {
      "title": "MICROFONO SENNHEISER ",
      "Description": "cardioide para drums",
      "Imagen": "assets/img/catalogue/microfono sennheiser.jpg",
      "price": 700000
    },
    {
      "title": "MICROFONO SENNHEISER SILVER ",
      "Description": "Super Cardioide para Instrumento",
      "Imagen": "assets/img/catalogue/mic sennheiser silver.png",
      "price": 652000
    },
    {
      "title": "SET DE MICROFONOS SENNHEISER ",
      "Description": "Drummiccase para bateria de 7 unidades",
      "Imagen": "assets/img/catalogue/set sennheiser.png",
      "price": 6500000
    },
    {
      "title": "CABINA DE SONIDO ",
      "Description": "Cabina Line 6 Stagesourse",
      "Imagen": "assets/img/catalogue/cabina line.jpg",
      "price": 3450000
    },
    {
      "title": "CABINA DE SONIDO  ",
      "Description": "Cerwin Vega 1500 Watts",
      "Imagen": "assets/img/catalogue/cabina cerwin.png",
      "price": 3800000
    },
    {
      "title": "CABINA DE SONIDO ",
      "Description": "stagesourse activa 1400 Watts",
      "Imagen": "assets/img/catalogue/cabina l3t.png",
      "price": 4570000
    },
    {
      "title": "CABINA DE SONIDO  ",
      "Description": "Mackie Activa 1600 Watts",
      "Imagen": "assets/img/catalogue/cabina suspendida.jpg",
      "price": 5680000
    },
    {
      "title": "AMPLIFICADOR DE GUITARRA  ",
      "Description": "Firehawk 1500 line 6",
      "Imagen": "assets/img/catalogue/amplificador guitarra.png",
      "price": 650000
    },
    {
      "title": "AMPLIFICADOR DE GUITARRA ",
      "Description": "JC-120 jazz Chorus",
      "Imagen": "assets/img/catalogue/amplificador roland.jpg",
      "price": 5670000
    },
    {
      "title": "AMPLIFICADOR DE GUITARRA ",
      "Description": "Marshall 1962 BluesBreaker",
      "Imagen": "assets/img/catalogue/amplificador marshall.png",
      "price": 7893500
    },
    {
      "title": "AMPLIFICADOR DE GUITARRA  ",
      "Description": "Marshall AST2C 30 Watts Astoria",
      "Imagen": "assets/img/catalogue/amplificador AST2C.png",
      "price": 9200000
    },
    {
      "title": "EFECTOS VOZ ",
      "Description": "procesador de efecto vocal Boss VE-5RD",
      "Imagen": "assets/img/catalogue/pedal boss.png",
      "price": 1450000
    },
    {
      "title": "EFECTOS VOZ ",
      "Description": " procesador de efectos vocales Boss VE-20",
      "Imagen": "assets/img/catalogue/pedal red boss.jpg",
      "price": 1699000
    },
    {
      "title": "EFECTOS VOZ ",
      "Description": "procesador de efectos vocales Boss VE-8",
      "Imagen": "assets/img/catalogue/pedal beige.png",
      "price": 1780000
    },
    {
      "title": "EFECTOS VOZ  ",
      "Description": "Procesador de efectos vocales Boss VE-500",
      "Imagen": "assets/img/catalogue/pedal gris.jpg",
      "price": 2250000
    },
  ]
}
