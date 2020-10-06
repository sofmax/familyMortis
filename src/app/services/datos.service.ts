import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Family} from '../models/Family'
import { Character } from '../models/Character';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(private http: HttpClient) { }

  getDatos(){
    return this.http.get<Character[]>('https://rickandmortyapi.com/api/character/')

  }
}
