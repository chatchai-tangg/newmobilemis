import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GetStafftrainPage } from './get-stafftrain.page';

const routes: Routes = [
  {
    path: '',
    component: GetStafftrainPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GetStafftrainPage]
})
export class GetStafftrainPageModule {}
