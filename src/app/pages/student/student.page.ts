import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.page.html',
  styleUrls: ['./student.page.scss'],
})
export class StudentPage implements OnInit {


  constructor(private http: HttpClient, public router: Router) { }

  @ViewChild('barstdyear') barstdyear;
  chartstd: any;
  liststd: any;
  dyears: any;
  dtotal: any;
  list: any;
  cstd: any;
  facstd: any;
  yearstd: any;

  // get_stdyears() {
  //   let labels: any = [];
  //   let data: any;
  //   this.http.get('http://203.158.144.140/APIchart/charts/Stdyears')
  //     .subscribe((res: any) => {
  //       this.list = res.Table;
  //       this.dyears = res.Table.map(res => res.ACADYEAR)
  //       this.dtotal = res.Table.map(res => res.TOTAL)
  //       this.testt();
  //     });
  // }


  get_stdyears() {
    let labels: any = [];
    let data: any;
    this.http.get('https://app.rmutp.ac.th/testapibi/charts/Stdall')
      .subscribe((res: any) => {
        this.list = res;
        this.dyears = res.map(res => res.acadyear)
        this.dtotal = res.map(res => res.total)
        this.testt();
      });
  }

  ngOnInit() {
    // this.get_stdyears();
  }

  ionViewDidEnter() {
    this.get_stdyears();
  }

  testt() {
    function commaify(value) {
      var result = ('' + value).replace(/^(-?\d+)(\d{3})/, '$1,$2');
      return value == result ? result : commaify(result);
    };
    var canvas: any = document.getElementById("barstdyear");
    var ctx = canvas.getContext("2d");
    var myNewChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.dyears,
        datasets: [{
          label: '# จำนวนสถิตินักศึกษา',
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
          data: this.dtotal,
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
              labelString: 'ปีการศึกษา'
            }
          }],
          yAxes: [{
            ticks: {
              stepSize: 500,
            },
            // display: true,
            scaleLabel: {
              display: true,
              labelString: 'จำนวน (คน)'
            }
          }],
        },
        legend: {
          position: "bottom",
          display: true,
          labels: {
            padding: 15,
            boxWidth: 20
          }
        },
        tooltips: {
          mode: 'index',
          intersect: false,
          callbacks: {
            label: function (tooltipItem, data) {
              var label = data.datasets[tooltipItem.datasetIndex].label;
              data.datasets[tooltipItem.datasetIndex].label;
              return label + ' ' + tooltipItem.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " คน";
            },
          },
        },
      }
    });

  }

  doRefresh(event) {
    // console.log('Begin async operation');    
    setTimeout(() => {
      // console.log('Async operation has ended');
      this.get_stdyears();
      event.target.complete();
    }, 1000);
  }
}
