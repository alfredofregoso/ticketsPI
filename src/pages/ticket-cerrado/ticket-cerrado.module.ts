import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TicketCerradoPage } from './ticket-cerrado';

@NgModule({
  declarations: [
    TicketCerradoPage,
  ],
  imports: [
    IonicPageModule.forChild(TicketCerradoPage),
  ],
})
export class TicketCerradoPageModule {}
