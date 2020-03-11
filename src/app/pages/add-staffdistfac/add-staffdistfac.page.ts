import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { StaffAll } from '../models/staff-all';
import { CrudapiService } from '../services/crudapi.service';

@Component({
  selector: 'app-add-staffdistfac',
  templateUrl: './add-staffdistfac.page.html',
  styleUrls: ['./add-staffdistfac.page.scss'],
})
export class AddStaffdistfacPage implements OnInit {
  dData: any[] = [];
  id: any;
  modelng: StaffAll;
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
      this.http.get<any>('https://app.rmutp.ac.th/testapibi/Staff_all/Showstfedu/' + this.id).subscribe(result => {
        this.modelng = result.StaffDis;
      });
    }, 2000);
  }

  update() {
    const data = { "ID": this.modelng.ID, "education_level": this.modelng.education_level, "total": this.modelng.total };
    const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    const authUrl = 'https://app.rmutp.ac.th/testapibi/Staff_all/Updatedistedu';
    return this.http.post<any>(authUrl, data, config)
      .subscribe(res => {
        // console.log(res.status);
        if (res.status == 'ok') {
          this.router.navigate(['/menu/staffdistedu']);
        }
      },
        err => {
          return err;

        }
      );
  }

}
