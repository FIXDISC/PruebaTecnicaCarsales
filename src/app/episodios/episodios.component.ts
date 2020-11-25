import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-episodios',
  templateUrl: './episodios.component.html',
  styleUrls: ['./episodios.component.css']
})

export class EpisodiosComponent implements OnInit {

  episodios = [];

  constructor() {
     this.episodios = [{id: 23, name:'Episodio1', air_date: '02-02-2020'}];
   }

  ngOnInit(): void {

  }


}


