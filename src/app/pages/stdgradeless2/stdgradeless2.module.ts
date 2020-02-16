import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Stdgradeless2Page } from './stdgradeless2.page';

const routes: Routes = [
  {
    path: '',
    component: Stdgradeless2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Stdgradeless2Page]
})
export class Stdgradeless2PageModule {}
