var sort = function (stat) {

    // d3.csv(file, function (error, data) {
    var table = document.getElementById ("table");


    if (stat == "Назва") {

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



    if (stat == "Середній бал ЗНО") {
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



        if (stat == "Вартість контракту*") {

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


        if (stat == "Всього заяв") {
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

        if (stat == "Заяв на 1 місце") {
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


    // });

};
