import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddStaffscholarPage } from './add-staffscholar.page';

const routes: Routes = [
  {
    path: '',
    component: AddStaffscholarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddStaffscholarPage]
})
export class AddStaffscholarPageModule {}
