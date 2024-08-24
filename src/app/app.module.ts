import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConexionService } from './services/conexion/conexion.service';
import { HttpClientModule } from '@angular/common/http';
import { EquipoDetalleModule } from './equipo-detalle/equipo-detalle.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule,EquipoDetalleModule ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, ConexionService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // This line allows unknown elements
  bootstrap: [AppComponent],
})
export class AppModule {}
