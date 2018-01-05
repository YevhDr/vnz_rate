var drawBar = function() {

    var width = 100;
    var height = 60;
    var margin = {top: 0, bottom: 0, left:0, right:0};

    function chart(selection) {

        selection.each(function (data) {

            var svg = d3.select(this).append("svg")
                .attr("width", 100)
                .attr("height", 60);


//append blue gradient
//             var defs = svg.append("defs");
//
//             var gradient = defs.append("linearGradient")
//                 .attr("id", "blueGradient")
//                 .attr("x1", "0%")
//                 .attr("x2", "100%")
//                 .attr("y1", "0%")
//                 .attr("y2", "100%");
//
//             gradient.append("stop")
//                 .attr('class', 'start')
//                 .attr("offset", "0%")
//                 .attr("stop-color", "#3498DB")
//                 .attr("stop-opacity", 1);
//
//             gradient.append("stop")
//                 .attr('class', 'end')
//                 .attr("offset", "100%")
//                 .attr("stop-color", "#c3e6ee")
//                 .attr("stop-opacity", 1);




            var x = d3.scale.linear().range([0, width]).domain([0, 100]);

            var y = d3.scale.linear().range([height, 0]);

            var xAxis = d3.svg.axis().scale(x)
                .orient("bottom").ticks(2);

            svg.append("g")
                .attr("class", "x axis")
                .attr("transform", "translate(0," + height + ")")
            // .call(xAxis)

            ;




            var rects = svg.selectAll(".rect1")
                .data([data])
                .enter()
                .append("rect")
                .attr('class', 'rect1')
                .attr("x", 0)
                .attr("y", 30)
                .attr("height", 12)
                .attr("width", function() {
                    if(data.mean > 0) {
                        if (data.mean >= 138.9) {
                            return 38.9
                        }
                        else if (data.mean < 138.9) {
                            return x(data.mean)- 100
                        }
                    }
                })
                .attr("fill", "#ffffff")
                .attr("stroke", "#E5E5E5")
                ;

            var rects1 = svg.selectAll(".rect")
                .data([data])
                .enter()
                .append("rect")
                .attr('class', 'rect')
                .attr("x", function() {
                        if (data.mean > 0) {
                            if (data.mean >= 138.9) {
                                return 38.9
                            }
                            else if (data.mean < 138.9) {
                                return x(data.mean) - 100
                            }
                        }
                    })
                .attr("y", 30)

                .attr("height", 12)
                .attr("width", function() {
                    if (data.mean > 0) {
                        if (data.mean >= 138.9) {
                            return x(data.mean) - 100 - 38.9;
                        }
                        else if (data.mean < 138.9) {
                            return 138.9 - x(data.mean);
                        }
                    }
                })
                .attr("fill", function() {
                    if (data.mean > 0) {
                        if (data.mean >= 138.9) {
                            return '#46bcff';
                        }
                        else if (data.mean < 138.9) {
                            return '#FF5F67';
                        }
                    }

                })
                    .attr("stroke", "#e5e5e5")
                ;



            var rects2 = svg.selectAll(".rect2")
                .data([data])
                .enter()
                .append("rect")
                .attr('class', 'rect2')
                .attr("x", function() {
                    if (data.mean > 0) {
                        if (data.mean >= 138.9) {
                            return x(data.mean)-100
                        }
                        else if (data.mean < 138.9) {
                            return x(38.9)
                        }
                    }
                })
                .attr("y", 30)

                .attr("height", 12)
                .attr("width", function() {
                    if (data.mean > 0) {
                        if (data.mean >= 138.9) {
                            return 200 - x(data.mean);
                        }
                        else if (data.mean < 138.9) {
                            return 200 - 138.9;
                        }
                    }
                })


                .attr("fill", "#ffffff")
                .attr("stroke", "#E5E5E5");





            if(data.mean > 100) {
                svg.append("line")
                    .attr("x1", 38.9)
                    .attr("x2", 38.9)
                    .attr("y1", 42)
                    .attr("y2", 30)
                    .attr("stroke", "black");
            }

            if(data.mean > 100) {
                svg.append("text")
                    .text(data.mean)
                    .attr("y", 23)
                    .attr("x", data.mean - 106)
                    .style("fill", "grey")
                    .style("font-size", "1.15rem")
                    .style("overflow", "visible")
                ;
            }

        });
    }

    return chart ;
};