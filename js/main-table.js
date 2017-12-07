var file = "data/data.csv";

d3.csv(file, function (error, data) {
    if (error) throw error;

    var formatValue = d3.format(".1f");


    data.forEach(function (d) {
        d.mean = +d.mean;
        d.from = +d.from;
        d.to = +d.to;
        d.total_apps = +d.total_apps;
        d.total_per_place = +d.total_per_place;
        d.budg_per_place = +d.budg_per_place;
        d.price = +d.price;
        d.scopus_public = +d.scopus_public;
        d.scopus_qoutes = +d.scopus_qoutes;
        d.rate_sort = +d.rate_sort;
        d.from = formatValue(d.from);
        d.to = formatValue(d.to);
        d.from = +d.from;
        d.to = +d.to

    });

    var sortAscending = true;
    var titles = d3.keys(data[0]);

    var table = d3.select('#table').append('table').attr('class', 'table table-condensed');

// Append the table header and body.
    var tableHead = table.append('thead'),
        tableBody = table.append('tbody');

    // Add the table header content.
    tableHead.append('tr').selectAll('th')
        .data(["Назва ", "Середній бал ЗНО ", "Всього заяв ", "Заяв на 1 місце ", "Заяв на 1 місце (бюджет) ", "Вартість контракту* ", "К-ть публікацій (Scopus) ", "К-ть цитувань (Scopus) ", "Місце в консолідованому рейтингу "]).enter()
        .append('th')
        .text(function (d) {
            return d;
        })
        .attr("onclick", function (d) {
            return "sort('" + d + "')";
        });

    d3.selectAll("thead tr th")
        .append("i")
        .attr('class', 'fa fa-sort').style("font-size", "0.8em")
    ;
    //
    // d3.select("thead tr th:nth-child(3)")
    //     .append("i")
    //     .attr('class', 'fa fa-arrows-v')
    // ;
    //
    // d3.select("thead tr th:nth-child(6)")
    //     .append("i")
    //     .attr('class', 'fa fa-arrows-v')
    // ;


// Add the table body rows.
    var rows = tableBody.selectAll('tr')
        .data(data)
        .enter()
        .append('tr')
        .attr("class", "sh")
        ;

    rows.append('td')
        .text(function (d) {
            return d.univ;
        })
        .style("cursor", "pointer")
        .attr("class", "link")
        .on("click", function (d) {
            return window.open(d.link);
        });


    //Add the spark chart.
    rows.append('td')
        .datum(function (d) {
            return d;
        })
        .call(drawBar());

    rows.append('td').text(function (d) {
        return d.total_apps;
    });
    rows.append('td').text(function (d) {
        return d.total_per_place;
    });
    rows.append('td').text(function (d) {
        return d.budg_per_place;
    });
    rows.append('td')
        .text(function (d) {
             if(d.year === "2016" || d.year === "2015") {
                return d.price + "*" +  " грн";
            } else if (d.price > 1 && d.year !== "2016" || d.price > 1 && d.year !== "2015" ) {
                return d.price + " грн";
            }
            else {
                return "дані відсутні"
            }
        })

        .attr("class", function (d){

            if (d.price >= 12714) {
                return "blue"
            } else if  (d.price < 12714 && d.price > 1) {
                return "red"
            } else {
                return "no-data"
            }

        });


    rows.append('td').text(function (d) {
        return d.scopus_public;
    });
    rows.append('td').text(function (d) {
        return d.scopus_qoutes;
    });
    rows.append('td').text(function (d) {

        if (d.rate_sort >= 1 && d.rate_sort < 500) {
            return d.rate_place;
        }
        else if (d.rate_sort === 500) {
            return "відсутні в рейтингу"
        }

        else {
            return "відсутні в рейтингу"
        }
    })
        .attr("class", function (d) {
            if (d.rate_sort === 500) {
                return "no-data"
            }
        });




    d3.selectAll("table tbody tr")
        .sort(function (a, b) {
            return d3.descending(a.mean, b.mean);

        });

    paginationList(50);


    /* -------------- SEARCH 1------------------ */

    $("#myInput").keyup(function () {

        var value = $(this).val();
        var tr = $("tbody tr");

        if (value) {
            var i = 0;
            var re = new RegExp(value, "i");



            data.forEach(function (d) {

                     if (!d.region.match(re)) {
                            // alert(d.region + " is not " + re);
                            d3.select(rows[0][i]).style("display", "none")
                                .classed("sh", false);


                        } else if (d.region.match(re)) {
                            // alert(d.region + " is  " + re);
                            d3.select(rows[0][i]).style("display", "");

                        }
                        i++;
                    });

            paginationList(50);

                }
        else {
            d3.selectAll("tbody tr").classed("sh", false);
            d3.selectAll("tbody tr").classed("sh", true);
            $("tbody tr").show();
            paginationList(50);

            // return false;
        }

    }).keyup(); <!----end of SEARCH 1 ----->



    /* -------------- SEARCH 1------------------ */

    $("#myInput").keyup(function () {

        var value = $(this).val();
        var tr = $("tbody tr");

        if (value) {
            var i = 0;
            var re = new RegExp(value, "i");



            data.forEach(function (d) {

                if (!d.region.match(re)) {
                    // alert(d.region + " is not " + re);
                    d3.select(rows[0][i]).style("display", "none")
                        .classed("sh", false);


                } else if (d.region.match(re)) {
                    // alert(d.region + " is  " + re);
                    d3.select(rows[0][i]).style("display", "");

                }
                i++;
            });

            paginationList(50);

        }
        else {
            d3.selectAll("tbody tr").classed("sh", false);
            d3.selectAll("tbody tr").classed("sh", true);
            $("tbody tr").show();
            paginationList(50);

            // return false;
        }

    }).keyup(); <!----end of SEARCH 1 ----->


    /* -------------- SEARCH 2------------------ */

    $("#input").keyup(function () {

        var value = $(this).val();
        var tr = $("tbody tr");

        if (value) {
            var i = 0;
            var re = new RegExp(value, "i");



            data.forEach(function (d) {

                if (!d.univ.match(re)) {
                    // alert(d.region + " is not " + re);
                    d3.select(rows[0][i]).style("display", "none")
                        .classed("sh", false);


                } else if (d.univ.match(re)) {
                    // alert(d.region + " is  " + re);
                    d3.select(rows[0][i]).style("display", "");

                }
                i++;
            });

            paginationList(50);

        }
        else {
            d3.selectAll("tbody tr").classed("sh", false);
            d3.selectAll("tbody tr").classed("sh", true);
            $("tbody tr").show();
            paginationList(50);

            // return false;
        }

    }).keyup(); <!----end of SEARCH 2 ----->


 /* -------------- RANGE SLIDER 1 ------------------ */

    $( function() {
        $( "#slider-range" ).slider({
            range: true,
            min: 0,
            max: 200,
            values: [100, 200],
            slide: function(event, ui ) {
                $("#amount").val(ui.values[0] + "-" + ui.values[1]);
            },
            change: function(event, ui) {

                var tr = $("tbody tr");
                var i = 0;
                var s1From = $( "#slider-range" ).slider( "values", 0 );
                var s1To = $( "#slider-range" ).slider( "values", 1 );

                d3.selectAll("tbody tr").classed("sh", false);

                data.forEach(function (d) {

                        if (d.mean >= s1From && d.mean <= s1To) {
                        d3.select(rows[0][i]).style("display", "")
                            .classed("sh", true);

                    }

                    else {
                        d3.select(rows[0][i])
                            .style("display", "none")
                            .classed("sh", false);



                    }
                    i++;

                });

                paginationList(50);

        }

        });
        $( "#amount" ).val( $( "#slider-range" ).slider( "values", 0 ) +
            " - " + $( "#slider-range" ).slider( "values", 1 ) );
    } ); /* --------- end of Slider 1 ------------ */


    /* -------------- RANGE SLIDER 2 ------------------ */


    $( function() {
        $( "#slider-range2" ).slider({
            range: true,
            min: 0,
            max: 42178,
            values: [0, 42178],
            slide: function(event, ut ) {
                $("#amount2").val(ut.values[0] + "-" + ut.values[1]);
            },
            change: function(event, ut) {

                var tr = $("tbody tr");
                var i = 0;
                var s2From = $( "#slider-range2" ).slider( "values", 0 );
                var s2To = $( "#slider-range2" ).slider( "values", 1 );

                d3.selectAll("tbody tr").classed("sh", false);

                data.forEach(function (d) {

                    if (s2From === 0 && s2To === 42178 ) {
                        // ("умова виконана");
                        d3.selectAll(rows[0]).style("display", "")
                            .classed("sh", true);
                    }

                    if (d.price > s2From && d.price < s2To) {
                        // ("умова виконана");
                        d3.select(rows[0][i]).style("display", "")
                            .classed("sh", true);
                      }

                      else {
                        d3.select(rows[0][i]).style("display", "none")
                            .classed("sh", false);



                    }
                    i++;
                });

                paginationList(50);

            }

        });
        $( "#amount2" ).val( $( "#slider-range2" ).slider( "values", 0 ) +
            " грн - " + $( "#slider-range2" ).slider( "values", 1 ) + " грн");


    } );  /* --------- end of Slider 1 ------------ */










}); <!----end of table ----->


/* -------------- SEARCH 1------------------ */

// function myFunction() {
//     // Declare variables
//     var input, filter, table, tr, td, i;
//     input = document.getElementById("input");
//     filter = input.value.toUpperCase();
//     table = document.getElementById("table");
//     tr = table.getElementsByTagName("tr");
//
//     // Loop through all table rows, and hide those who don't match the search query
//     for (i = 0; i < tr.length; i++) {
//         td = tr[i].getElementsByTagName("td")[0];
//         if (td) {
//             if (td
//                     .innerHTML
//                     .toUpperCase()
//                     .indexOf(filter) > -1) {
//                 tr[i].style.display = "";
//             } else {
//                 tr[i].style.display = "none";
//             }
//         }
//     }
// }
//
















