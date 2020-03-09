import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import 'chartjs-plugin-labels';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-staff-reqposition',
  templateUrl: './staff-reqposition.page.html',
  styleUrls: ['./staff-reqposition.page.scss'],
})
export class StaffReqpositionPage implements OnInit {
  list: any;
  chart: any;
  dataposition: any;
  datanameposition: any;
  dlname: any;
  degree: any;
  etname: any;
  countreq: any;

  constructor(public http: HttpClient) { }

  // get_reqposition() {
  //   this.http.get('http://203.158.144.140/APIchart/charts/Reqposition')
  //     .subscribe((res: any) => {
  //       this.list = res.Table;
  //       this.etname = res.Table.map(res => res.ประเภท);
  //       this.countreq = res.Table.map(res => res.จำนวน);
  //       console.log(this.etname);
  //       this.Chartreqposition();
  //     });
  // }

  get_reqposition() {
    this.http.get('https://app.rmutp.ac.th/testapibi/charts/Empreqposition')
      .subscribe((res: any) => {
        this.list = res;
        this.etname = res.map(res => res.stafftype);
        this.countreq = res.map(res => res.total);
        this.Chartreqposition();
      });
  }

  ngOnInit() {
    // this.get_reqposition();
  }

  ionViewDidEnter() {
    console.log("test1");
    this.get_reqposition();
  }

  ionViewDidLeave() {
    console.log('exit');
  }



  Chartreqposition() {
    var ctxreq = (<any>document.getElementById('Chartreqposition')).getContext('2d');
    this.chart = new Chart(ctxreq, {
      // The type of chart we want to create
      type: 'bar',
      // The data for our dataset      
      data: {
        labels: this.etname,
        datasets: [{
          label: "ผู้ที่สามารถยื่นขอตำแหน่งวิชาการ",
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
          ],
          data: this.countreq,
          borderWidth: 1
        }]
      },
      options: {
        plugins: {
          labels: {
            render: 'value',
          }
        },
        legend: {
          position: "bottom",
          display: true,
          labels: {
            padding: 15,
            boxWidth: 20
          },
        },
        scales: {
          xAxes: [{
            gridLines: {
              offsetGridLines: true
            },
            scaleLabel: {
              display: true,
              labelString: 'ประเภทบุคลากร'
            }
          }],
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'จำนวน (คน)'
            }
          }],
        },
      }
    });
  }

  doRefresh(event) {
    console.log('Begin async operation');
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

}
