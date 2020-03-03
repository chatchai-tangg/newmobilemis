import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudapiService } from '../services/crudapi.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-get-staffdistfac',
  templateUrl: './get-staffdistfac.page.html',
  styleUrls: ['./get-staffdistfac.page.scss'],
})
export class GetStaffdistfacPage implements OnInit {
  mList: any[] = [];
  DataArr: any[] = [];
  id: any;

  constructor(
    private http: HttpClient,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public apiService: CrudapiService
  ) {
    
    http.get<any[]>('https://app.rmutp.ac.th/testapibi/charts/Empdistedu').subscribe(result => {
      this.DataArr = result;
      // console.log(JSON.stringify(this.DataArr));
    });
    
   }   

  ngOnInit() {

    this.id = this.activatedRoute.snapshot.params["ID"];
    
    // console.log(this.id);

  }

}
