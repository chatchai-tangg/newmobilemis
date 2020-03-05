import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GetStdgradelessPage } from './get-stdgradeless.page';

const routes: Routes = [
  {
    path: '',
    component: GetStdgradelessPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GetStdgradelessPage]
})
export class GetStdgradelessPageModule {}
