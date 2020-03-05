import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudapiService } from '../services/crudapi.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-get-stdgradeless',
  templateUrl: './get-stdgradeless.page.html',
  styleUrls: ['./get-stdgradeless.page.scss'],
})
export class GetStdgradelessPage implements OnInit {

  mList: any[] = [];
  DataArr: any[] = [];
  id: any;

  constructor(
    private http: HttpClient,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public apiService: CrudapiService
  ) { 

    http.get<any[]>('https://app.rmutp.ac.th/testapibi/charts/Std_gradeless2')
    .subscribe((result: any) => {
      this.DataArr = result
      
      console.log(this.DataArr);
    });
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params["ID"];
  }

}
