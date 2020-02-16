import { Component, OnInit } from '@angular/core';
import { CrudapiService } from '../services/crudapi.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  title = 'app';
  mList: any[] = [];
  DataArr: any[] = [];

  constructor(private service: CrudapiService,
    private http: HttpClient) {
    this.title = service.getstr();
    http.get<any[]>('http://203.158.144.140/APIchart/charts/Empall').subscribe(result => {
      this.DataArr = result;

      console.log(JSON.stringify(this.DataArr));
    });

  }


  ngOnInit() {

  }

  // onClickLoad() {
  //   this.service.DataArr().then(result => {
  //     this.mList = result;
  //   })
  // }

}
