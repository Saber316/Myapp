import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})


export class DbserviceService {

  constructor(private router: Router, private sqlite: SQLite) {
    // Creación de tabla usuario
    this.sqlite.create({
      name: 'datos.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('CREATE TABLE IF NOT EXISTS USUARIO (USER VARCHAR(10), CONTRASEÑA VARCHAR(10))', [])
        .then(() => {
          console.log('TABLA CREADA');
        })
        .catch(error => {
          console.error('Error al crear tabla:', error);
        });
    }).catch(error => {
      console.error('Error al abrir base de datos:', error);
    });
  }

  almacenarUsuario(usuario: string, contrasena: string) {
    this.sqlite.create({
      name: 'datos.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('fsr:  INSERT INTO USUARIO (USER, CONTRASEÑA) VALUES (?, ?)', [usuario, contrasena])
        .then(() => {
          console.log('fsr:  USUARIO CREADO');
        })
        .catch(error => {
          console.error('Error al crear USUARIO:', error);
        });
    }).catch(error => {
      console.error('Error al abrir base de datos:', error);
    });
  }

  canActivate() {
    this.router.navigate(['login']);
    return false;
  }
}
