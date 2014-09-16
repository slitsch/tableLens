/**
 * Created by Valued Customer on 9/9/2014.
 */

//var numRecords = 0
//
////read the data file - hard coded for now
//$.getJSON("data/white_peg31.json", function(data) {
//    console.log(data);
//    // data is a JavaScript object now. Handle it as such
//    numRecords = data[0].Average;
//    console.log(numRecords);
//});

//need to get data from csv files
//var run1 = [42,32,27,15,8];
//var run2 = [74,53,23,12,4];
//var dataSets = [run2, run1];
var metrics = {};
//    Scaling fn from domain 0 to data max value, hardcoded/mapped to range 0-420


jQuery(document).ready(function($) {
//    dataSets.forEach(function(run) {
//        console.log(run);

//        var x = d3.scale.linear()
//            .domain([0, d3.max(run)])
//            .range([0, 80]);
//        console.log(x);

//        d3.selectAll(".chart")
//            .selectAll("div")
//            .data(run)
////        .enter().append("div")
//            .style("width", function (d) {
//                return x(d) + "px";
//            })
//            .text(function (d) {
//                return d;
//            });
//    });

    $('.btn-group .btn.active').each(function () {
        metrics.push(this.name);
        metrics[this.name] = this.value;
        console.log(metrics)
    });
});



//    metrics.forEach(function(d) {
//        console.log(d)
//    });