var sort = function (stat) {

    // d3.csv(file, function (error, data) {

        if (stat == "Назва") {

            console.log("hello");
            d3.selectAll("table tbody tr")
                .sort(function (a, b) {
                    return d3.ascending(a.univ, b.univ);

                });

        }



    if (stat == "Середній бал ЗНО") {


                console.log("ZNO");
                d3.selectAll("table tbody tr")
                    .sort(function (a, b) {
                        return d3.descending(a.mean, b.mean);


                    });


            }



        if (stat == "Вартість") {

            console.log("price");
            d3.selectAll("table tbody tr")
                .sort(function (a, b) {
                    return d3.descending(a.price, b.price);

                });

        }


        if (stat == "Всього заяв") {
            console.log("total");
            d3.selectAll("table tbody tr")
                .sort(function (a, b) {
                    return d3.descending(a.total_apps, b.total_apps);

                });

        }

        if (stat == "Заяв на 1 місце") {
            console.log("total");
            d3.selectAll("table tbody tr")
                .sort(function (a, b) {
                    return d3.descending(a.total_per_place, b.total_per_place);

                });

        }

        if (stat == "Заяв на 1 місце (бюджет)") {
            console.log("total");
            d3.selectAll("table tbody tr")
                .sort(function (a, b) {
                    return d3.descending(a.budg_per_place, b.budg_per_place);

                });

        }

        if (stat == "К-ть публікацій (Scopus)") {
            console.log("total");
            d3.selectAll("table tbody tr")
                .sort(function (a, b) {
                    return d3.descending(a.scopus_public, b.scopus_public);

                });

        }


        if (stat == "К-ть цитувань (Scopus)") {
            console.log("total");
            d3.selectAll("table tbody tr")
                .sort(function (a, b) {
                    return d3.descending(a.scopus_qoutes, b.scopus_qoutes);

                });
        }

        if (stat == "Місце в консолідованому рейтингу") {
            console.log("total");
            d3.selectAll("table tbody tr")
                .sort(function (a, b) {
                    return d3.ascending(a.rate_sort, b.rate_sort);

                });
        }


    // });

};
