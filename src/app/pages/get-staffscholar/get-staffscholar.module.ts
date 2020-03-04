import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GetStaffscholarPage } from './get-staffscholar.page';

const routes: Routes = [
  {
    path: '',
    component: GetStaffscholarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GetStaffscholarPage]
})
export class GetStaffscholarPageModule {}
