var sort = function (stat) {

    var parent = stat.parentNode;

    var table = document.getElementById("table");

    //---------- University ------------- //
    // SORT DESCENDING
    if (stat == "Назва" && $("thead tr th:nth-child(1)").hasClass('active-h') ) {

        //--- delete ClassNames
        d3.selectAll(".aes").classed("aes", false);
        d3.selectAll(".des").classed("des", false);
        d3.select("thead tr th:nth-child(1)").classed("active-h", false); //end of delete ClassNames

        //--- add ClassNames
        d3.select("thead tr th:nth-child(1)").classed('des', true);

        //--- RePaginate
        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        $("tbody tr").show();
        paginationList(386);
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
    else if (stat == "Назва") {
        //--- delete ClassNames
        d3.selectAll(".aes").classed("aes", false);
        d3.selectAll(".des") .classed("des", false);
        d3.selectAll(".active-h").classed("active-h", false); //end of delete ClassNames

        //--- add ClassNames
        d3.select("thead tr th:nth-child(1)")
            .classed("active-h", true)
            .classed('aes', true);  //--- end of adding ClassNames

        //--- RePaginate
        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        $("tbody tr").show();
        paginationList(386);
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


    if (stat == "Середній бал ЗНО" && $("thead tr th:nth-child(2)").hasClass('active-h') ) {

        //--- delete ClassNames
        d3.selectAll(".aes").classed("aes", false);
        d3.selectAll(".des").classed("des", false);
        d3.select(".active-h").classed("active-h", false); //end of delete ClassNames

        //--- add ClassNames
        d3.select("thead tr th:nth-child(2)")
            .classed('aes', true); //--- end of adding ClassNames

        //--- RePaginate
        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        $("tbody tr").show();
        paginationList(386);
        d3.selectAll('tbody tr')
            .sort(function (a, b) {
                return d3.ascending(a.mean, b.mean);
            });
        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        paginationList(50);



    }  else if (stat == "Середній бал ЗНО") {

        //--- delete ClassNames
        d3.selectAll(".aes").classed("aes", false);
        d3.selectAll(".des").classed("des", false);
        d3.selectAll(".active-h").classed("active-h", false);

        //--- add ClassNames
        d3.selectAll("thead tr th:nth-child(2)")
            .classed("active-h", true)
            .classed('des', true);


        //--- RePaginate
        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        $("tbody tr").show();
        paginationList(386);
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

    if (stat == "Вартість контракту*" && $("thead tr th:nth-child(6)").hasClass('active-h') ) {

        //--- delete ClassNames
        d3.selectAll(".aes").classed("aes", false);
        d3.selectAll(".des").classed("des", false);
        d3.select(".active-h").classed("active-h", false); //end of delete ClassNames

        //--- add ClassNames
        d3.select("thead tr th:nth-child(6)")
            .classed('aes', true); //--- end of adding ClassNames

        //--- RePaginate
        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        $("tbody tr").show();
        d3.selectAll("tbody tr")
            .sort(function (a, b) {
                return d3.ascending(a.price, b.price);

            });

        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        paginationList(50);

    }

    else if (stat == "Вартість контракту*") {
        //--- delete ClassNames
        d3.selectAll(".aes").classed("aes", false);
        d3.selectAll(".des").classed("des", false);
        d3.selectAll(".active-h").classed("active-h", false);

        //--- add ClassNames
        d3.selectAll("thead tr th:nth-child(6)")
            .classed("active-h", true)
            .classed('des', true);

        //--- RePaginate
        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        $("tbody tr").show();
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

    if (stat == "Всього заяв" && $("thead tr th:nth-child(3)").hasClass('active-h') ) {
        //--- delete ClassNames
        d3.selectAll(".aes").classed("aes", false);
        d3.selectAll(".des").classed("des", false);
        d3.select(".active-h").classed("active-h", false); //end of delete ClassNames

        //--- add ClassNames
        d3.select("thead tr th:nth-child(3)")
            .classed('aes', true); //--- end of adding ClassNames

        //--- RePaginate
        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        $("tbody tr").show();
        d3.selectAll("table tbody tr")
            .sort(function (a, b) {
                return d3.ascending(a.total_apps, b.total_apps);

            });
        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        paginationList(50);

    } else if(stat == "Всього заяв") {

        //--- delete ClassNames
        d3.selectAll(".aes").classed("aes", false);
        d3.selectAll(".des").classed("des", false);
        d3.select(".active-h").classed("active-h", false); //end of delete ClassNames

        //--- add ClassNames
        d3.selectAll("thead tr th:nth-child(3)")
            .classed("active-h", true)
            .classed('des', true);

        //--- RePaginate
        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        $("tbody tr").show();
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



    if (stat == "Заяв на 1 місце") {
        d3.selectAll(".active-h").classed("active-h", false);
        d3.selectAll("thead tr th:nth-child(5)").classed("active-h", true);
        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        $("tbody tr").show();
        d3.selectAll("table tbody tr")
            .sort(function (a, b) {
                return d3.descending(a.total_per_place, b.total_per_place);

            });
        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        paginationList(50);

    }

    if (stat == "Заяв на 1 місце (бюджет)") {
        d3.selectAll(".active-h").classed("active-h", false);
        d3.selectAll("thead tr th:nth-child(6)").classed("active-h", true);
        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        $("tbody tr").show();
        paginationList(386);
        d3.selectAll("table tbody tr")
            .sort(function (a, b) {
                return d3.descending(a.budg_per_place, b.budg_per_place);
            });
        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        paginationList(50);

    }

    if (stat == "К-ть публікацій (Scopus)") {
        d3.selectAll(".active-h").classed("active-h", false);
        d3.selectAll("thead tr th:nth-child(7)").classed("active-h", true);
        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        $("tbody tr").show();
        d3.selectAll("table tbody tr")
            .sort(function (a, b) {
                return d3.descending(a.scopus_public, b.scopus_public);

            });
        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        paginationList(50);

    }


    if (stat == "К-ть цитувань (Scopus)") {
        d3.selectAll(".active-h").classed("active-h", false);
        d3.selectAll("thead tr th:nth-child(8)").classed("active-h", true);
        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        $("tbody tr").show();
        d3.selectAll("table tbody tr")
            .sort(function (a, b) {
                return d3.descending(a.scopus_qoutes, b.scopus_qoutes);
            });
        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        paginationList(50);
    }

    if (stat == "Місце в консолідованому рейтингу") {
        d3.selectAll(".active-h").classed("active-h", false);
        d3.selectAll("thead tr th:nth-child(9)").classed("active-h", true);
        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        $("tbody tr").show();
        d3.selectAll("table tbody tr")
            .sort(function (a, b) {
                return d3.ascending(a.rate_sort, b.rate_sort);
            });
        $("li.current-page").remove();
        $("li#next-page").remove();
        $("li#previous-page").remove();
        paginationList(50);
    }

};






