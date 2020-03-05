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

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public apiService: CrudapiService,
    public http: HttpClient,
  ) { }

  ngOnInit() {

    this.id = this.activatedRoute.snapshot.params["ID"];
    // this.modelng.ID = id;
    console.log(this.id);
    // get item details using id
    this.http.get<any>('http://203.158.144.140/APIchart/dataupdate/show/' + this.id).subscribe(result => {
      console.log(result);
      this.dData = result;
      this.modelng = result.staffall;
      console.log(this.modelng);
  });

  }

  test() {
    const data = { "ID": this.modelng.ID, "stafftype": this.modelng.stafftype, "total": this.modelng.total };
    const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    const authUrl = 'https://app.rmutp.ac.th/testapibi/Staff_all/Update';
    return this.http.post<any>(authUrl, data, config)
      .subscribe(res => {
        console.log(res);
      }
      );
  }


}