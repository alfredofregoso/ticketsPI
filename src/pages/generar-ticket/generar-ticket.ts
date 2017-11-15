import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import {Http, Headers, RequestOptions } from '@angular/http';
import { HttpModule } from '@angular/http';

/**
 * Generated class for the GenerarTicketPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-generar-ticket',
  templateUrl: 'generar-ticket.html',
})
export class GenerarTicketPage {

  responseData : any;
  userDetails: any;
  userID : any;
  userPostData = {"us_id":""};

  userData = {	
        "ti_fecha_alta": "2017-05-23T00:00:00.000Z",
        "ti_fecha_cierre": "0001-01-01T00:00:00.000Z",
        "ti_pregunta": "",
        "ti_calificacion": 0,
        "ti_asunto": "",
        "ti_estado": 1,
        "ti_usuario": 21  
      };

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrller: ViewController, public authService: AuthServiceProvider) {
    // const data = JSON.parse(localStorage.getItem('userData'));
    // this.userDetails = data.userData;
    // this.userID = this.userDetails.us_id
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GenerarTicketPage');
  }

  ionViewWillEnter(){
    this.viewCtrller.showBackButton(true);
  }

  generarTicket(){
    this.authService.postTicket(this.userData,'login').then((result) => {
      this.responseData = result;
      console.log(this.responseData);
      localStorage.setItem('userData', JSON.stringify(this.responseData));
      console.log(this.userData);
      this.userData.ti_asunto = "";
      this.userData.ti_pregunta = "";
      
      //this.navCtrl.push(HomePage);
    }, (err) => {
      // Error log
    });
  }

}
