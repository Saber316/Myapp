import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ReproductorPageRoutingModule } from './reproductor-routing.module';
import { ReproductorPage } from './reproductor.page';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReproductorPageRoutingModule,
    RouterModule
  ],
  declarations: [ReproductorPage]
})
export class ReproductorPageModule {}
