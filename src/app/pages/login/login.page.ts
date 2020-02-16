import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild('username') loguser;
  @ViewChild('password') logpassword;

  constructor(public navCtrl: NavController, public router: Router) { }

  async chcklogin() {
    const user: any = this.loguser.value;
    const pass: any = this.logpassword.value;
    // alert('username: ' + this.loguser.value);
    // alert('password: ' + this.logpassword.value);

    if (user === 'admin' && pass === '1234' || user === 'test' && pass === '1111') {
      // alert('success');
      this.router.navigate(['menu/main']);
    } else {
      alert('ชื่อผู้ใช้ / รหัสผ่าน ผิดพลาด');
    }

  }

  ngOnInit() {
  }

}
