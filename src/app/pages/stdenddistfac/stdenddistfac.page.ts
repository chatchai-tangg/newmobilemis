import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stdenddistfac',
  templateUrl: './stdenddistfac.page.html',
  styleUrls: ['./stdenddistfac.page.scss'],
})
export class StdenddistfacPage implements OnInit {
  list: any;
  total: any;
  facname: any;
  chartstd: any;

  constructor(public http: HttpClient, public router: Router) { }

  // get_stdfiedfac() {   
  //   this.http.get('http://203.158.144.140/APIchart/charts/Stdendbyfac')
  //     .subscribe((res: any) => {
  //       this.list = res.Table;
  //       this.total = res.Table.map(res => res.TOTAL);
  //       this.facname = res.Table.map(res => res.FACULTYNAME);  
  //       console.log(this.list);
  //       this.chartstdenddistfac();
        
  //     });
  // }

  get_stdfiedfac() {   
    this.http.get('https://app.rmutp.ac.th/testapibi/charts/Std_enddistfac')
      .subscribe((res: any) => {
        this.list = res;
        this.total = res.map(res => res.total);
        this.facname = res.map(res => res.facultyname);  
        console.log(this.list);
        this.chartstdenddistfac();
        
      });
  }

  ngOnInit() {
    this.get_stdfiedfac();
  }

  chartstdenddistfac(){
    var ctx = (<any>document.getElementById('stdenddistfac')).getContext('2d');
    this.chartstd = new Chart(ctx, {
      type: 'horizontalBar',
      data: {
        labels: this.facname,
        datasets: [{
          label: 'นักศึกษาจบการศึกษาแบ่งตามคณะ',
          data:  this.total,
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
