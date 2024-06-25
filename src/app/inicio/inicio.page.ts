import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  nombre: any='';
  apellido:any='';

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    }
  };

  images: string[] = [ 
    'assets/image1.jpg', 
    'assets/image2.jpg', 
    'assets/image3.jpg'
  ];
  
  constructor() { }

  ngOnInit() {

    this.nombre = localStorage.getItem('nombre');
    this.apellido = localStorage.getItem('apellido');
  }

}
