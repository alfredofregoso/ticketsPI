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

  
  form: FormData;
  formgroup: FormGroup;
  name: AbstractControl;
  email: AbstractControl;
  password: AbstractControl;
  plantel: AbstractControl;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public formbuilder: FormBuilder, private alertCtrl: AlertController) 
  {
  
    this.formgroup = formbuilder.group({
        name:['', Validators.compose([Validators.required,Validators.minLength(3), this.nameValidator.bind(this)])],
        email:['', Validators.compose([Validators.required])],
        password:['', Validators.required],
        plantel:['', Validators.required]
    });

    this.name = this.formgroup.controls['name'];
    this.email = this.formgroup.controls['email'];
    this.password = this.formgroup.controls['password'];
    this.plantel = this.formgroup.controls['plantel'];
  }
  
  nameValidator(control: FormControl): {[s: string]: boolean} {
    if (!control.value.match("^[a-zA-Z ,.'-]+$")) {
      return {invalidName: true};
    }
  }

  emailValidator(control: FormControl): {[s: string]: boolean} {
    if (!(control.value.toLowerCase().match('^[a-zA-Z]\\w*@ucol\\.mx$') || control.value.toLowerCase().match('^[a-zA-Z]\\w*@yahoo\\.com$'))) {
      return {invalidEmail: true};
    }
  }

  logForm(){
    console.log(this.plantel);
   
  }


  
  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');

  }

  signup(){
    let headers = new Headers(
      {
        'Content-Type': 'application/json'
      });
    // headers.append('Content-Type', 'application/json');
    // headers.append('Access-Control-Allow-Origin', 'http://localhost:8100/');
    // headers.append('Access-Control-Allow-Credentials', 'true');
    let options = new RequestOptions({headers:headers});
    this.logForm();

    let userEmail = this.formgroup.controls['email'].value;
    let userName = this.formgroup.controls['name'].value;
    let userPlantel = this.formgroup.controls['plantel'].value;
    let userPass = this.formgroup.controls['password'].value;

      console.log(userEmail);
      console.log(userName);
      console.log(userPlantel);
      console.log(userPass);
    let body = {
      us_correo: userEmail, 
      us_nombre: userName,
      us_tipo_usuario: "1",
      us_plantel: userPlantel,
      us_contrasena: userPass
    };

  
    
    this.http.post('https://starbucapi.herokuapp.com/usuario', JSON.stringify(body), options)
      
      .map(res => res.json())
      .subscribe(data =>{
        console.log(data);
        let alert = this.alertCtrl.create({
          title: "Usuario agregado",
          subTitle: "Ya puedes iniciar sesión con tu correo ucol",
          buttons:['Dismiss']
        });
        alert.present();
      })
 	this.navCtrl.push(LoginPage);
  }

}
