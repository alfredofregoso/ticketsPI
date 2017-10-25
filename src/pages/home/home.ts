
import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
declare var infoWindow;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private viewController: ViewController) {}
    

    ionViewWillEnter(){
      this.viewController.showBackButton(false);
    }
 


  
    
}