
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
        d.budg_per_place = +d.budg_per_place; d.price = +d.price; d.scopus_public = +d.scopus_public;
        d.scopus_qoutes = +d.scopus_qoutes; d.rate_sort = +d.rate_sort;
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
        .data(["Назва", "Середній бал ЗНО", "Всього заяв", "Заяв на 1 місце", "Заяв на 1 місце (бюджет)", "Вартість контракту*", "К-ть публікацій (Scopus)", "К-ть цитувань (Scopus)", "Місце в консолідованому рейтингу"]).enter()
        // .data(["name", "mean", "total", "perPlace", "perPlaceB", "price", "scopusP", "scopusQ", "rate"]).enter()
        // .data(titles).enter()
        .append('th')
        .text(function (d) {
            return d;  })
        .attr("onclick", function (d) {
        return "sort('" + d + "')"
    })


    ;


// Add the table body rows.
    var rows = tableBody.selectAll('tr')
        .data(data)
        .enter()
        .append('tr')


        ;

    rows.append('td').text(function (d) { return d.univ; });


    //Add the spark chart.
    rows.append('td')
        .datum(function (d) {
            return d;
        })
        .call(drawBar());

    rows.append('td').text(function (d) { return d.total_apps; });
    rows.append('td').text(function (d) { return d.total_per_place; });
    rows.append('td').text(function (d) { return d.budg_per_place; });
    rows.append('td').text(function (d) {

        if (d.price >= 1) {
            return d.price + " грн";
        }
        else  {
            return "дані відсутні"
        }


    });
    rows.append('td').text(function (d) { return d.scopus_public; });
    rows.append('td').text(function (d) { return d.scopus_qoutes; });
    rows.append('td').text(function (d) {

        if (d.rate_sort >= 1 && d.rate_sort < 500 ) {
            return d.rate_place;
        }
        else if (d.rate_sort === 500) {
            return "відсутні в рейтингу"
        }

        else {
            return "відсутні в рейтингу"
        }



    });


    d3.selectAll("table tbody tr")
        .sort(function (a, b) {
            return d3.descending(a.mean, b.mean) ;

        });

    paginationList(50);



});





/* -------------- SEARCH------------------ */

function myFunction() {
    // Declare variables
    var input, filter, table, tr, td, i;
    input = document.getElementById("input");
    filter = input.value.toUpperCase();
    table = document.getElementById("table");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}








