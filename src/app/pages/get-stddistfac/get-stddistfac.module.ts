import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GetStddistfacPage } from './get-stddistfac.page';

const routes: Routes = [
  {
    path: '',
    component: GetStddistfacPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GetStddistfacPage]
})
export class GetStddistfacPageModule {}
