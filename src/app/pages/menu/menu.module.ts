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
      { path: 'mainpage', loadChildren: './pages/mainpage/mainpage.module#MainpagePageModule' },

      { path: 'staff', loadChildren: './pages/staff/staff.module#StaffPageModule' },
      { path: 'staffscholar', loadChildren: './pages/staffscholar/staffscholar.module#StaffscholarPageModule' },
      { path: 'staffdistedu', loadChildren: './pages/staffdistedu/staffdistedu.module#StaffdisteduPageModule' },
      { path: 'stafftrainperson', loadChildren: './pages/stafftrainperson/stafftrainperson.module#StafftrainpersonPageModule' },
      { path: 'staff-reqposition', loadChildren: './pages/staff-reqposition/staff-reqposition.module#StaffReqpositionPageModule' },

      { path: 'get-staffreq', loadChildren: './pages/get-staffreq/get-staffreq.module#GetStaffreqPageModule' },
      { path: 'get-stafftrain', loadChildren: './pages/get-stafftrain/get-stafftrain.module#GetStafftrainPageModule' },
      { path: 'get-std', loadChildren: './pages/get-std/get-std.module#GetStdPageModule' },
      { path: 'get-staffdistfac', loadChildren: './pages/get-staffdistfac/get-staffdistfac.module#GetStaffdistfacPageModule' },
      { path: 'get-staffscholar', loadChildren: './pages/get-staffscholar/get-staffscholar.module#GetStaffscholarPageModule' },
      { path: 'get-stddistfac', loadChildren: './pages/get-stddistfac/get-stddistfac.module#GetStddistfacPageModule' },
      { path: 'get-stdend', loadChildren: './pages/get-stdend/get-stdend.module#GetStdendPageModule' },
      { path: 'get-stdgradeless', loadChildren: './pages/get-stdgradeless/get-stdgradeless.module#GetStdgradelessPageModule' },

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
