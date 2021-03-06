import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import 'chartjs-plugin-labels';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Statement } from '@angular/compiler';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.page.html',
  styleUrls: ['./staff.page.scss'],
})
export class StaffPage implements OnInit {
  barChart: any;
  list: any;
  total: any;
  dataname: any;
  chart: any;
  countreq: any;



  constructor(public http: HttpClient) { }

  get_data() {
    this.http.get('https://app.rmutp.ac.th/testapibi/charts/empall')
      .subscribe((res: any) => {
        this.list = res;
        this.total = res.map(res => res.total);
        this.dataname = res.map(res => res.stafftype);
        this.barChartMethod();
      });
  }

  ngOnInit() {
    // this.get_data();
  }

  ionViewDidEnter() {
    // console.log("ionViewDidEnter");
    this.get_data();
  }

  barChartMethod() {
    var ctx = (<any>document.getElementById('canvas-chart')).getContext('2d');
    this.chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'pie',
      // The data for our dataset 
      data: {
        labels: this.dataname,
        datasets: [{
          label: "dataset",
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
          data: this.total,
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          datalabels: {
            color: 'black',
            formatter: (value, ctx) => {
              let sum = 0;
              let dataArr = ctx.chart.data.datasets[0].data;
              dataArr.map(data => {
                sum += data;
              });
              let percentage = (value * 100 / sum).toFixed(1) + "%";
              return percentage;
            },
          },
        },
        legend: {
          position: 'bottom',
          labels: {
            fontSize: 11,
            usePointStyle: true,
            padding: 20
          }
        },
      },
    });
  }

  doRefresh(event) {
    // console.log('Begin async operation');    
    setTimeout(() => {
      // console.log('Async operation has ended');
      this.get_data();
      event.target.complete();
    }, 1000);
  }
}



