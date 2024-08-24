import { Component } from '@angular/core';
import { ConexionService } from '../services/conexion/conexion.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  dtsEquipos: any;
  dtsEquipos2: any;

  constructor(private conexion: ConexionService, private router: Router) {
    this.getAllTeams();
  }

  getAllTeams() {
    this.conexion.get(environment.endpoints.teams.getAll.path).subscribe(
      (res: any) => {
        this.dtsEquipos = res.data.length > 0 ? res.data : null;
        if (this.dtsEquipos) {
          this.dtsEquipos = this.dtsEquipos.map((equipo: any) => ({
            ...equipo,
            color: this.generarColorAleatorioConTransparencia()
          }));
        }
        console.log(this.dtsEquipos);
      },
      err => {
        console.log(err);
      }
    );
  }

  generarColorAleatorioConTransparencia() {
    // Genera valores aleatorios para los componentes RGB (0-255)
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    // Genera un valor aleatorio para la opacidad (0-1)
    const a = Math.random().toFixed(2); // La opacidad está en el rango de 0 a 1, con dos decimales

    // Devuelve el color en formato RGBA
    return `rgba(${r}, ${g}, ${b}, 0.50)`;
  }


  openComponente(equipo: any) {
    this.router.navigate(['/equipo-detalle', equipo.id]);
  }
}
