import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stafftrainperson',
  templateUrl: './stafftrainperson.page.html',
  styleUrls: ['./stafftrainperson.page.scss'],
})
export class StafftrainpersonPage implements OnInit {
  depth: any;
  total: any;
  list: any;
  chartstaff: any;


  constructor(public http: HttpClient, public router: Router) { }

  // get_stafftrain() {   
  //   this.http.get('http://203.158.144.140/APIchart/charts/Trainperson')
  //     .subscribe((res: any) => {
  //       this.list = res.Table;
  //       this.depth = res.Table.map(res => res.dept_name_th);
  //       this.total = res.Table.map(res => res.TOTAL);  
  //       console.log(this.list);
  //       this.chartstfftrain();
  //     });
  // }


  get_stafftrainbydivi() {
    this.http.get('https://app.rmutp.ac.th/testapibi/charts/stafftrain')
      .subscribe((res: any) => {
        this.list = res;
        this.depth = res.stfdivision.map(res => res.facultyname);
        this.total = res.stfdivision.map(res => res.total);
        this.chartstfftrain();

      });
  }

  get_stafftrainbyfac() {
    this.http.get('https://app.rmutp.ac.th/testapibi/charts/stafftrain')
      .subscribe((res: any) => {
        this.list = res;
        this.depth = res.stffac.map(res => res.facultyname);
        this.total = res.stffac.map(res => res.total);
        this.chartstfftrainbyfac();

      });
  }

  get_stafftrainbycenter() {
    this.http.get('https://app.rmutp.ac.th/testapibi/charts/stafftrain')
      .subscribe((res: any) => {
        this.list = res;
        this.depth = res.stfcenter.map(res => res.facultyname);
        this.total = res.stfcenter.map(res => res.total);
        this.chartstfftrainbycenter();
      });
  }


  get_stafftrainbyinst() {
    this.http.get('https://app.rmutp.ac.th/testapibi/charts/stafftrain')
      .subscribe((res: any) => {
        this.list = res;
        this.depth = res.stfinst.map(res => res.facultyname);
        this.total = res.stfinst.map(res => res.total);
        this.chartstfftrainbyinst();
      });
  }


  ngOnInit() {
    this.get_stafftrainbydivi();
    this.get_stafftrainbyfac();
    this.get_stafftrainbycenter();
    this.get_stafftrainbyinst();
  }

  ionViewDidEnter() {
    this.get_stafftrainbydivi();
    this.get_stafftrainbyfac();
    this.get_stafftrainbycenter();
    this.get_stafftrainbyinst();
  }

  chartstfftrain() {
    var ctx = (<any>document.getElementById('stafftrain')).getContext('2d');
    this.chartstaff = new Chart(ctx, {
      type: 'horizontalBar',
      data: {
        labels: this.depth,
        datasets: [{
          label: 'อบรม/ประชุม/สัมมนา',
          data: this.total,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(180, 227, 46, 0.2)',
            'rgba(88, 203, 240, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(180, 227, 46, 1)',
            'rgba(88, 203, 240, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        legend: {
          position: 'bottom',
          // display: true,
          labels: {
          }
        },
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
            scaleLabel: {
              display: true,
              labelString: 'หน่วยงาน (กอง)'
            }
          }],
        },
      }
    });
  }

  chartstfftrainbyfac() {
    var ctx = (<any>document.getElementById('stafftrainfac')).getContext('2d');
    this.chartstaff = new Chart(ctx, {
      type: 'horizontalBar',
      data: {
        labels: this.depth,
        datasets: [{
          label: 'อบรม/ประชุม/สัมมนา',
          data: this.total,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(180, 227, 46, 0.2)',
            'rgba(88, 203, 240, 0.2)',
            'rgba(81, 218, 181, 0.2)',

          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(180, 227, 46, 1)',
            'rgba(88, 203, 240, 1)',
            'rgba(81, 218, 181, 1)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        legend: {
          position: 'bottom',
          display: true,
          labels: {
          }
        },
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
            // scaleLabel: {
            //   display: true,
            //   labelString: 'หน่วยงาน (คณะ)'
            // }
          }],
        },
      }
    });
  }

  chartstfftrainbycenter() {
    var ctx = (<any>document.getElementById('stafftraincenter')).getContext('2d');
    this.chartstaff = new Chart(ctx, {
      type: 'horizontalBar',
      data: {
        labels: this.depth,
        datasets: [{
          label: 'อบรม/ประชุม/สัมมนา',
          data: this.total,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(180, 227, 46, 0.2)',
            'rgba(88, 203, 240, 0.2)',
            'rgba(81, 218, 181, 0.2)',
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(180, 227, 46, 1)',
            'rgba(88, 203, 240, 1)',
            'rgba(81, 218, 181, 1)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        legend: {
          position: 'bottom',
          display: true,
          labels: {
          }
        },
        scales: {
          xAxes: [{
            gridLines: {
              offsetGridLines: true
            },
            scaleLabel: {
              display: true,
              labelString: 'จำนวน (คน)',
            }
          }],
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'หน่วยงาน (ศูนย์)'
            }
          }],
        },
      }
    });
  }

  chartstfftrainbyinst() {
    var ctx = (<any>document.getElementById('stafftraininst')).getContext('2d');
    this.chartstaff = new Chart(ctx, {
      type: 'horizontalBar',
      data: {
        labels: this.depth,
        datasets: [{
          label: 'อบรม/ประชุม/สัมมนา',
          data: this.total,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(180, 227, 46, 0.2)',
            'rgba(88, 203, 240, 0.2)',
            'rgba(81, 218, 181, 0.2)',
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(180, 227, 46, 1)',
            'rgba(88, 203, 240, 1)',
            'rgba(81, 218, 181, 1)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        legend: {
          position: 'bottom',
          display: true,
          labels: {
          }
        },
        scales: {
          xAxes: [{
            gridLines: {
              offsetGridLines: true
            },
            scaleLabel: {
              display: true,
              labelString: 'จำนวน (คน)',
            }
          }],
          yAxes: [{
            // scaleLabel: {
            //   display: true,
            //   labelString: 'หน่วยงาน (สำนัก/สถาบัน)'
            // }
          }],
        },
      }
    });
  }

}
