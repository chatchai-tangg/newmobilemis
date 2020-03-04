import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddStaffreqPage } from './add-staffreq.page';

const routes: Routes = [
  {
    path: '',
    component: AddStaffreqPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddStaffreqPage]
})
export class AddStaffreqPageModule {}
