import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GenerarTicketPage } from './generar-ticket';

@NgModule({
  declarations: [
    GenerarTicketPage,
  ],
  imports: [
    IonicPageModule.forChild(GenerarTicketPage),
  ],
})
export class GenerarTicketPageModule {}
