var file = "data/data_med_ranking.csv";

d3.csv(file, function (error, data) {
    if (error) throw error;

    var formatValue = d3.format(".1f");
    var formatValue0 = d3.format(".0f");


    data.forEach(function (d) {
        d.mean = formatValue(d.mean);
        d.mean = +d.mean;
        d.total_per_place = formatValue0(d.total_per_place);
        d.total_per_place = +d.total_per_place;
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
        d.QtoP = formatValue(d.QtoP);
        d.QtoP = +d.QtoP;
        d.ranking_2017 = +d.ranking_2017;
        d.ranking_2011 = +d.ranking_2011;
        d.rank4 = +d.rank4

    });

    // var headers = {
    //     "ranking_2017": "№",
    //     "univ": "Назва",
    //     "mean": "Середній бал ЗНО ",
    //     "rank4": "Різниця",
    //     "price": "Вартість контракту, грн* ",
    //     "total_per_place": "Заяв на місце ",
    //     "AmountOfBacalavr": "Зараховано ",
    //     "scopus_per_student": "Наука (публікації, Scopus) ",
    //     "QtoP": "Наука (цитування, Scopus) "
    // };
    //
    // var title_variables = ["ranking_2017", "univ", "mean", "rank4", "price", "total_per_place", "AmountOfBacalavr", "scopus_per_student", "QtoP"];

    var sortAscending = true;

    var table = d3.select('#table')
        .append('table')
        .attr('class', 'table table-condensed');

// Append the table header and body.
    var tableHead = table.append('thead'),
        tableBody = table.append('tbody');

    // Add the table header content.
    tableHead.append('tr').selectAll('th')
        .data(["№", "Назва ", "Середній бал ЗНО ", "Різниця з 2011 роком ", "Вартість контракту, грн* ", "Заяв на місце ", "Зараховано ",  "Наука (публікації, Scopus) ", "Наука (цитування, Scopus) "])
        .enter()
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
        .text("Порядковий номер ВНЗ в рейтингу 2017 року");

    d3.select("thead tr th:nth-child(2)")
        .append("span")
        .attr("class", "tooltiptext")
        .text("ВНЗ, що мають у 2017 р. хоча б одного зарахованого на бакалаврат. Тисніть на стрілку поруч із назвою, аби перейти до сайту ВНЗ.");

    d3.select("thead tr th:nth-child(3)")
        .attr("class", "active-h")
        .append("span")
        .attr("class", "tooltiptext")
        .html('<span style="color: #3498db"><b>Блакитний</b></span> колір графіка означає, що середній бал ЗНО вступників цього ВНЗ є вищим за середній по країні (138.9), <span style="color: #ED1C24"><b>червоний</b></span> - що нижче. Довжина кольорової частини графіку ілюструє відхилення від загального середнього. Враховані результати вступників, що мали 2 або 3 сертифіката ЗНО, тобто вступали за результатами ЗНО.');

    d3.select("thead tr th:nth-child(4)")
        .append("span")
        .attr("class", "tooltiptext")
        .html('Різниця між позицією ВНЗ в рейтингу-2017 і <a class="dashed" href="http://texty.org.ua/pg/article/devrand/read/29555" target="_blank">рейтингу-2011</a>. Позначка про відсутність даних означає, що неможливо порівняти позицію через наступні причини: ВНЗ припинив своє існування / був реорганізований / почав роботу  між 2011 р. і 2017 р. або ВНЗ перестав/почав набирати студентів на бакалаврат між 2011 р. і 2017 р.');

    d3.select("thead tr th:nth-child(5)")
        .append("span")
        .attr("class", "tooltiptext")
        .html('<span style="color: #ED1C24"><b>Червоний</b></span> колір означає, що ціна навчання за рік є вищою за середню по країні (12 790 грн). Вартість конракту у ВНЗ вирахована на основі середньої вартості <a class="dashed" href="http://mon.gov.ua/usi-novivni/novini/2017/09/14/top-10-najbilsh-ta-najmensh-populyarnix-speczialnostej-u-2017-roczi/" target="_blank">по ТОП-10 найбільш популярних спеціальностей 2017 р.</a>: економіка, право, філологія, середня освіта, компʼютерні науки, інженерія програмного забезпечення, менеджмент, медицина, туризм, психологія. В тих ВНЗ, де не навчають жодній з цих спеціальностей, взято середню вартість по наявним. Зірочкою відмічені ВНЗ, де вартість взята за 2016 або 2015 рік.');

    d3.select("thead tr th:nth-child(6)")
        .append("span")
        .attr("class", "tooltiptext")
        .text("Загальна кількість заяв по ВНЗ до кількості зарахованих. Не є показником попиту на навчання саме в цьому ВНЗ, адже до слабих ВНЗ часто подають заяву провсяк випадок, а вступають потім до більш сильних. Тож що слабкішим є ВНЗ, то більшою може бути різниця між кількістю поданих заяв і кількістю зарахованих");

    d3.select("thead tr th:nth-child(7)")
        .append("span")
        .attr("class", "tooltiptext")
        .text("Кількість студентів, що зараховані на бакалаврат. Для медичних ВНЗ на бакалаврат і до магістратури");

    // d3.select("thead tr th:nth-child(6)")
    //     .append("span")
    //     .attr("class", "tooltiptext")
    //     .text("Загальна кількість заяв по ВНЗ до кількості зарахованих. Не є показником попиту на навчання саме в цьому ВНЗ, адже до слабих ВНЗ часто подають заяву провсяк випадок, а вступають потім до більш сильних. Тож що слабкішим є ВНЗ, то більшою може бути різниця між кількістю поданих заявами і кількістю зарахованих абітурієнтів");

    d3.select("thead tr th:nth-child(8)")
        .append("span")
        .attr("class", "tooltiptext")
        .html('Кількість публікацій в Scopus за останній рік в перерахунку на 1000 вступників (бакалаврів і магістрів). Дані по публікаціям в Scopus Рейтинг університетів за показниками Scopus 2017 року від <a class="dashed" href="ru.osvita.ua/vnz/rating/55425/" target="_blank">OSVITA.UA</a>.');

    d3.select("thead tr th:nth-child(9)")
        .append("span")
        .attr("class", "tooltiptext")
        .text("Кількість цитувань на 1 публікацію (Scopus) за даними 2017 р.");


// Add the table body rows.
    var rows = tableBody.selectAll('tr')
        .data(data)
        .enter()
        .append('tr')
        .attr("class", "sh")
        ;


    rows.append('td').text(function (d) {
        return d.ranking_2017;
    });

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



    rows.append('td').text(function (d) {
        if (d.ranking_2011 > 0 && d.ranking_2017 > 0 && (d.ranking_2011 - d.ranking_2017) != 0) {
            if ((d.ranking_2011 - d.ranking_2017) > 0) {
                return "+" + (d.ranking_2011 - d.ranking_2017);
            }
            else {
                return d.ranking_2011 - d.ranking_2017;
            }

        }
        else if((d.ranking_2011 - d.ranking_2017) === 0){
            return "теж місце"
        }
        else {
            return "дані відсутні"
        }
    })
        .attr("class", function(d) {
            if (d.ranking_2011 > 0 && d.ranking_2017 > 0 && (d.ranking_2011 - d.ranking_2017) != 0) {
                return "class"; }
            else {
                return "no-data"}
})
        .append('i')
        .attr("class", function(d){
            if (d.ranking_2011 > 0 && d.ranking_2017 > 0) {
                if (d.ranking_2017 > d.ranking_2011) {
                    return " fa fa-arrow-down"
                }
                if (d.ranking_2017 < d.ranking_2011) {
                    return " fa fa-arrow-up"
                }
            }
            else {
                return false
            }
        });



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

            if (d.scopus_per_student <= 0) {
                return "no-data"
            } else {
                return false
            }

        });


    rows.append('td').text(function (d) {
        if (d.QtoP > 0) {
            return d.QtoP;
        } else if (d.QtoP === -1) {
            return "у 2017 р. не було публікацій";
        } else if (d.QtoP === 0) {
            return "дані відсутні";
        }
    })
        .attr("class", function (d){
            if (d.QtoP <= 0) {
                return "no-data";
            } else {
                return false;
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
















