import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { StaffAll } from '../models/staff-all';
import { CrudapiService } from '../services/crudapi.service';

@Component({
  selector: 'app-add-stafftrain',
  templateUrl: './add-stafftrain.page.html',
  styleUrls: ['./add-stafftrain.page.scss'],
})
export class AddStafftrainPage implements OnInit {
  dData: any[] = [];
  id: any;
  modelng: StaffAll;
  items: any;

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public apiService: CrudapiService,
    public http: HttpClient,
  ) {

  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params["ID"];
    // this.http.get<any>('https://app.rmutp.ac.th/testapibi/Staff_all/Showstftrain/' + this.id).subscribe(result => {      
    //   this.modelng = result.StaffReqscholar;
    // });

    this.loadData();
  }

  async loadData(): Promise<void> {
    setTimeout(() => {
      this.items = this.http.get<any>('https://app.rmutp.ac.th/testapibi/Staff_all/Showstftrain/' + this.id).subscribe(result => {
        this.modelng = result.StaffReqscholar;
      });
    }, 2000);
  }

  update() {
    const data = { "ID": this.modelng.ID, "facultyname": this.modelng.facultyname, "total": this.modelng.total, "year": "2019", "grouptype": this.modelng.grouptype };
    const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    const authUrl = 'https://app.rmutp.ac.th/testapibi/Staff_all/Updatestftrain';
    return this.http.post<any>(authUrl, data, config)
      .subscribe(res => {
        // console.log(res.status);
        if (res.status == 'ok') {
          this.router.navigate(['/menu/stafftrainperson']);
        }
      },
        err => {
          return err;
        }
      );
  }

}
