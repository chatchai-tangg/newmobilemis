import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import 'chartjs-plugin-labels';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-staffdistedu',
  templateUrl: './staffdistedu.page.html',
  styleUrls: ['./staffdistedu.page.scss'],
})
export class StaffdisteduPage implements OnInit {

  chart: any;
  dlname: any;
  degree: any;
  res: any;
  list: any;

  constructor(public http: HttpClient) { }

  // get_classifiededu() {
  //   this.http.get('http://203.158.144.140/APIchart/charts/Classifiededu')
  //     .subscribe((res: any) => {
  //       this.list = res.Table;
  //       this.dlname = res.Table.map(res => res.dl_name_th);
  //       this.degree = res.Table.map(res => res.degreeclass);
  //       this.Chartdistedu();
  //     });
  // }

  get_classifiededu() {
    this.http.get('https://app.rmutp.ac.th/testapibi/charts/Empdistedu')
      .subscribe((res: any) => {
        this.list = res;
        this.dlname = res.map(res => res.education_level);
        this.degree = res.map(res => res.total);
        this.Chartdistedu();
      });
  }

  ngOnInit() {
    // this.get_classifiededu();
  }

  ionViewDidEnter() {
    this.get_classifiededu();
  }

  Chartdistedu() {
    var ctxdistedu = (<any>document.getElementById('Chartdistedu')).getContext('2d');
    this.chart = new Chart(ctxdistedu, {
      // The type of chart we want to create
      type: 'doughnut',
      // The data for our dataset      
      data: {
        labels: this.dlname,
        datasets: [{
          label: "ระดับการศึกษา",
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(181, 85, 243, 0.2)',
            'rgba(58, 176, 248, 0.2)',
            'rgba(248, 84, 58, 0.2)',
            'rgba(228, 240, 76, 0.2)',
            'rgba(81, 218, 181, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(181, 85, 243, 1)',
            'rgba(58, 176, 248, 1)',
            'rgba(248, 84, 58, 1)',
            'rgba(228, 240, 76, 1)',
            'rgba(81, 218, 181, 1)'
          ],
          data: this.degree,
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        legend: {
          position: "bottom",
          display: true,
          labels: {
            padding: 15,
            // boxWidth: 20,
            usePointStyle: true,
          },
        },
      }
    });
  }

  doRefresh(event) {
    // console.log('Begin async operation');    
    setTimeout(() => {
      // console.log('Async operation has ended');
      this.get_classifiededu();
      event.target.complete();
    }, 1000);
  }

}
