import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConexionService } from '../services/conexion/conexion.service';
@Component({
  selector: 'app-equipo-detalle',
  templateUrl: './equipo-detalle.component.html',
  styleUrls: ['./equipo-detalle.component.scss'],
})
export class EquipoDetalleComponent  implements OnInit {
  //equipo: any;

  detalleEquipo: any;
  constructor(
    private route: ActivatedRoute,
    private conexion: ConexionService
  ) { }
  
  ngOnInit() {

    this.getDetalleEquipo();
  }

  getDetalleEquipo(){
    // this.equipo={
    //   nombre: 'Equipo Ejemplo',
    //   descripcion: 'Este es un equipo de ejemplo con datos estáticos.',
    //   ubicacion: 'Oficina Central',
    //   fechaCreacion: '2024-01-01',
    //   miembros: ['Juan Pérez', 'Ana Gómez', 'Luis Fernández']
    // };
    // console.log(this.equipo);
    
    this.route.paramMap.subscribe(params => {
      const teamId = params.get('id');
      console.log(teamId);
      
      if (teamId) {
        this.conexion.get(`/players/${teamId}/getAllPlayersByTeamId/`).subscribe(
          (res: any) => {
            console.log(res);
            
            this.detalleEquipo = res.data.length > 0 ? res.data : null;
          },
          err => {
            console.log(err);
          }
        );
      }
    });

    
  }

}
