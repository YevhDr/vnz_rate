var sort = function (stat) {

    var table = document.getElementById("table");

        //---------- University ------------- //
    //SORT DESCENDING


    if (stat == "Назва " && $("thead tr th:nth-child(1)").hasClass('active-h') ) {

        //--- delete ClassNames

        d3.select(".active-h").classed("active-h", false);
        d3.selectAll("thead tr th i").classed("fa-sort-up", false);
        d3.selectAll("thead tr th i").classed("fa-sort-desc", false);
        d3.selectAll("thead tr th i").classed("fa-sort", true);

        //--- add ClassNames
        d3.select("thead tr th:nth-child(1) i")
            .classed('fa-sort', false)
            .classed('fa-sort-desc', true); //--- end of adding ClassNames

        //--- RePaginate
        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        $("tbody tr").show();
        paginationList(397);
        d3.selectAll("tbody tr")
            .sort(function (a, b) {
                return d3.descending(a.univ, b.univ);
            });
        d3.selectAll("li.current-page").remove();
        d3.selectAll("li#next-page").remove();
        d3.selectAll("li#previous-page").remove();
        paginationList(50);

    }

    // -------SORT ASCENDING---------
    else if (stat == "Назва ") {
        //--- delete ClassNames
        d3.select("thead tr th:nth-child(1) i").classed("fa-sort", false);
        d3.selectAll(".active-h").classed("active-h", false); //end of delete ClassNames

        //--- add ClassNames
        d3.select("thead tr th:nth-child(1)")
            .classed("active-h", true);
        d3.select("thead tr th:nth-child(1) i")
            .classed("fa-sort-up", true);//--- end of adding ClassNames

        //--- RePaginate
        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        $("tbody tr").show();
        paginationList(397);
        d3.selectAll("tbody tr")
            .sort(function (a, b) {
                return d3.ascending(a.univ, b.univ);
            });
        d3.selectAll("li.current-page").remove();
        d3.selectAll("li#next-page").remove();
        d3.selectAll("li#previous-page").remove();
        paginationList(50);
    }

//--------------------------------------- Mean ZNO --------------------------------- //


    if (stat == "Середній бал ЗНО " && $("thead tr th:nth-child(2)").hasClass('active-h') ) {

        //--- delete ClassNames

        d3.select(".active-h").classed("active-h", false);
        d3.selectAll("thead tr th i").classed("fa-sort-up", false);
        d3.selectAll("thead tr th i").classed("fa-sort-desc", false);
        d3.selectAll("thead tr th i").classed("fa-sort", true);
        //end of delete ClassNames

        //--- add ClassNames
        d3.select("thead tr th:nth-child(2) i")
            .classed('fa-sort', false)
            .classed('fa-sort-up', true); //--- end of adding ClassNames

        //--- RePaginate
        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        $("tbody tr").show();
        paginationList(397);
        d3.selectAll('tbody tr')
            .sort(function (a, b) {
                return d3.ascending(a.mean, b.mean);
            });
        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        paginationList(50);



    }  else if (stat == "Середній бал ЗНО ") {

        //--- delete ClassNames
        d3.selectAll(".active-h").classed("active-h", false);
        d3.selectAll("thead tr th i").classed("fa-sort-up", false);
        d3.selectAll("thead tr th i").classed("fa-sort-desc", false);
        d3.selectAll("thead tr th i").classed("fa-sort", true);
        d3.select("thead tr th:nth-child(2) i").classed("fa-sort", false);
        //end of delete ClassNames

        //--- add ClassNames
        d3.select("thead tr th:nth-child(2)")
            .classed("active-h", true);
        d3.select("thead tr th:nth-child(2) i")
            .classed('fa-sort-desc', true);


        //--- RePaginate
        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        $("tbody tr").show();
        paginationList(397);
        d3.selectAll('tbody tr')
            .sort(function (a, b) {
                return d3.descending(a.mean, b.mean);
            });
        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        paginationList(50);

    }

//--------------------------------------- PRICE --------------------------------- //

    if (stat == "Вартість контракту* " && $("thead tr th:nth-child(6)").hasClass('active-h') ) {

        d3.select(".active-h").classed("active-h", false);
        d3.selectAll("thead tr th i").classed("fa-sort-up", false);
        d3.selectAll("thead tr th i").classed("fa-sort-desc", false);
        d3.selectAll("thead tr th i").classed("fa-sort", true);
        //end of delete ClassNames

        //--- add ClassNames
        d3.select("thead tr th:nth-child(6) i")
            .classed('fa-sort', false)
            .classed('fa-sort-up', true); //--- end of adding ClassNames

        //--- RePaginate
        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        $("tbody tr").show();
        paginationList(397);
        d3.selectAll("tbody tr")
            .sort(function (a, b) {
                return d3.ascending(a.price, b.price);

            });

        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        paginationList(50);

    }

    else if (stat == "Вартість контракту* ") {
        //--- delete ClassNames
        d3.selectAll(".active-h").classed("active-h", false);
        d3.selectAll("thead tr th i").classed("fa-sort-up", false);
        d3.selectAll("thead tr th i").classed("fa-sort-desc", false);
        d3.selectAll("thead tr th i").classed("fa-sort", true);
        d3.select("thead tr th:nth-child(6) i").classed("fa-sort", false);
        //end of delete ClassNames

        //--- add ClassNames
        d3.select("thead tr th:nth-child(6)")
            .classed("active-h", true);
        d3.select("thead tr th:nth-child(6) i")
            .classed('fa-sort-desc', true);

        //--- RePaginate
        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        $("tbody tr").show();
        paginationList(397);
        d3.selectAll("tbody tr")
            .sort(function (a, b) {
                return d3.descending(a.price, b.price);

            });

        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        paginationList(50);
    }

//--------------------------------------- Total APPS --------------------------------- //

    if (stat == "Всього заяв " && $("thead tr th:nth-child(3)").hasClass('active-h') ) {
        //--- delete ClassNames
        d3.select(".active-h").classed("active-h", false);
        d3.selectAll("thead tr th i").classed("fa-sort-up", false);
        d3.selectAll("thead tr th i").classed("fa-sort-desc", false);
        d3.selectAll("thead tr th i").classed("fa-sort", true);
        //end of delete ClassNames

        //--- add ClassNames
        d3.select("thead tr th:nth-child(3) i")
            .classed('fa-sort', false)
            .classed('fa-sort-up', true); //--- end of adding ClassNames

        //--- RePaginate
        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        $("tbody tr").show();
        paginationList(397);
        d3.selectAll("table tbody tr")
            .sort(function (a, b) {
                return d3.ascending(a.total_apps, b.total_apps);

            });
        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        paginationList(50);

    } else if(stat == "Всього заяв ") {

        //--- delete ClassNames
        d3.selectAll(".active-h").classed("active-h", false);
        d3.selectAll("thead tr th i").classed("fa-sort-up", false);
        d3.selectAll("thead tr th i").classed("fa-sort-desc", false);
        d3.selectAll("thead tr th i").classed("fa-sort", true);
        d3.select("thead tr th:nth-child(3) i").classed("fa-sort", false);
        //end of delete ClassNames

        //--- add ClassNames
        d3.select("thead tr th:nth-child(3)")
            .classed("active-h", true);
        d3.select("thead tr th:nth-child(3) i")
            .classed('fa-sort-desc', true);

        //--- RePaginate
        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        $("tbody tr").show();
        paginationList(397);
        d3.selectAll("table tbody tr")
            .sort(function (a, b) {
                return d3.descending(a.total_apps, b.total_apps);

            });
        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        paginationList(50);

    }

    //--------------------------------------- APPS per PLACE --------------------------------- //



    if (stat == "Заяв на 1 місце " && $("thead tr th:nth-child(4)").hasClass('active-h') ) {
        //--- delete ClassNames
        d3.select(".active-h").classed("active-h", false);
        d3.selectAll("thead tr th i").classed("fa-sort-up", false);
        d3.selectAll("thead tr th i").classed("fa-sort-desc", false);
        d3.selectAll("thead tr th i").classed("fa-sort", true);
        //end of delete ClassNames

        //--- add ClassNames
        d3.select("thead tr th:nth-child(4) i")
            .classed('fa-sort', false)
            .classed('fa-sort-up', true); //--- end of adding ClassNames

        //--- RePaginate
        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        $("tbody tr").show();
        paginationList(397);
        d3.selectAll("table tbody tr")
            .sort(function (a, b) {
                return d3.ascending(a.total_per_place, b.total_per_place);

            });
        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        paginationList(50);

    } else if (stat == "Заяв на 1 місце ") {
        //--- delete ClassNames
        d3.selectAll(".active-h").classed("active-h", false);
        d3.selectAll("thead tr th i").classed("fa-sort-up", false);
        d3.selectAll("thead tr th i").classed("fa-sort-desc", false);
        d3.selectAll("thead tr th i").classed("fa-sort", true);
        d3.select("thead tr th:nth-child(4) i").classed("fa-sort", false);
        //end of delete ClassNames

        //--- add ClassNames
        d3.select("thead tr th:nth-child(4)")
            .classed("active-h", true);
        d3.select("thead tr th:nth-child(4) i")
            .classed('fa-sort-desc', true);


        //--- RePaginate
        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        $("tbody tr").show();
        paginationList(397);
        d3.selectAll("table tbody tr")
            .sort(function (a, b) {
                return d3.descending(a.total_per_place, b.total_per_place);

            });
        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        paginationList(50);

    }

    //--------------------------------------- APPS per PLACE (budget)--------------------------------- //

    if (stat == "Заяв на 1 місце (бюджет) " && $("thead tr th:nth-child(5)").hasClass('active-h') ) {
        //--- delete ClassNames
        d3.select(".active-h").classed("active-h", false);
        d3.selectAll("thead tr th i").classed("fa-sort-up", false);
        d3.selectAll("thead tr th i").classed("fa-sort-desc", false);
        d3.selectAll("thead tr th i").classed("fa-sort", true);
        //end of delete ClassNames

        //--- add ClassNames
        d3.select("thead tr th:nth-child(5) i")
            .classed('fa-sort', false)
            .classed('fa-sort-up', true); //--- end of adding ClassNames

        //--- RePaginate
        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        $("tbody tr").show();
        paginationList(397);
        d3.selectAll("table tbody tr")
            .sort(function (a, b) {
                return d3.ascending(a.budg_per_place, b.budg_per_place);

            });
        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        paginationList(50);

    } else if (stat == "Заяв на 1 місце (бюджет) ") {
        //--- delete ClassNames
        d3.selectAll(".active-h").classed("active-h", false);
        d3.selectAll("thead tr th i").classed("fa-sort-up", false);
        d3.selectAll("thead tr th i").classed("fa-sort-desc", false);
        d3.selectAll("thead tr th i").classed("fa-sort", true);
        d3.select("thead tr th:nth-child(5) i").classed("fa-sort", false);
        //end of delete ClassNames

        //--- add ClassNames
        d3.select("thead tr th:nth-child(5)")
            .classed("active-h", true);
        d3.select("thead tr th:nth-child(5) i")
            .classed('fa-sort-desc', true);

        //--- RePaginate
        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        $("tbody tr").show();
        paginationList(397);
        d3.selectAll("table tbody tr")
            .sort(function (a, b) {
                return d3.descending(a.budg_per_place, b.budg_per_place);
            });
        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        paginationList(50);

    }
//--------------------------------------- Scopus publications--------------------------------- //

    if (stat == "К-ть публікацій (Scopus-2017) " && $("thead tr th:nth-child(7)").hasClass('active-h') ) {
        //--- delete ClassNames
        d3.select(".active-h").classed("active-h", false);
        d3.selectAll("thead tr th i").classed("fa-sort-up", false);
        d3.selectAll("thead tr th i").classed("fa-sort-desc", false);
        d3.selectAll("thead tr th i").classed("fa-sort", true);
        //end of delete ClassNames

        //--- add ClassNames
        d3.select("thead tr th:nth-child(7) i")
            .classed('fa-sort', false)
            .classed('fa-sort-up', true); //--- end of adding ClassNames

        //--- RePaginate
        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        $("tbody tr").show();
        paginationList(397);
        d3.selectAll("table tbody tr")
            .sort(function (a, b) {
                return d3.ascending(a.scopus_public, b.scopus_public);

            });
        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        paginationList(50);

    } else if (stat == "К-ть публікацій (Scopus-2017) ") {

        //--- delete ClassNames
        d3.selectAll(".active-h").classed("active-h", false);
        d3.selectAll("thead tr th i").classed("fa-sort-up", false);
        d3.selectAll("thead tr th i").classed("fa-sort-desc", false);
        d3.selectAll("thead tr th i").classed("fa-sort", true);
        d3.select("thead tr th:nth-child(7) i").classed("fa-sort", false);
        //end of delete ClassNames

        //--- add ClassNames
        d3.select("thead tr th:nth-child(7)")
            .classed("active-h", true);
        d3.select("thead tr th:nth-child(7) i")
            .classed('fa-sort-desc', true);

        //--- RePaginate
        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        $("tbody tr").show();
        paginationList(397);
        d3.selectAll("table tbody tr")
            .sort(function (a, b) {
                return d3.descending(a.scopus_public, b.scopus_public);

            });
        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        paginationList(50);

    }
//--------------------------------------- Scopus qoutations --------------------------------- //

    if (stat == "К-ть цитувань (Scopus-2017) " && $("thead tr th:nth-child(8)").hasClass('active-h') ) {
        //--- delete ClassNames
        d3.select(".active-h").classed("active-h", false);
        d3.selectAll("thead tr th i").classed("fa-sort-up", false);
        d3.selectAll("thead tr th i").classed("fa-sort-desc", false);
        d3.selectAll("thead tr th i").classed("fa-sort", true);
        //end of delete ClassNames

        //--- add ClassNames
        d3.select("thead tr th:nth-child(8) i")
            .classed('fa-sort', false)
            .classed('fa-sort-up', true); //--- end of adding ClassNames

        //--- RePaginate
        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        $("tbody tr").show();
        paginationList(397);
        d3.selectAll("table tbody tr")
            .sort(function (a, b) {
                return d3.ascending(a.scopus_qoutes, b.scopus_qoutes);

            });
        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        paginationList(50);

    } else if (stat == "К-ть цитувань (Scopus-2017) ") {
        //--- delete ClassNames
        d3.selectAll(".active-h").classed("active-h", false);
        d3.selectAll("thead tr th i").classed("fa-sort-up", false);
        d3.selectAll("thead tr th i").classed("fa-sort-desc", false);
        d3.selectAll("thead tr th i").classed("fa-sort", true);
        d3.select("thead tr th:nth-child(8) i").classed("fa-sort", false);
        //end of delete ClassNames

        //--- add ClassNames
        d3.select("thead tr th:nth-child(8)")
            .classed("active-h", true);
        d3.select("thead tr th:nth-child(8) i")
            .classed('fa-sort-desc', true);

        //--- RePaginate
        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        $("tbody tr").show();
        paginationList(397);
        d3.selectAll("table tbody tr")
            .sort(function (a, b) {
                return d3.descending(a.scopus_qoutes, b.scopus_qoutes);
            });
        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        paginationList(50);
    }

    // ----------------------- OSVITA-UA --------------------------
    if (stat == "Вступило баклаврів " && $("thead tr th:nth-child(9)").hasClass('active-h') ) {
        //--- delete ClassNames
        d3.select(".active-h").classed("active-h", false);
        d3.selectAll("thead tr th i").classed("fa-sort-up", false);
        d3.selectAll("thead tr th i").classed("fa-sort-desc", false);
        d3.selectAll("thead tr th i").classed("fa-sort", true);
        //end of delete ClassNames

        //--- add ClassNames
        d3.select("thead tr th:nth-child(9) i")
            .classed('fa-sort', false)
            .classed('fa-sort-up', true); //--- end of adding ClassNames

        //--- RePaginate
        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        $("tbody tr").show();
        paginationList(397);
        d3.selectAll("table tbody tr")
            .sort(function (a, b) {
                return d3.ascending(a.amountOfStudents, b.amountOfStudents);

            });
        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        paginationList(50);

    } else if (stat == "Вступило баклаврів ") {
        //--- delete ClassNames
        d3.selectAll(".active-h").classed("active-h", false);
        d3.selectAll("thead tr th i").classed("fa-sort-up", false);
        d3.selectAll("thead tr th i").classed("fa-sort-desc", false);
        d3.selectAll("thead tr th i").classed("fa-sort", true);
        d3.select("thead tr th:nth-child(9) i").classed("fa-sort", false);
        //end of delete ClassNames

        //--- add ClassNames
        d3.select("thead tr th:nth-child(9)")
            .classed("active-h", true);
        d3.select("thead tr th:nth-child(9) i")
            .classed('fa-sort-desc', true);

        //--- RePaginate
        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        $("tbody tr").show();
        paginationList(397);
        d3.selectAll("table tbody tr")
            .sort(function (a, b) {
                return d3.descending(a.amountOfStudents, b.amountOfStudents);
            });
        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        paginationList(50);
    }

};






