

function drawChart(){
   var data =google.visualization.arrayToDataTable([
       ['Year','Population below poverty line (%)'],
       ['2014',21.92],
       ['2015',21.2],
       ['2016',20.7],
       ['2017',19.8],
       ['2020',18.9],
       ['2021',7.6]


   ]);
   var options = {
       chart:{
           title: 'Poverty Statistics in India',
           subtitle:'Poverty below poverty line: 2014-2020',
        //    vAxis:{title:'Poverty'},
        //    hAxis:{title:'Year'},
        //    seriesType: 'bars',
        //    series: {2: {type: 'line'}}
       },
       bars:'vertical'
       };
       var chart = new google.charts.Bar(document.getElementById('barchart_material'));

       chart.draw(data, google.charts.Bar.convertOptions(options))
   }



   function drawRegionsMap(){
    var data = google.visualization.arrayToDataTable([
        ['State','Illiteracy'],
        ['Kerala',94.0],
        ['Delhi',86.2],
        ['Chandigarh',86.0],
        ['Himachal Pradesh',82.8],
        ['Maharashtra',82.3],
        ['Tamil Nadu',80.1],
        ['Uttarakhand',78.8],
        ['Gujarat',78.0],
        ['Manipur',76.94],
        ['West Bengal',76.3],
        ['Punjab',75.8],
        ['Haryana',75.6],
        ['Karnataka',75.4],
        ['Meghalaya',74.4],
        ['Assam',72.19],
        ['Chhattisgarh',70.3],
        ['Madhya Pradesh',69.3],
        ['Uttar Pradesh	',67.7],
        ['Jammu and Kashmir',67.2],
        ['Andhra Pradesh',67.0],
        ['Jharkhand',66.4],
        ['Rajasthan',66.1],
        ['Arunachal Pradesh',65.38],
        ['Bihar',61.8]
    ]);
    var options = {
        region: 'IN',
        colorAxis: {colors: ['#00853f', 'black', '#e31b23']},
        backgroundColor: '#fffff',
        datalessRegionColor: '#fffff',
        defaultColor: '#f5f5f5',
        displayMode:'regions',
        resolution:'provinces'
    };

    var chart = new google.visualization.GeoChart(document.getElementById("Geochart"))

chart.draw(data,options);
}