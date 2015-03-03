$(function () { 
    //animated circles
    $('#circle-overall').circliful();
    $('#circle-warranty').circliful();
    $('#circle-delivery').circliful();
    $('#circle-cost').circliful();
    $('#circle-flex').circliful();
    $('#chart-warranty-left').highcharts({
        chart: {
            
        },
        title: {
            text: 'Your Quality Performance'
        },
        legend: {
            x: 0,
            y: 0,
            floating: false,
            borderWidth: 1,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        },
        xAxis: {
            categories: [
                'October',
                'November',
                'December',
                'January',
                'February',
                'March'
            ],
        	plotBands: [ 
            { 
                from: 4.5,
                to: 6.5,
                color: 'rgba(170, 68, 213, .2)',
                label: {
                    text: '<span class="chart-label-green">YoY:-10.99%</span><br><span class="chart-label-red">MoM:+35.45%</span></b>',
                    y: 80
                }
            }]
        },
        yAxis: {
            title: {
                text: 'Defective Parts Per Million (PPM)'
            }
        },
        tooltip: {
            shared: true,
            valuePrefix: '',
            valueSuffix: ' PPM'
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            areaspline: {
                fillOpacity: 0.5
            }
        },
        series: [{
            name: 'Previous year',
            data: [4653, 7504, 15769, 8430, 8113, 8245],
            type: 'column'
        }, {
            name: 'Current year',
            data: [6475, 4703, 8681, 6066, 5418, 7339],
            type: 'column'
        }, {
            name: 'Tier 5 avg (current year)',
            data: [3500, 4000, 7000, 5000, 4000, 6300],
            type: 'spline'
        }]
    });
    $('#chart-warranty-right').highcharts({
        chart: {
            type: 'areaspline'
        },
        title: {
            text: "Benchmark against all Suppliers - March '15"
        },
        legend: {
            x: 0,
            y: 0,
            floating: false,
            borderWidth: 1,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        },
        xAxis: {
        	title: {
                text: 'Defective Parts Per Million (PPM)'
            },
            categories: [
                '10,500',
                '9,500',
                '8,500',
                '7,500',
                '6,500'
            ],
            plotBands: [ 
            { 
                from: 3,
                to: 4,
                color: 'rgba(170, 68, 213, .2)',
                label: {
                    text: 'Tier 4<br>60 perc',
                    y: 100
                }
            },
            { 
                from: 4,
                to: 5,
                color: 'rgba(68, 170, 213, .2)',
                label: {
                    text: 'Tier 5<br><small>85 perc</small>',
                    y: 120
                }
            }]
        },
        yAxis: {
            title: {
                text: 'Percent of all suppliers'
            }
        },        
        tooltip: {
        	enabled: false,
            shared: true,
            valueSuffix: '%'
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            areaspline: {
                fillOpacity: 0.5
            }
        },
        series: [{
            name: 'All suppliers',
            data: [5, 15, 40, 25, 15]
        }]
    });
    $('#chart-delivery-left').highcharts({
        chart: {
            
        },
        title: {
            text: 'Your On-Time Delivery Performance'
        },
        legend: {
            x: 0,
            y: 0,
            floating: false,
            borderWidth: 1,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        },
        xAxis: {
            categories: [
                'October',
                'November',
                'December',
                'January',
                'February',
                'March'
            ],
        	plotBands: [ 
            { 
                from: 4.5,
                to: 6.5,
                color: 'rgba(170, 68, 213, .2)',
                label: {
                    text: '<span class="chart-label-green">YoY:+12.99%</span><br><span class="chart-label-red">MoM:+1.04%</span></b>',
                    y: 40
                }
            }]
        },
        yAxis: {
            title: {
                text: 'On Time Delivery (in %)'
            }
        },
        tooltip: {
            shared: true,
            valuePrefix: '',
            valueSuffix: '%'
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            areaspline: {
                fillOpacity: 0.5
            }
        },
        series: [{
            name: 'Previous year',
            data: [64.75, 47.03, 86.81, 60.66, 54.18, 73.39],
            type: 'column'
        }, {
            name: 'Current year',
            data: [46.53, 75.04, 56.9, 84.30, 81.13, 82.45],
            type: 'column'
        }, {
            name: 'Tier 3 avg (current year)',
            data: [85.00, 90.00, 90.00, 95.00, 86.00, 88.00],
            type: 'spline'
        }]
    });
    $('#chart-delivery-right').highcharts({
        chart: {
            type: 'areaspline'
        },
        title: {
            text: "Benchmark against all Suppliers - March '15"
        },
        legend: {
            x: 0,
            y: 0,
            floating: false,
            borderWidth: 1,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        },
        xAxis: {
        	title: {
                text: 'On Time Delivery'
            },
            categories: [
                '60%',
                '70%',
                '85%',
                '90%',
                '95%'
            ],
            plotBands: [ 
            { 
                from: 1,
                to: 2,
                color: 'rgba(170, 68, 213, .2)',
                label: {
                    text: 'Tier 2<br>25 perc',
                    y: 20
                }
            },
            { 
                from: 2,
                to: 3,
                color: 'rgba(68, 170, 213, .2)',
                label: {
                    text: 'Tier 3<br><small>60 perc</small>',
                    y: 20
                }
            }]
        },
        yAxis: {
            title: {
                text: 'Percent of all suppliers'
            }
        },        
        tooltip: {
            enabled: false,
            shared: true,
            valueSuffix: '%'
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            areaspline: {
                fillOpacity: 0.5
            }
        },
        series: [{
            name: 'All suppliers',
            data: [10, 15, 35, 20, 20]
        }]
    });
    $('#chart-cost-left').highcharts({
        chart: {
            
        },
        title: {
            text: 'Your Cost Management Performance'
        },
        legend: {
            x: 0,
            y: 0,
            floating: false,
            borderWidth: 1,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        },
        xAxis: {
            categories: [
                'October',
                'November',
                'December',
                'January',
                'February',
                'March'
            ],
        	plotBands: [ 
            { 
                from: 4.5,
                to: 6.5,
                color: 'rgba(170, 68, 213, .2)',
                label: {
                    text: '<span class="chart-label-green">YoY:+12.99%</span><br><span class="chart-label-red">MoM:+40.04%</span></b>',
                    y: 20
                }
            }]
        },
        yAxis: {
            title: {
                text: 'Year-On-Year Cost Reductions (in %)'
            }
        },
        tooltip: {
            shared: true,
            valuePrefix: '',
            valueSuffix: '%'
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            areaspline: {
                fillOpacity: 0.5
            }
        },
        series: [{
            name: 'Previous year',
            data: [8.81, 6.66, 6.75, 4.03, 5.18, 7.39],
            type: 'column'
        }, {
            name: 'Current year',
            data: [8.13, 8.45, 6.53, 7.04, 5.9, 8.30],
            type: 'column'
        }, {
            name: 'Tier 5 avg (current year)',
            data: [8.00, 9.00, 9.00, 9.00, 8.00, 8.00],
            type: 'spline'
        }]
    });
    $('#chart-cost-right').highcharts({
        chart: {
            type: 'areaspline'
        },
        title: {
            text: "Benchmark against all Suppliers - March '15"
        },
        legend: {
            x: 0,
            y: 0,
            floating: false,
            borderWidth: 1,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        },
        xAxis: {
        	title: {
                text: 'Year-On-Year Cost Reductions'
            },
            categories: [
                '-10%',
                '0%',
                '5%',
                '7.5%',
                '8%'
            ],
            plotBands: [ 
            { 
                from: 4,
                to: 5,
                color: 'rgba(68, 170, 213, .2)',
                label: {
                    text: 'Tier 5<br>10 perc',
                    y: 130
                }
            }]
        },
        yAxis: {
            title: {
                text: 'Percent of all suppliers'
            }
        },        
        tooltip: {
            enabled: false,
            shared: true,
            valueSuffix: '%'
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            areaspline: {
                fillOpacity: 0.5
            }
        },
        series: [{
            name: 'All suppliers',
            data: [20, 25, 30, 15, 10]
        }]
    });
    $('#chart-flex-left').highcharts({
        chart: {
            
        },
        title: {
            text: 'Your Flexibility Performance'
        },
        legend: {
            x: 0,
            y: 0,
            floating: false,
            borderWidth: 1,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        },
        xAxis: {
            categories: [
                'October',
                'November',
                'December',
                'January',
                'February',
                'March'
            ],
        	plotBands: [ 
            { 
                from: 4.5,
                to: 6.5,
                color: 'rgba(170, 68, 213, .2)',
                label: {
                    text: '<span class="chart-label-green">YoY:-25.00%</span><br><span class="chart-label-red">MoM:+0.00%</span></b>',
                    y: 20
                }
            }]
        },
        yAxis: {
            title: {
                text: 'Flexibility Rating (1-5)'
            }
        },
        tooltip: {
            shared: true,
            valuePrefix: '',
            valueSuffix: '%'
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            areaspline: {
                fillOpacity: 0.5
            }
        },
        series: [{
            name: 'Previous year',
            data: [4, 4, 4, 4, 4, 4],
            type: 'column'
        }, {
            name: 'Current year',
            data: [4, 4, 4, 4, 3, 3],
            type: 'column'
        }, {
            name: 'Tier 4 avg (current year)',
            data: [4, 4, 4, 4, 4, 4],
            type: 'spline'
        }]
    });
    $('#chart-flex-right').highcharts({
        chart: {
            type: 'areaspline'
        },
        title: {
            text: "Benchmark against all Suppliers - March '15"
        },
        legend: {
            x: 0,
            y: 0,
            floating: false,
            borderWidth: 1,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        },
        xAxis: {
        	title: {
                text: 'Flexibility Rating'
            },
            categories: [
                '1',
                '2',
                '3',
                '4',
                '5'
            ],
            plotBands: [ 
            { 
                from: 2,
                to: 3,
                color: 'rgba(170, 68, 213, .2)',
                label: {
                    text: 'Tier 3<br>60 perc',
                    y: 20
                }
            },
            { 
                from: 3,
                to: 4,
                color: 'rgba(68, 170, 213, .2)',
                label: {
                    text: 'Tier 4<br><small>80 perc</small>',
                    y: 60
                }
            }]
        },
        yAxis: {
            title: {
                text: 'Percent of all suppliers'
            }
        },        
        tooltip: {
            enabled: false,
            shared: true,
            valueSuffix: '%'
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            areaspline: {
                fillOpacity: 0.5
            }
        },
        series: [{
            name: 'All suppliers',
            data: [10, 15, 35, 20, 20]
        }]
    });
});
