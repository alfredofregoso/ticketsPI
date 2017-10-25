import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TicketAbiertoPage } from './ticket-abierto';

@NgModule({
  declarations: [
    TicketAbiertoPage,
  ],
  imports: [
    IonicPageModule.forChild(TicketAbiertoPage),
  ],
})
export class TicketAbiertoPageModule {}
