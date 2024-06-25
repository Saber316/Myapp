import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reproductor',
  templateUrl: './reproductor.page.html',
  styleUrls: ['./reproductor.page.scss'],
})
export class ReproductorPage implements OnInit {
  isPlaying = false;
  volume = 50; // Volumen inicial

  constructor(private router: Router) { } // Aquí se inyecta el servicio Router

  playPause() {
    const audioPlayer = document.getElementById('audioPlayer') as HTMLAudioElement;
    if (this.isPlaying) {
      audioPlayer.pause();
    } else {
      audioPlayer.play();
    }
    this.isPlaying = !this.isPlaying;
  }

  setVolume(volume: number) {
    const audioPlayer = document.getElementById('audioPlayer') as HTMLAudioElement;
    audioPlayer.volume = volume / 100;
  }

  goBack() {
    this.router.navigate(['/exploracion']); // Esto debería funcionar correctamente ahora
  }

  ngOnInit() {
  }
}
