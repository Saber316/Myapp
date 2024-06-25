import { Component, OnInit, Input } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
import { DbserviceService } from '../services/dbservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  Usuario: any = "";
  password: any = "";
  nombre: string = "";

  constructor(private alertController: AlertController, private router: Router, private dbService: DbserviceService) { }

  ngOnInit() { }

  login() {
    if (this.Usuario.trim() === 'victor' && this.password.trim() === '1234') {
      let navigationExtras: NavigationExtras = {
        state: {
          usuarioEnviado: this.Usuario,
          passwordEnviado: this.password
        }
      };
      this.router.navigate(['/home'], navigationExtras);
    } else {
      this.presentAlert('Formulario enviado sin éxito');
    }
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  async mostrarFormulario() {
    const alert = await this.alertController.create({
      header: 'Nuevo Usuario',
      inputs: [
        {
          name: 'usuario',
          type: 'text',
          placeholder: 'Nombre Usuario'
        },
        {
          name: 'contrasena',
          type: 'password',
          placeholder: 'Contraseña'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('confirm cancel');
          }
        },
        {
          text: 'Almacenar',
          handler: (data) => {
            console.log('confirm OK');
            this.almacenarUsuario(data.usuario, data.contrasena);
          }
        }
      ]
    });

    await alert.present();  // Asegúrate de presentar el alert
  }

  almacenarUsuario(usuario: string, contrasena: string) {
    this.dbService.almacenarUsuario(usuario, contrasena);
  }
}
