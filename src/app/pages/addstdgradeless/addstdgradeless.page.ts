import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { StaffAll } from '../models/staff-all';
import { CrudapiService } from '../services/crudapi.service';

@Component({
  selector: 'app-addstdgradeless',
  templateUrl: './addstdgradeless.page.html',
  styleUrls: ['./addstdgradeless.page.scss'],
})
export class AddstdgradelessPage implements OnInit {

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
    // console.log(this.id);
    // get item details using id
    this.http.get<any>('https://app.rmutp.ac.th/testapibi/Student/Showstdgradeless/' + this.id).subscribe(result => {
      // console.log(result);
      this.dData = result;
      this.modelng = result.Student;
      // console.log(this.modelng);
  });
  }

  test() {
    const data = { "ID": this.modelng.ID, "admitacadyear": this.modelng.admitacadyear, "total": this.modelng.total };
    const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    const authUrl = 'https://app.rmutp.ac.th/testapibi/Student/UpdateStdGradeless';
    return this.http.post<any>(authUrl, data, config)
    .subscribe(res => {
      // console.log(res);
      if (res.status == 'ok') {
        this.router.navigate(['/menu/stdgradeless2']);
      }      
    },
      err => {
        return err;

      }
    );
  }

}
