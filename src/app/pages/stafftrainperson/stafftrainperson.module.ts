import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StafftrainpersonPage } from './stafftrainperson.page';

const routes: Routes = [
  {
    path: '',
    component: StafftrainpersonPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StafftrainpersonPage]
})
export class StafftrainpersonPageModule {}
