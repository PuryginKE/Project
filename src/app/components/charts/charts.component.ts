import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import Chart from 'chart.js';
import { ListService } from 'src/app/service/list.service';
import { ActivatedRoute } from '@angular/router';
import { ChartService } from 'src/app/service/charts.service';
import { ChartsModel } from 'src/app/models/charts.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})

export class ChartsComponent implements OnInit, AfterViewInit {

  @ViewChild('myChart') myChart: ElementRef;

     public date:ChartsModel;
     public countPost:ChartsModel;

  constructor(private httpService:ChartService, private activateRoute:ActivatedRoute) { }
  
 

  ngOnInit() {
  }

  ngAfterViewInit(){
     this.httpService.getCharts().subscribe(params => {
         
         const myChart = new Chart(this.myChart.nativeElement, {
            type: 'bar',
            data: {
                labels: params.map(item=>item.date),
                datasets: [{
                    label: 'Количество аукционов',
                    data: params.map(item=>item.countPost),
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
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
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
     });
   
    
  }
}
