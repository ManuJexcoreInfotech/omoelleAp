import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WizardPage } from './wizard';

@NgModule({
  declarations: [
    WizardPage,
  ],
  imports: [
    IonicPageModule.forChild(WizardPage),
  ],
  exports: [
    WizardPage
  ]
})
export class WizardPageModule {}
