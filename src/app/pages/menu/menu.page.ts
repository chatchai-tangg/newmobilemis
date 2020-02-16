import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  page = [
    {
      title: 'หน้าหลัก',
      url: '/menu/main',
      icon: 'home'
    },
    {
      title: 'บุคลากร',
      open: false,
      children: [
        {
          title: 'บุคลากร',
          url: '/menu/staff',
          icon: 'person'
        },
        {
          title: 'ขอตำแหน่งวิชาการ',
          url: '/menu/staff-reqposition',
          icon: 'stats'
        },
        {
          title: 'ผู้รับทุนการศึกษา',
          url: '/menu/staffscholar',
          icon: 'school'
        },
        {
          title: 'จำแนกบุคลากรตามการศึกษา',
          url: '/menu/staffdistedu',
          icon: 'school'
        },
        {
          title: 'อบรม/ประชุม/สัมมนา',
          url: '/menu/stafftrainperson',
          icon: 'stats'
        },
      ]
    },
    {
      title: 'นักศึกษา',
      open: false,
      children: [
        {
          title: 'นักศึกษา',
          url: '/menu/student',
          icon: 'person'
        },
        {
          title: 'นักศึกษาแบ่งตามคณะ',
          url: '/menu/studentdistfac',
          icon: 'person'
        },
        {
          title: 'นักศึกษาจบการศึกษา',
          url: '/menu/stdenddistfac',
          icon: 'person'
        },
        {
          title: 'นักศึกษาเกรดต่ำกว่า 2',
          url: '/menu/stdgradeless2',
          icon: 'person'
        },
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
