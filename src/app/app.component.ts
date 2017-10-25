import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { WelcomePage } from '../pages/welcome/welcome';
import { SignupPage } from '../pages/signup/signup';
import { GenerarTicketPage } from '../pages/generar-ticket/generar-ticket';
import { TicketAbiertoPage } from '../pages/ticket-abierto/ticket-abierto';
import { TicketCerradoPage } from '../pages/ticket-cerrado/ticket-cerrado';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = WelcomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      //{ title: 'Welcome', component: WelcomePage },
      //{ title: 'Login', component: LoginPage },
      //{ title: 'Signup', component: SignupPage },
      { title: 'Home', component: HomePage },
      { title: 'Generar Ticket', component: GenerarTicketPage },
      { title: 'Tickets Abiertos', component: TicketAbiertoPage },
      { title: 'Tickets Cerrados', component: TicketCerradoPage }
      
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    
  }
}
