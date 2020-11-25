import { Component, OnInit } from '@angular/core';
import { Service } from '../services/services.component';
import { NgRedux, select } from '@angular-redux/store';
import { AppState } from '../store';
import { GET_EPISODIOS } from '../actions';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})

export class TopBarComponent implements OnInit {
  episodios1 = [];
  @select() episodios;

  constructor(private service: Service, private ngRedux: NgRedux<AppState>) {
  }

  ngOnInit() {
    this.service.getEpisodios().subscribe((data: any) => {
      this.episodios1.push(data.results);
      console.log(this.episodios1);
    });
  }

  get_episodios(){
    this.ngRedux.dispatch({type: GET_EPISODIOS, payload: this.episodios1});
    window.alert('H');
  }

}
