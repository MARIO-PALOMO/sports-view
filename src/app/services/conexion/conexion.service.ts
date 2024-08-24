import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  constructor(private http: HttpClient) { }

  get(ruta: string, token?: string): Observable<any> {

    var url = environment.api.url;
    var cabecera = new HttpHeaders();

    return this.http.get(url + ruta, { headers: cabecera });
  }

  getReglamentos(ruta: string, token?: string): Observable<any> {

    var url = environment.api.url;
    var cabecera = new HttpHeaders();

    return this.http.get(url + ruta, { headers: cabecera });
  }

  getPremios(ruta: string, token?: string): Observable<any> {

    var url = environment.api.url;
    var cabecera = new HttpHeaders();

    return this.http.get(url + ruta, { headers: cabecera });
  }
  post(ruta: string, parametros: any, token?: string): Observable<any> {

    var url = environment.api.url;
    var cabecera = new HttpHeaders();

    return this.http.post(url + ruta, parametros, { headers: cabecera });
  }
}
