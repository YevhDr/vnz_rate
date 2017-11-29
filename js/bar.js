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

            svg.selectAll("rect")
                .data([data])
                .enter()
                .append("rect")
                .attr("class", "bar")
                .attr("x", x(data.from)-100)
                .attr("y", 40)
                .attr("width", x(data.to - data.from))
                .attr("height", 10)



            ;

            svg.append("text")
                .data(data)
                .attr("y", 30)
                .attr("text-anchor", "start")
                .style("fill", "black")
                .html(data.mean)
                .style("font-size", "1em")
                .style("padding-top", "5px");


        });
    }

    return chart ;
};