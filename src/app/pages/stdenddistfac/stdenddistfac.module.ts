import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StdenddistfacPage } from './stdenddistfac.page';

const routes: Routes = [
  {
    path: '',
    component: StdenddistfacPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StdenddistfacPage]
})
export class StdenddistfacPageModule {}
