import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
 import {Http, Headers, RequestOptions } from '@angular/http';
// import {Observable } from 'rxjs/Observable';
import { HttpModule } from '@angular/http';
// import {ActionSheetController} from 'ionic-angular';
 import {FormBuilder, FormGroup,FormControl, Validators, AbstractControl} from '@angular/forms';



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

  // form: FormData;
  // formgroup: FormGroup;
  // email: AbstractControl;
  // password: AbstractControl;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public formbuilder: FormBuilder) {

  //   this.formgroup = formbuilder.group({
  //     email:['', Validators.compose([Validators.required])],
  //     password:['', Validators.required],
  // });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');

 
  }
  signin(){

    
  	this.navCtrl.push(HomePage);
  }

}
