import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'highcharts';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  arearangeData;
  lineOption = {
    chart: {
      type: 'line'
    },
    title: {
      text: 'Linechart'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Line',
        data: [1, 2, 3, 2, 6, 7, 3, 5]
      } as Highcharts.SeriesLineOptions
    ]
  };
  columnOption = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Columnchart'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Column',
        data: [1, 2, 3, 2, 6, 7, 3, 5]
      } as Highcharts.SeriesColumnOptions
    ]
  };
  areaOption = {
    chart: {
      type: 'area'
    },
    title: {
      text: 'Areachart'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Area',
        data: [1, 2, 3, 2, 6, 7, 3, 5]
      } as Highcharts.SeriesAreaOptions
    ]
  };
  barption = {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Barchart'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Bar',
        data: [1, 2, 3, 2, 6, 7, 3, 5]
      } as Highcharts.SeriesBarOptions
    ]
  };
  splineOption = {
    chart: {
      type: 'spline'
    },
    title: {
      text: 'Splinechart'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Spline',
        data: [1, 2, 3, 2, 6, 7, 3, 5]
      } as Highcharts.SeriesSplineOptions
    ]
  };
  areasplineOption = {
    chart: {
      type: 'areaspline'
    },
    title: {
      text: 'Areasplinechart'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Areaspline',
        data: [1, 2, 3, 2, 6, 7, 3, 5]
      } as Highcharts.SeriesAreasplineOptions
    ]
  };
  pieOption = {
    chart: {
      type: 'pie'
    },
    title: {
      text: 'Piechart'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Pie',
        data: [1, 2, 3, 2, 6, 7, 3, 5]
      } as Highcharts.SeriesPieOptions
    ]
  };
  scatterOption = {
    chart: {
      type: 'scatter'
    },
    title: {
      text: 'Scatterchart'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Scatter',
        data: [1, 2, 3, 2, 6, 7, 3, 5]
      } as Highcharts.SeriesScatterOptions
    ]
  };
  gaugeOption = {
    chart: {
      type: 'gauge'
    },
    title: {
      text: 'Gaugechart'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Gauge',
        data: [1, 2, 3, 2, 6, 7, 3, 5]
      } as Highcharts.SeriesGaugeOptions
    ]
  };
  arearangeOption = {
    chart: {
      type: 'arearange'
    },
    title: {
      text: 'Arearangechart'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Arearange',
        data: this.arearangeData
      } as Highcharts.SeriesAreasplineOptions
    ]
  };
  areasplinerangeOption = {
    chart: {
      type: 'areasplinerange'
    },
    title: {
      text: 'Areasplinerangechart'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Areasplinerange',
        data: [1, 2, 3, 2, 6, 7, 3, 5]
      } as Highcharts.SeriesPieOptions
    ]
  };
  columnrangeOption = {
    chart: {
      type: 'columnrange'
    },
    title: {
      text: 'Columnrangechart'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Columnrange',
        data: [1, 2, 3, 2, 6, 7, 3, 5]
      } as Highcharts.SeriesPieOptions
    ]
  };
  constructor(private http: HttpClient) {
    //  //bar, pie, scatter, gauge, arearange, areasplinerange and columnrange
  }

  ngOnInit() {
    // this.http.get('https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/range.json')
    //   .subscribe(s => {
    //     const option1 = {
    //       chart: {
    //         type: 'arearange',
           
    //         scrollablePlotArea: {
    //           minWidth: 600,
    //           scrollPositionX: 1
    //         }
    //       },

    //       title: {
    //         text: 'Temperature variation by day'
    //       },

    //       xAxis: {
    //         type: 'datetime'
    //       },

    //       yAxis: {
    //         title: {
    //           text: null
    //         }
    //       },

    //       tooltip: {
    //         crosshairs: true,
    //         shared: true,
    //         valueSuffix: '°C'
    //       },

    //       legend: {
    //         enabled: false
    //       },

    //       series: [{
    //         name: 'Temperatures',
    //         data: s as Highcharts.SeriesAreasplineOptions
    //       }]

    //     };
    //     Highcharts.chart('arearange',option1 );
    //   });
    Highcharts.chart('line', this.lineOption);
    Highcharts.chart('column', this.columnOption);
    Highcharts.chart('area', this.areaOption);
    Highcharts.chart('bar', this.barption);
    Highcharts.chart('pie', this.pieOption);
    Highcharts.chart('scatter', this.scatterOption);

    // Highcharts.chart('areasplinerange', this.arearangeOption);
    // Highcharts.chart('columnrange', this.columnrangeOption);
  }
  // add() {
  //   this.chart.addPoint(Math.floor(Math.random() * 10));
  // }

}
