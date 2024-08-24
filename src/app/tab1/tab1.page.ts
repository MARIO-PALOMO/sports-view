import { Component } from '@angular/core';
import { ConexionService } from '../services/conexion/conexion.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  dtsCompetition: any;
  constructor(private conexion: ConexionService) {
    this.getAllCompetitions();
  }

  getAllCompetitions() {
    this.conexion.get(environment.endpoints.competitions.getAll.path).subscribe(
      (res: any) => {

        this.dtsCompetition = res.data.length > 0 ? res.data[0] : null;
        console.log(this.dtsCompetition)
      },
      err => {
        console.log(err);
      }
    );
  }

  getReglamentos() {
    window.open('https://sports-api-c43e1b5f868a.herokuapp.com/pdf/premios-copa-wambras', '_blank');
  }

  getPremios() {
    console.log("ingresa");
    window.open('https://sports-api-c43e1b5f868a.herokuapp.com/pdf/premios-copa-wambras', '_blank');
    

  }
  formatDateToSpanish(auxdateString: string): string {
    var dateString = auxdateString != null ? auxdateString.split('T')[0] : '2024-01-01';
    
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if (!regex.test(dateString)) {
        throw new Error('Formato de fecha inválido. Use YYYY-MM-DD.');
    }

    // Extraer año, mes y día del string
    const [year, month, day] = dateString.split('-').map(Number);

    // Crear un objeto Date. Recuerda que el mes en JavaScript es base 0.
    const date = new Date(year, month - 1, day);

    // Verificar que la fecha es válida
    if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) {
        throw new Error('Fecha inválida.');
    }

    // Opciones para el formateo de la fecha en español
    const options: Intl.DateTimeFormatOptions = {
        weekday: 'long', // Nombre completo del día de la semana
        day: '2-digit', // Día del mes en formato de dos dígitos
        month: 'long', // Nombre completo del mes
        year: 'numeric' // Año en formato numérico
    };

    // Crear el formateador
    const formatter = new Intl.DateTimeFormat('es-ES', options);
    const formattedDate = formatter.format(date);

    // Ajustar el formato para que sea como "sábado, 31 de agosto del 2024"
    return `${formattedDate}`;
  }

}
