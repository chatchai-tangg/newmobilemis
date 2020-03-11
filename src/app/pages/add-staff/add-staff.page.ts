import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { StaffAll } from '../models/staff-all';
import { CrudapiService } from '../services/crudapi.service';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.page.html',
  styleUrls: ['./add-staff.page.scss'],
})
export class AddStaffPage implements OnInit {

  dData: any[] = [];
  id: any;
  modelng: StaffAll;
  data: any;
  items: any;

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public apiService: CrudapiService,
    public http: HttpClient,
  ) { }

  ngOnInit() {

    this.id = this.activatedRoute.snapshot.params["ID"];

    this.loadData();
  }


  async loadData(): Promise<void> {
    setTimeout(() => {
      this.items = this.http.get<any>('https://app.rmutp.ac.th/testapibi/Staff_all/Showstfall/' + this.id).subscribe(result => {
        this.dData = result;
        this.modelng = result.Staffall;
        // console.log(this.modelng);
      });
    }, 2000);
  }


  test() {
    const data = { "ID": this.modelng.ID, "stafftype": this.modelng.stafftype, "total": this.modelng.total };
    const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    const authUrl = 'https://app.rmutp.ac.th/testapibi/Staff_all/Update';
    return this.http.post<any>(authUrl, data, config)
      .subscribe(res => {
        // console.log(res.status);
        if (res.status == 'ok') {
          this.router.navigate(['/menu/staff']);
        }
        // return res;
      },
        err => {
          return err;

        }
      );
  }


}
