import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrller: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GenerarTicketPage');
  }

  ionViewWillEnter(){
    this.viewCtrller.showBackButton(true);
  }

}
