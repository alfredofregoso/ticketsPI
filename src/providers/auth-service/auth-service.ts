import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
let apiUrl = 'https://starbucapi.herokuapp.com/usuario';


@Injectable()
export class AuthServiceProvider {

  posts: any;

  constructor(public http : Http) {
    console.log('Hello AuthService Provider');
  }

  postData(credentials, type) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append("Content-type", "application/json")

      this.http.post('https://starbucapi.herokuapp.com/usuario', JSON.stringify(credentials), {headers:headers})
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });

  }

  postDataLogin(credentials,type){
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append("Content-type", "application/json")

      this.http.post('https://starbucapi.herokuapp.com/autenticar', JSON.stringify(credentials), {headers:headers})
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  postTicket(credentials,type){
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append("Content-type", "application/json")

      this.http.post('https://starbucapi.herokuapp.com/ticket', JSON.stringify(credentials), {headers:headers})
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  getTicketAbierto(credentials,type){
    return new Promise((resolve, reject) => {
      let headers = new Headers();
     // headers.append("Content-type", "application/json")

     this.http.get('https://starbucapi.herokuapp.com/tickets').map(res => res.json()).subscribe(data => {
      this.posts = data.data.children;
    });

  

  })
}
} 
