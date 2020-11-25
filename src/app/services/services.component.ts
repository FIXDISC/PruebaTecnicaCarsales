import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Service {

  constructor(private http: HttpClient) {}

  url_episodios = `https://rickandmortyapi.com/api/episode/`;
  getEpisodios() {
    return this.http.get(this.url_episodios);
  }

}