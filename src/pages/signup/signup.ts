import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import {Http, Headers, RequestOptions } from '@angular/http';
import {Observable } from 'rxjs/Observable';
import { HttpModule } from '@angular/http';
import {ActionSheetController} from 'ionic-angular';
import {FormBuilder, FormGroup,FormControl, Validators, AbstractControl} from '@angular/forms';
import { AlertController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the SignupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  responseData : any;
  userData = {"us_contrasena": "", "us_nombre": "","us_correo": "","us_plantel":"","us_tipo_usuario":"1"};

  constructor(public navCtrl: NavController, public authService: AuthServiceProvider ) {
  }

  signup(){
     this.authService.postData(this.userData,'signup').then((result) => {
      this.responseData = result;
      console.log(this.responseData);
      localStorage.setItem('userData', JSON.stringify(this.responseData));
      console.log(this.userData);
      this.navCtrl.push(LoginPage);
    }, (err) => {
      // Error log
    });

  }

  login(){
    //Login page link
    this.navCtrl.push(LoginPage);
  }
}