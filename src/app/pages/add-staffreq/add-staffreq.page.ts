import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { StaffAll } from '../models/staff-all';
import { CrudapiService } from '../services/crudapi.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-add-staffreq',
  templateUrl: './add-staffreq.page.html',
  styleUrls: ['./add-staffreq.page.scss'],
})
export class AddStaffreqPage implements OnInit {
  dData: any[] = [];
  id: any;
  modelng: StaffAll;
  items: any;

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public apiService: CrudapiService,
    public http: HttpClient,
    public navController: NavController
  ) { }

  ngOnInit() {

    this.id = this.activatedRoute.snapshot.params["ID"];
    // this.http.get<any>('https://app.rmutp.ac.th/testapibi/Staff_all/Showstfreq/' + this.id).subscribe(result => {     
    //   this.modelng = result.StaffReq;   
    // });

    this.loadData();
  }

  async loadData(): Promise<void> {
    setTimeout(() => {
      this.items = this.http.get<any>('https://app.rmutp.ac.th/testapibi/Staff_all/Showstfreq/' + this.id).subscribe(result => {
        this.modelng = result.StaffReq;
      });
    }, 2000);
  }

  update() {
    const data = { "ID": this.modelng.ID, "stafftype": this.modelng.stafftype, "total": this.modelng.total };
    const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    const authUrl = 'https://app.rmutp.ac.th/testapibi/Staff_all/Updatestfreq';
    return this.http.post<any>(authUrl, data, config)
      .subscribe(res => {
        // console.log(res);
        if (res.status == 'ok') {
          // this.router.navigate(['/menu/staff-reqposition']);
          this.navController.navigateBack(['/menu/staff-reqposition']);
        }
        // return res;
      },
        err => {
          return err;

        }
      );
  }

}
