import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudapiService } from '../services/crudapi.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-get-stafftrain',
  templateUrl: './get-stafftrain.page.html',
  styleUrls: ['./get-stafftrain.page.scss'],
})
export class GetStafftrainPage implements OnInit {

  mList: any[] = [];
  DataArr: any[] = [];
  id: any;
  stfdivition: any[] = [];
  stffac: any[] = [];
  stfinst: any[] = [];
  stfcenter: any[] = [];

  constructor(
    private http: HttpClient,
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public apiService: CrudapiService
  ) {

    http.get<any[]>('https://app.rmutp.ac.th/testapibi/charts/stafftrain')
      .subscribe((result: any) => {
        this.stfdivition = result.stfdivision.map(res => res);
        this.stffac = result.stffac.map(res => res);
        this.stfinst = result.stfinst.map(res => res);
        this.stfcenter = result.stfcenter.map(res => res);

        this.stfdivition = this.stfdivition.concat(this.stffac);
        this.stfdivition = this.stfdivition.concat(this.stfinst);
        this.stfdivition = this.stfdivition.concat(this.stfcenter);
        console.log(this.stfdivition);
      });


    // this.http.get('https://app.rmutp.ac.th/testapibi/charts/stafftrain')
    //   .subscribe((res: any) => {
    //     this.list = res;
    //     this.depth = res.stfdivision.map(res => res.facultyname);
    //     this.total = res.stfdivision.map(res => res.total);
    //   });

  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params["ID"];
  }

}
