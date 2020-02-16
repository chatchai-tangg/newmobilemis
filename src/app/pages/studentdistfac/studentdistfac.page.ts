import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentdistfac',
  templateUrl: './studentdistfac.page.html',
  styleUrls: ['./studentdistfac.page.scss'],
})
export class StudentdistfacPage implements OnInit {

 
  chartstd: any;
  liststd: any;  
  list: any;
  cstd: any;
  facstd: any;
  yearstd: any;
  stddept01:any;
  countdept01:any;
  yeardept01 : any;


  constructor(public http: HttpClient, public router: Router) { }

  // get_stdfiedfac() {
  //   let labels: any = [];
  //   let data: any;
  //   this.http.get('http://203.158.144.140/APIchart/charts/Stdfiedfac')
  //     .subscribe((res: any) => {
  //       this.list = res.Table;
  //       this.facstd = res.Table.map(res => res.FACULTYNAME)
  //       this.yearstd = res.Table.map(res => res.ADMITACADYEAR)
  //       this.cstd = res.Table.map(res => res.CSTD)
  //       // console.log(this.list);
  //       this.chartstdfiedfac();
  //     });
  // }

  get_stdfiedfac() {
    let labels: any = [];
    let data: any;
    this.http.get('https://app.rmutp.ac.th/testapibi/charts/studentdistfac')
      .subscribe((res: any) => {
        this.list = res;
        this.stddept01 = res.dept01.map(res => res.facultyname);
        this.countdept01 = res.dept01.map(res => res.total);
        this.yeardept01 = res.dept01.map(res =>res.admitacadyear);
        console.log(this.countdept01)      
        this.chartstdfiedfac();
      });
  }

  ngOnInit() {
    this.get_stdfiedfac();   
  }

  chartstdfiedfac() {
    var ctx = (<any>document.getElementById('stddistfac')).getContext('2d');
    this.chartstd = new Chart(ctx, {
      type: 'line',
      data: {
        labels:  this.yeardept01,
        datasets: [{
          label: "คณะครุศาสตร์อุตสาหกรรม",
          data:  this.countdept01,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],          
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          xAxes: [
          ]
        },
        legend: {
          position: 'bottom',
          display: true,
          labels: {
            padding: 15,
            boxWidth: 20
          }
        }
      }
    });

}
}
