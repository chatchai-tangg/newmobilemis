import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GetStaffdistfacPage } from './get-staffdistfac.page';

const routes: Routes = [
  {
    path: '',
    component: GetStaffdistfacPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GetStaffdistfacPage]
})
export class GetStaffdistfacPageModule {}
