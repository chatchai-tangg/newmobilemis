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
        // console.log(this.list);
        this.chartstdenddistfac();

      });
  }

  ngOnInit() {
    // this.get_stdfiedfac();
  }

  ionViewDidEnter() {
    this.get_stdfiedfac();
  }

  chartstdenddistfac() {
    var ctx = (<any>document.getElementById('stdenddistfac')).getContext('2d');
    this.chartstd = new Chart(ctx, {
      type: 'horizontalBar',
      data: {
        labels: this.facname,
        datasets: [{
          label: 'นักศึกษาจบการศึกษาปีการศึกษา 2558 - 2562',
          data: this.total,
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(255, 102, 102, 0.5)',
            'rgba(0, 255, 128, 0.5)',
            'rgba(51, 153, 255, 0.5)',
            'rgba(127, 0, 255, 0.5)',
            'rgba(255, 255, 0, 0.5)',
            'rgba(255, 99, 132, 0.5)',
            'rgba(255, 128, 0, 0.5)',
            'rgba(102, 255, 255, 0.5)',
            'rgba(255, 0, 127, 0.5)',
            'rgba(81, 218, 181, 0.5)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          xAxes: [{
            gridLines: {
              offsetGridLines: true
            },
            scaleLabel: {
              display: true,
              labelString: 'จำนวน (คน)'
            }
          }],
          yAxes: [{
            ticks: {
              // max: 5,
              // min: 500,
              stepSize: 10
            },
            // display: true,
            scaleLabel: {
              display: true,
              // labelString: 'หน่วยงาน (คณะ)'
            }
          }],
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

  doRefresh(event) {
    // console.log('Begin async operation');    
    setTimeout(() => {
      // console.log('Async operation has ended');
      this.get_stdfiedfac();
      event.target.complete();
    }, 1000);
  }


}
