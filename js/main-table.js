var file = "data/data_new.csv";

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
        d.to = +d.to;
        d.AmountOfBacalavr = +d.AmountOfBacalavr;
        d.scopus_per_student = formatValue(d.scopus_per_student);
        d.scopus_per_student = +d.scopus_per_student;
        d.QtoP = +d.QtoP

    });

    var sortAscending = true;
    var titles = d3.keys(data[0]);

    var table = d3.select('#table').append('table').attr('class', 'table table-condensed');

// Append the table header and body.
    var tableHead = table.append('thead'),
        tableBody = table.append('tbody');

    // Add the table header content.
    tableHead.append('tr').selectAll('th')
        .data(["Назва ", "Середній бал ЗНО ", "Вартість контракту, грн* ", "Заяв на місце ", "Зараховано ",  "Наука (публікації, Scopus) ", "Наука (цитування, Scopus) "]).enter()
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
    d3.select("thead tr th:nth-child(1)")
        .append("span")
        .attr("class", "tooltiptext")
        .text("ВНЗ, що мають у 2017 р. хоча б одного зарахованого на бакалаврат");

    d3.select("thead tr th:nth-child(2)")
        .attr("class", "active-h")
        .append("span")
        .attr("class", "tooltiptext")
        .text("Блакитний колір графіка означає, що середній бал ЗНО вступників цього ВНЗ є вищим за середній по країні (138.9), червоний - що нижче. Враховані результати вступників, що мали 2 або 3 сертифіката ЗНО, тобто вступали за результатами ЗНО.");

    d3.select("thead tr th:nth-child(3)")
        .append("span")
        .attr("class", "tooltiptext")
        .text("Червоний колір означає, що ціна навчання за рік є вищою за середню по країні (12 790 грн). Вартість конракту у ВНЗ вирахована на основі середньої вартості по ТОП-10 найбільш популярних спеціальностей 2017 р.: економіка, право, філологія, середня освіта, компʼютерні науки, інженерія програмного забезпечення, менеджмент, медицина, туризм, психологія. В тих ВНЗ, де не навчають жодній з цих спеціальностей, взято середню вартість по наявним. Зірочкою відмічені ВНЗ, де вартість взята за 2016 або 2015 рік.");

    d3.select("thead tr th:nth-child(4)")
        .append("span")
        .attr("class", "tooltiptext")
        .text("Загальна кількість заяв по ВНЗ до кількості зарахованих. Не є показником попиту на навчання саме в цьому ВНЗ, адже до слабих ВНЗ часто подають заяву провсяк випадок, а вступають потім до більш сильних. Тож що слабкішим є ВНЗ, то більшою може бути різниця між кількістю поданих заяв і кількістю зарахованих");

    d3.select("thead tr th:nth-child(5)")
        .append("span")
        .attr("class", "tooltiptext")
        .text("Кількість студентів, що зараховані на бакалаврат");

    // d3.select("thead tr th:nth-child(6)")
    //     .append("span")
    //     .attr("class", "tooltiptext")
    //     .text("Загальна кількість заяв по ВНЗ до кількості зарахованих. Не є показником попиту на навчання саме в цьому ВНЗ, адже до слабих ВНЗ часто подають заяву провсяк випадок, а вступають потім до більш сильних. Тож що слабкішим є ВНЗ, то більшою може бути різниця між кількістю поданих заявами і кількістю зарахованих абітурієнтів");

    d3.select("thead tr th:nth-child(6)")
        .append("span")
        .attr("class", "tooltiptext")
        .html("Кількість публікацій в Scopus за останній рік в перерахунку на 1000 вступників (бакалаврів і магістрів). Дані по публікаціям в Scopus Рейтинг університетів за показниками Scopus 2017 року від OSVITA.UA. Дані по вступникам 2017 р. - vstup.info).");

    d3.select("thead tr th:nth-child(7)")
        .append("span")
        .attr("class", "tooltiptext")
        .text("Кількість цитувань на 1 публікацію (Scopus) за даними 2017 р. (джерело OSVITA.UA).");


// Add the table body rows.
    var rows = tableBody.selectAll('tr')
        .data(data)
        .enter()
        .append('tr')
        .attr("class", "sh")


        ;

    rows.append('td')
        .text(function (d) {
            return d.univ + "   ";
        })
        .attr("class", "tolink")
        .append("button")
        .style("display", function(d){
            return d.link ? null : "none";
        })
        .text("  >")
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


    rows.append('td')
        .text(function (d) {
            if(d.year === "2016" || d.year === "2015") {
                return d.price + "*";
            } else if (d.price > 1 && d.year !== "2016" || d.price > 1 && d.year !== "2015" ) {
                return d.price;
            }
            else {
                return "дані відсутні"
            }
        })

        .attr("class", function (d){

            if (d.price >= 12714) {
                return "red"
            } else if  (d.price < 12714 && d.price > 1) {
                return "blue"
            } else {
                return "no-data"
            }

        });

    // rows.append('td').text(function (d) {
    //     return d.total_apps;
    // });


    rows.append('td').text(function (d) {
        return d.total_per_place;
    });

    rows.append('td').text(function (d) {
        return d.AmountOfBacalavr;
    });


    // rows.append('td').text(function (d) {
    //     return d.budg_per_place;
    // });

    //

    rows.append('td').text(function (d) {
        if (d.scopus_per_student > 0) {
            return d.scopus_per_student;
        } else {
            return "дані відсутні"
        }
    })
        .attr("class", function (d){

            if (d.scopus_per_student === 0) {
                return "no-data"
            } else {
                return false
            }

        });


    rows.append('td').text(function (d) {
        if (d.QtoP > 0) {
            return d.QtoP;
        } else if (d.QtoP === -1) {
            return "у 2017 р. не було публікацій"
        } else if (d.QtoP === 0) {
            return "дані відсутні"
        }
    })
        .attr("class", function (d){

            if (d.scopus_qoutes === 0 || d.QtoP === -1) {
                return "no-data"
            } else {
                return false
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
            min: 100,
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
            " - " + $( "#slider-range2" ).slider( "values", 1 ));


    } );  /* --------- end of Slider 1 ------------ */










}); <!----end of table ----->


/* --------------add hover to thead ------------------ */
















