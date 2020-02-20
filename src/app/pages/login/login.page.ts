import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild('username') loguser;
  @ViewChild('password') logpassword;

  constructor(public navCtrl: NavController, public router: Router, public alertController: AlertController) { }


  async chcklogin() {

    const alert = await this.alertController.create({
      header: 'ผิดพลาด',
      // subHeader: 'Subtitle',
      message: 'ชื่อผู้ใช้ / รหัสผ่านไม่ถูกต้อง',
      buttons: ['ตกลง']
    });
    const user: any = this.loguser.value;
    const pass: any = this.logpassword.value;
    // alert('username: ' + this.loguser.value);
    // alert('password: ' + this.logpassword.value);

    if (user === 'admin' && pass === '1234' || user === 'user' && pass === '1234') {
      // alert('success');
      this.router.navigate(['menu/mainpage']);
    } else {
      // alert('ชื่อผู้ใช้ / รหัสผ่าน ผิดพลาด');
      await alert.present();
    }

  }

  ngOnInit() {
  }

}
