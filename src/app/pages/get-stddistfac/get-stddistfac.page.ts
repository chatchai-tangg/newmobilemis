import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudapiService } from '../services/crudapi.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-get-stddistfac',
  templateUrl: './get-stddistfac.page.html',
  styleUrls: ['./get-stddistfac.page.scss'],
})
export class GetStddistfacPage implements OnInit {

  mList: any[] = [];
  DataArr: any[] = [];
  id: any;
  dept01: any;
  dept02: any;
  dept03: any;
  dept04: any;
  dept05: any;
  dept06: any;
  dept07: any;
  dept08: any;
  dept09: any;

  constructor(
    private http: HttpClient,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public apiService: CrudapiService
  ) {

    http.get<any[]>('https://app.rmutp.ac.th/testapibi/charts/studentdistfac')
      .subscribe((result: any) => {
        this.dept01 = result.dept01.map(res => res);
        this.dept02 = result.dept02.map(res => res);
        this.dept03 = result.dept03.map(res => res);
        this.dept04 = result.dept04.map(res => res);
        this.dept05 = result.dept05.map(res => res);
        this.dept06 = result.dept06.map(res => res);
        this.dept07 = result.dept07.map(res => res);
        this.dept08 = result.dept08.map(res => res);
        this.dept09 = result.dept09.map(res => res);
       

        this.dept01 = this.dept01.concat(this.dept02);
        this.dept01 = this.dept01.concat(this.dept03);
        this.dept01 = this.dept01.concat(this.dept04);
        this.dept01 = this.dept01.concat(this.dept05);
        this.dept01 = this.dept01.concat(this.dept08);
        this.dept01 = this.dept01.concat(this.dept07);
        this.dept01 = this.dept01.concat(this.dept08);
        this.dept01 = this.dept01.concat(this.dept09);
        
        // console.log(this.dept01);
      });

   }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params["ID"];
  }

}
