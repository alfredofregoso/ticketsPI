import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
 import {Http, Headers, RequestOptions } from '@angular/http';
// import {Observable } from 'rxjs/Observable';
import { HttpModule } from '@angular/http';
// import {ActionSheetController} from 'ionic-angular';
 import {FormBuilder, FormGroup,FormControl, Validators, AbstractControl} from '@angular/forms';
 import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
 


/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  responseData : any;
  userData = {"us_correo": "", "us_contrasena": ""};

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public authService: AuthServiceProvider ) 
  {

  }

  ionViewDidLoad() 
  {
    console.log('ionViewDidLoad LoginPage');
  }

  goHome(){
    this.authService.postDataLogin(this.userData,'login').then((result) => {
      this.responseData = result;
      console.log(this.responseData);
      localStorage.setItem('userData', JSON.stringify(this.responseData));
      console.log(this.userData);
      this.navCtrl.push(HomePage);
    }, (err) => {
      // Error log
    });
  }

}
