import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddstdgradelessPage } from './addstdgradeless.page';

const routes: Routes = [
  {
    path: '',
    component: AddstdgradelessPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddstdgradelessPage]
})
export class AddstdgradelessPageModule {}
