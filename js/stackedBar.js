var drawBar = function() {

    var width = 100;
    var height = 60;
    var margin = {top: 0, bottom: 0, left:0, right:0};

    function chart(selection) {

        selection.each(function (data) {

            var div = d3.select(this);
            var svg = div.selectAll('svg')
                .data([data])
                .enter()
                .append('svg');

            svg.attr('width', width)
                .attr('height', height - margin.top)
                .style("overflow", "visible")
            // .append("g")
            // .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
            ;


            var x = d3.scale.linear().range([0, width]).domain([0, 100]);

            var y = d3.scale.linear().range([height, 0]);

            var xAxis = d3.svg.axis().scale(x)
                .orient("bottom").ticks(2);

            svg.append("g")
                .attr("class", "x axis")
                .attr("transform", "translate(0," + height + ")")
            // .call(xAxis)

            ;

            var tip = d3.tip()
                .attr("class", "d3-tip")
                .offset([-10, 0])
                .html(function() {
                    return "мін: " + data.from + "; "  +  "<br>" +
                        "макс: " + data.to + ";" ;
                });

            svg.call(tip);

            svg.selectAll("rect")
                .data([data])
                .enter()
                .append("rect")
                .attr("class", "bar")
                .attr("x", x(data.from)-100)
                .attr("y", 40)
                .attr("width", x(data.to - data.from))
                .attr("height", 10)
                .attr("fill", function() {
                    console.log ("red");
                    if (data.mean < 138.9) {
                        return "#cc523e"
                    }
                    else {
                        return "#3498db"
                    }
                })
                .on("mouseover", tip.show)
                .on("mouseout", tip.hide);

            if(data.mean > 100) {
                svg.append("line")
                    .attr("x1", data.mean - 100)
                    .attr("x2", data.mean - 100)
                    .attr("y1", 53)
                    .attr("y2", 38)
                    .attr("stroke", "black");
            }

            if(data.mean > 100) {
                svg.append("text")
                    .text(data.mean)
                    .attr("y", 30)
                    .attr("x", data.mean - 120)
                    .style("fill", "grey")
                    .style("font-size", "1em")
                ;
            }




        });
    }

    return chart ;
};
