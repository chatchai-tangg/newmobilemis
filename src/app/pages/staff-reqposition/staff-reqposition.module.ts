import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StaffReqpositionPage } from './staff-reqposition.page';

const routes: Routes = [
  {
    path: '',
    component: StaffReqpositionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StaffReqpositionPage]
})
export class StaffReqpositionPageModule {}
