import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudapiService } from '../services/crudapi.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-get-staffreq',
  templateUrl: './get-staffreq.page.html',
  styleUrls: ['./get-staffreq.page.scss'],
})
export class GetStaffreqPage implements OnInit {

  mList: any[] = [];
  DataArr: any[] = [];
  id: any;

  constructor(
    private http: HttpClient,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public apiService: CrudapiService
  ) {
    http.get<any[]>('https://app.rmutp.ac.th/testapibi/charts/Empreqposition').subscribe(result => {
      this.DataArr = result;
      // console.log(JSON.stringify(this.DataArr));
      console.log(this.DataArr);
    });
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params["ID"];
  }

}
