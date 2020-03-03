import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudapiService } from '../services/crudapi.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  title = 'หน้าหลัก';
  mList: any[] = [];
  DataArr: any[] = [];
  id: any;

  constructor(private service: CrudapiService,
    private http: HttpClient,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public apiService: CrudapiService, ) {
    this.title = service.getstr();
    http.get<any[]>('https://app.rmutp.ac.th/testapibi/charts/empall').subscribe(result => {
      this.DataArr = result;
      // console.log(JSON.stringify(this.DataArr));
    });

  }


  ngOnInit() {

    this.id = this.activatedRoute.snapshot.params["ID"];

    console.log(this.id);

  }

  // onClickLoad() {
  //   this.service.DataArr().then(result => {
  //     this.mList = result;
  //   })
  // }

}
