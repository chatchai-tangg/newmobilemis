import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'menu', loadChildren: () => import('./pages/menu/menu.module').then(m => m.MenuPageModule) },
  { path: 'main/:ID', loadChildren: './pages/main/main.module#MainPageModule' },
  { path: 'staff', loadChildren: './pages/staff/staff.module#StaffPageModule' },
  { path: 'student', loadChildren: './pages/student/student.module#StudentPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'staff-reqposition', loadChildren: './pages/staff-reqposition/staff-reqposition.module#StaffReqpositionPageModule' },
  { path: 'studentdistfac', loadChildren: './pages/studentdistfac/studentdistfac.module#StudentdistfacPageModule' },
  { path: 'staffscholar', loadChildren: './pages/staffscholar/staffscholar.module#StaffscholarPageModule' },
  { path: 'staffdistedu', loadChildren: './pages/staffdistedu/staffdistedu.module#StaffdisteduPageModule' },
  { path: 'stdenddistfac', loadChildren: './pages/stdenddistfac/stdenddistfac.module#StdenddistfacPageModule' },
  { path: 'stdgradeless2', loadChildren: './pages/stdgradeless2/stdgradeless2.module#Stdgradeless2PageModule' },
  { path: 'stafftrainperson', loadChildren: './pages/stafftrainperson/stafftrainperson.module#StafftrainpersonPageModule' },
  { path: 'adddata/:ID', loadChildren: './pages/adddata/adddata.module#AdddataPageModule' },
  { path: 'mainpage', loadChildren: './pages/mainpage/mainpage.module#MainpagePageModule' },
  { path: 'add-staff/:ID', loadChildren: './pages/add-staff/add-staff.module#AddStaffPageModule' },
  { path: 'get-std', loadChildren: './pages/get-std/get-std.module#GetStdPageModule' },
  { path: 'add-std/:ID', loadChildren: './pages/add-std/add-std.module#AddStdPageModule' },
  { path: 'add-staffdistfac/:ID', loadChildren: './pages/add-staffdistfac/add-staffdistfac.module#AddStaffdistfacPageModule' },
  { path: 'get-staffdistfac', loadChildren: './pages/get-staffdistfac/get-staffdistfac.module#GetStaffdistfacPageModule' },
  { path: 'get-staffreq', loadChildren: './pages/get-staffreq/get-staffreq.module#GetStaffreqPageModule' },
  { path: 'add-staffreq/:ID', loadChildren: './pages/add-staffreq/add-staffreq.module#AddStaffreqPageModule' },
  { path: 'get-staffscholar', loadChildren: './pages/get-staffscholar/get-staffscholar.module#GetStaffscholarPageModule' },
  { path: 'add-staffscholar/:ID', loadChildren: './pages/add-staffscholar/add-staffscholar.module#AddStaffscholarPageModule' },
  { path: 'get-stafftrain', loadChildren: './pages/get-stafftrain/get-stafftrain.module#GetStafftrainPageModule' },
  { path: 'add-stafftrain/:ID', loadChildren: './pages/add-stafftrain/add-stafftrain.module#AddStafftrainPageModule' },
  { path: 'get-stddistfac', loadChildren: './pages/get-stddistfac/get-stddistfac.module#GetStddistfacPageModule' },
  { path: 'get-stdend', loadChildren: './pages/get-stdend/get-stdend.module#GetStdendPageModule' },
  { path: 'get-stdgradeless', loadChildren: './pages/get-stdgradeless/get-stdgradeless.module#GetStdgradelessPageModule' },
  { path: 'addstddistfac/:ID', loadChildren: './pages/addstddistfac/addstddistfac.module#AddstddistfacPageModule' },
  { path: 'addstdend/:ID', loadChildren: './pages/addstdend/addstdend.module#AddstdendPageModule' },
  { path: 'addstdgradeless/:ID', loadChildren: './pages/addstdgradeless/addstdgradeless.module#AddstdgradelessPageModule' },







];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
