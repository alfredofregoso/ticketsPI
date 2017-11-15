import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import {Http, Headers, RequestOptions } from '@angular/http';
import { HttpModule } from '@angular/http';

/**
 * Generated class for the TicketAbiertoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ticket-abierto',
  templateUrl: 'ticket-abierto.html',
})
export class TicketAbiertoPage {
  public userDetails: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    const data = JSON.parse(localStorage.getItem('userData'));
    this.userDetails = data.userData;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TicketAbiertoPage');
  }

  getTicketAbierto(){

  }

}
