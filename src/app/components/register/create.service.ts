import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Create } from 'src/app/model/create'; 

const cabecera = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root',
})
export class CreateService {
  usuarioURL = 'http://localhost:8080/usuario/';

  constructor(private http: HttpClient) {}

  getCreates() {
    return this.http.get<Create[]>(this.usuarioURL + 'usuarios', cabecera);
  }

  addCreate(create: Create){
    return this.http.post<Create>(this.usuarioURL + 'usuarios', cabecera);
  }

}
