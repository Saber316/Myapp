import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  usuarioRecibido: string = '';
  passwordRecibido: string = '';



  nombre: any = '';
  apellido: any = '';
  selectedOption: any = '';
  selectedDate: any = '';

  usuariRecibidoPersistente: any='';

  constructor(private router: Router, private activateroute: ActivatedRoute, private alertController: AlertController) {
    this.activateroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras?.state) {
        this.usuarioRecibido = this.router.getCurrentNavigation()?.extras?.state?.['usuarioEnviado'] ;
        this.passwordRecibido = this.router.getCurrentNavigation()?.extras?.state?.['PasswordEnviado'];


        localStorage.setItem('usuariRecibidoPersistente', this.usuarioRecibido)

      }
    });
  }

  ngOnInit() {
    this.nombre = localStorage.getItem('nombre') ;
    this.apellido = localStorage.getItem('apellido')  ;
    this.selectedOption = localStorage.getItem('selectedOption')  ;
    this.selectedDate = localStorage.getItem('selectedDate') ;

    this.usuariRecibidoPersistente = localStorage.getItem('usuariRecibidoPersistente')
  } 

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Mensaje',
      message: message,
      buttons: [
        {
          text: 'OK',
          handler: () => {
            console.log('OK clicked');
            this.router.navigateByUrl('/inicio');
          }
        }
      ]
    });
    await alert.present();
  }

  mostrar() {
    if (this.nombre.trim() === '' || this.apellido.trim() === '') {
      this.presentAlert('Error: nombre y apellido vacíos');
    } else {
      this.presentAlert('Su nombre es: ' + this.nombre + ' ' + this.apellido);

      // Guardar en localStorage
      localStorage.setItem('nombre', this.nombre);
      localStorage.setItem('apellido', this.apellido);
      localStorage.setItem('selectedOption', this.selectedOption);
      localStorage.setItem('selectedDate', this.selectedDate);
    }
  }

  limpiar() {
    this.nombre = '';
    this.apellido = '';
    this.selectedOption = '';
    this.selectedDate = '';

    localStorage.clear();
  }
}
