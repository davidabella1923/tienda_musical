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
      "title":"AFINADOR ELECTRICO",
      "Description":"Cromático PW",
      "Imagen":"assets/img/catalogue/afinador1.jpg",
      "price":48000
    },
    {
      "title":"AFINADOR ELECTRICO",
      "Description":"Andario Cromatico-Black",
      "Imagen":"assets/img/catalogue/afinador2.jpg",
      "price":48500
    },
    {
      "title":"AFINADOR ELECTRICO",
      "Description":"Texas Tylor ADK-E10W",
      "Imagen":"assets/img/catalogue/afinador3.jpg",
      "price":368000
    },{
      "title":"AFINADOR ELECTRICO ",
      "Description":"Cromatico, Black",
      "Imagen":"assets/img/catalogue/afinador4.jpg",
      "price":74200
    },
    {
      "title":"SILLA PARA PIANO ",
      "Description":"Negra /Cafe",
      "Imagen":"assets/img/catalogue/silla piano.png",
      "price": 170000
    },
    {
      "title":"EQUALIZADOR DE GUITARRA",
      "Description":" 4 bandas Joyo JE-305",
      "Imagen":"assets/img/catalogue/equalizador guitarra.jpg",
      "price":70000
    },
    {
      "title":"CAPO PARA GUITARRA ",
      "Description":"Texas Plateado GCP8s",
      "Imagen":"assets/img/catalogue/capo guitarra.png",
      "price":45000
    },
    {
      "title":"CAPO PARA GUITARRA ",
      "Description":"Tylor 6 cuerdas Black Nickel",
      "Imagen":"assets/img/catalogue/capo tylor.jpg",
      "price":135000
    },
    {
      "title":"AUDIFONOS  SENNHEISER",
      "Description":"Audifonos intraaurales y Dinamicos",
      "Imagen":"assets/img/catalogue/audifonos sennheiser.png",
      "price": 450000
    },
    {
      "title":"AUDIFONOS SENNHEISER  ",
      "Description":"Audifonos HD 25 Plus On Ear",
      "Imagen":"assets/img/catalogue/audifono diadema.jpg",
      "price": 1250000
    },
    {
      "title":"STAND PARA MICROFONO",
      "Description":"Takstar 360 Grados",
      "Imagen":"assets/img/catalogue/stand para microfono.png",
      "price":135000
    },
    {
      "title":"INTERFAZ PARA IPHONE ",
      "Description":"Interfaz Iphone/Ipad/Ipod Sonic Port",
      "Imagen":"assets/img/catalogue/interfaz iphone.png",
      "price":480000
    },
    {
      "title":"PICKS GUITARRA ",
      "Description":"picks Blackline Alan Forbes 6 Unidades",
      "Imagen":"assets/img/catalogue/picks guitarra.jpg",
      "price":19500
    },
    {
      "title":"PICKS DELUXE ",
      "Description":"Tylor Picks Koa Collector",
      "Imagen":"assets/img/catalogue/picks deluxe.png",
      "price":185000
    },
    {
      "title":"GRIP EJERCITADOR ",
      "Description":"Planet Waves PW-VG-01",
      "Imagen":"assets/img/catalogue/grip ejercitador.jpg",
      "price":56000
    },
    {
      "title":"TAPONES OIDOS ",
      "Description":"tapones para oidos Zildjian",
      "Imagen":"assets/img/catalogue/tapones oidos.png",
      "price":85000
    },
    {
      "title":"PEDAL FOOTSWITCH PARA GUITARRA ",
      "Description":"Express MKII Line 6 ",
      "Imagen":"assets/img/catalogue/pedal footswitch.jpg",
      "price":685000
    },
    {
      "title":"BOQUILLA SAXO TENOR ",
      "Description":"Graftonite B3 Rico ",
      "Imagen":"assets/img/catalogue/boquilla saxo.png",
      "price":153000
    },
    {
      "title":"ABRAZADERA RICO ROYAL",
      "Description":"tapaboquilla Para Saxo Tenor",
      "Imagen":"assets/img/catalogue/abrazadera royal.jpg",
      "price":98500
    },
    {
      "title":"MICROFONO INALAMBRICO",
      "Description":"Guitarra/Bajo line 6 Relay G30",
      "Imagen":"assets/img/catalogue/microfono inalambrico.png",
      "price":998000
    },
    {
      "title":"CABLE ROXTONE ",
      "Description":"3 mt Microfono  macho smxx200l3",
      "Imagen":"assets/img/catalogue/cable roxtone.jpg",
      "price":18650
    },
    {
      "title":"CABLE ROXTONE ",
      "Description":"Interpedales 1/4-1/4",
      "Imagen":"assets/img/catalogue/cable 0.15.png",
      "price":18450
    },
    {
      "title":"BAQUETAS ",
      "Description":"Punta de Madera Vic Firth N7A Nova",
      "Imagen":"assets/img/catalogue/baquetas nova.png",
      "price":22500
    },
    {
      "title":"ESTUCHE PARA UKULELE ",
      "Description":"Ukulele tenor Mahalo UB1",
      "Imagen":"assets/img/catalogue/funda ukulele.png",
      "price":98600
    },
    {
      "title":"ESTUCHE RIGIDO ",
      "Description":"personalizado, Hecho a Medida",
      "Imagen":"assets/img/catalogue/estuche rigido.png",
      "price":450000
    },
    {
      "title":"ESTUCHE SEMI DURO ",
      "Description":"Personalizado, Hecho a Medida",
      "Imagen":"assets/img/catalogue/estuche semi.jpg",
      "price":255000
    },
    {
      "title":"PEDAL PARA SINTETIZADOR",
      "Description":"Permite Graduar el Efecto Deseado",
      "Imagen":"assets/img/catalogue/pedal sintetizador.png",
      "price":655000
    },
    {
      "title":"PARRILLA HOHNER ",
      "Description":"Repuesto Corona III",
      "Imagen":"assets/img/catalogue/repuesto hohner.png",
      "price":157000
    },
    {
      "title":"FUELLE HOHNER ",
      "Description":"Repuesto Rey Vallenato ",
      "Imagen":"assets/img/catalogue/repuesto fuelle.jpg",
      "price":235000
    },
    {
      "title":"FUELLE HOHNER ",
      "Description":"Repuesto Corona III",
      "Imagen":"assets/img/catalogue/repuesto fuelle2.png",
      "price":685000
    },
    {
      "title":"KIT ACCESORIOS FENDER ",
      "Description":"Perillas y Partes Genuinas Blanco",
      "Imagen":"assets/img/catalogue/kit accesorios fender.jpg",
      "price":85000
    },
    {
      "title":"LLAVE AFINACION BATERIA ",
      "Description":"Evans DATK Torque",
      "Imagen":"assets/img/catalogue/llave bateria.png",
      "price":108500
    },
  ]
}

