import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EquipoDetalleComponent } from './equipo-detalle.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [EquipoDetalleComponent],
  exports: [EquipoDetalleComponent] // Exporta si necesitas usarlo en otros módulos
})
export class EquipoDetalleModule {}