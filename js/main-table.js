
var file = "data/data.csv";

d3.csv(file, function (error, data) {
    if (error) throw error;

    // var formatValue = d3.format(".0f");

    data.forEach(function (d) {
        d.mean = +d.mean;
        d.from = +d.from;
        d.to = +d.to;
        d.total_apps = +d.total_apps;
        d.total_per_place = +d.total_per_place;
        d.budg_per_place = +d.budg_per_place; d.price = +d.price; d.scopus_public = +d.scopus_public;
        d.scopus_qoutes = +d.scopus_qoutes; d.rate_sort = +d.rate_sort;   });

    var sortAscending = true;
    var titles = d3.keys(data[0]);

    var table = d3.select('#table').append('table').attr('class', 'table table-condensed');

// Append the table header and body.
    var tableHead = table.append('thead'),
        tableBody = table.append('tbody');



// Add the table header content.
    tableHead.append('tr').selectAll('th')
        .data(["Назва", "Середній бал ЗНО", "graph","Всього заяв", "Заяв на 1 місце", "Заяв на 1 місце (бюджет)", "Вартість", "К-ть публікацій (Scopus)", "К-ть цитувань (Scopus)", "Місце в консолідованому рейтингу"]).enter()
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
    rows.append('td').text(function (d) { return d.mean; });

    //Add the spark chart.
    rows.append('td')
        .datum(function (d) {
            return d;
        })
        .call(drawBar());

    rows.append('td').text(function (d) { return d.total_apps; });
    rows.append('td').text(function (d) { return d.total_per_place; });
    rows.append('td').text(function (d) { return d.budg_per_place; });
    rows.append('td').text(function (d) { return d.price; });
    rows.append('td').text(function (d) { return d.scopus_public; });
    rows.append('td').text(function (d) { return d.scopus_qoutes; });
    rows.append('td').text(function (d) { return d.rate_place; });







    // d3.selectAll("table tbody tr")
    //     .sort(function (a, b) {
    //         return d3.descending(a.mean, b.mean) ;
    //
    //     });



    paginationList(20);


    function paginationList(listPaginationCount){
        $('table.paginated').each(function() {
            var currentPage = 0;
            var numPerPage = listPaginationCount;
            var $pager=$('.pager').remove();
            var $table = $(this);
            $table.bind('repaginate', function() {
                $table.find('tbody tr').hide().slice(currentPage * numPerPage, (currentPage + 1) * numPerPage).show();
            });
            $table.trigger('repaginate');
            var numRows = $table.find('tbody tr').length;
            var numPages = Math.ceil(numRows / numPerPage);
            var $pager = $('<div class="pager"></div>');
            for (var page = 0; page < numPages; page++) {
                $('<span class="page-number"></span>').text(page + 1).bind('click', {
                    newPage: page
                }, function(event) {
                    currentPage = event.data['newPage'];
                    $table.trigger('repaginate');
                    $(this).addClass('active').siblings().removeClass('active');
                }).appendTo($pager).addClass('clickable');
            }
            $pager.insertBefore($table).find('span.page-number:first').addClass('active');
        });
    }


//     // Create selection from Array
//     var arr = [
//         {val : 1000, text: 'All'},
//         {val : 5, text: '5'},
//         {val : 10, text: '10'},
//         {val : 15, text: '15'},
//         {val : 20, text: '20'}
//     ];
//     var sel = $('<select id="selectionPerPage">').appendTo('#selection');
//     $(arr).each(function() {
//         sel.append($("<option>").attr('value',this.val).text(this.text));
//     });

// // Set value after selection
//     $('#selectionPerPage').change(function() {
//         // value and cookie
//         var numPerPage = $(this).val();
//         paginationList(numPerPage);
//     });

});
