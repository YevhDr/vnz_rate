// var bar = function () {
//
//     function chart(selection) {
//
//         selection.each(function (data) {
//
//             var div = d3.select(this),
//                 svg = div.selectAll('svg').data(d).enter().append('svg');
//
//         });
//
//         return chart;
//     }
//
// };
//





// var bar = function () {
//
//     var width = 120;
//     var height = 30;
//     var margin = {top: 0, bottom: 0, left:0, right:0};
//
//     function chart(selection) {
//
//         selection.each(function (data) {
//
//             var div = d3.select(this),
//                 svg = div.selectAll('svg').data([data]);
//
//             svg.enter()
//                 .append('svg')
//                 .attr('width', width)
//                 .attr('height', height - margin.top)
//                 .style("overflow", "visible")
//                 .append("g")
//                 .attr("transform", "translate(" + margin.left + "," + margin.top + ")");;
//
//             var y = d3.scale.ordinal()
//                 .range([0, height]);
//
//             var x = d3.scale.linear()
//                 .range([0, width]);
//
//
//
//             y.domain(0, 5);
//             x.domain([d3.min(data,function(d){return d.from;}), d3.max(data,function(d){return d.to;})]);
//
//
//
//
//             svg.append("g")
//                 .attr("class", "x axis")
//                 .attr("transform", "translate(0," + height + ")")
//                 // .call(xAxis)
//                 // .append("text")
//                 // .attr("x", width-75)
//                 // .attr("dx", ".71em")
//                 // .attr("dy", "-.71em")
//                 // .text("Temperatures (C)")
//             ;
//
//             svg.append("g")
//                 .attr("class", "y axis")
//                 // .call(yAxis)
//             ;
//
//             svg.selectAll(".bar")
//                 .data(data)
//                 .enter().append("rect")
//                 .attr("class", "bar")
//                 .attr("y", function(d) { return y(d.month); })
//                 .attr("height", y.rangeBand())
//                 .attr("x", function(d) { return x(d.from); })
//                 .attr("width", function(d) { return x(d.to)-x(d.from) });
//
//
//
//
//     }
//     )
// ;
//
//     return chart;
//
//  }
//
// };
