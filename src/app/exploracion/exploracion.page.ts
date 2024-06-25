import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exploracion',
  templateUrl: './exploracion.page.html',
  styleUrls: ['./exploracion.page.scss'],
})
export class ExploracionPage {
  searchTerm: string = '';
  songs: string[] = [];
  recommendations: any[] = [
    { title: 'Playlist Rockera' },
    { title: 'Fistas Con tus amigos' },
    { title: 'Playlist de Concentracion' },
    // Agrega más recomendaciones según sea necesario
  ];

  constructor(private router: Router) {}

  search() {
    // simulacion de busqueda
    this.songs = Array.from({ length: 10 }, (_, i) => `Canción ${i + 1}: ${this.searchTerm}`);
  }

  closeSearch() {
    if (!this.searchTerm.trim()) {
      // si no hay texto en el campo---limpiar 
      this.searchTerm = '';
    }
  }

  goToPlayer() {
    this.router.navigate(['/reproductor']); // ruta segun sea necesario
  }
}
