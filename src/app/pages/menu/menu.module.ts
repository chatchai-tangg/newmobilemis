import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/menu/main',
    pathMatch: 'full',
    component: MenuPage
  },
  {
    path: '',
    component: MenuPage,
    children: [
      { path: 'main', loadChildren: './pages/main/main.module#MainPageModule' },      
      { path: 'student', loadChildren: './pages/student/student.module#StudentPageModule' },
      { path: 'studentdistfac', loadChildren: './pages/studentdistfac/studentdistfac.module#StudentdistfacPageModule' },      
      { path: 'stdenddistfac', loadChildren: './pages/stdenddistfac/stdenddistfac.module#StdenddistfacPageModule' },
      { path: 'stdgradeless2', loadChildren: './pages/stdgradeless2/stdgradeless2.module#Stdgradeless2PageModule' },

      { path: 'staff', loadChildren: './pages/staff/staff.module#StaffPageModule' },
      { path: 'staffscholar', loadChildren: './pages/staffscholar/staffscholar.module#StaffscholarPageModule' },
      { path: 'staffdistedu', loadChildren: './pages/staffdistedu/staffdistedu.module#StaffdisteduPageModule' },
      { path: 'stafftrainperson', loadChildren: './pages/stafftrainperson/stafftrainperson.module#StafftrainpersonPageModule' },
      { path: 'staff-reqposition', loadChildren: './pages/staff-reqposition/staff-reqposition.module#StaffReqpositionPageModule' },
      
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule { }
