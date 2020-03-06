import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddstddistfacPage } from './addstddistfac.page';

const routes: Routes = [
  {
    path: '',
    component: AddstddistfacPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddstddistfacPage]
})
export class AddstddistfacPageModule {}
