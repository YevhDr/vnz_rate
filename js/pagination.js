function paginationList(listPaginationCount) {
    $("li.current-page").remove();
    $("li#next-page").remove();
    $("li#previous-page").remove();
    var numberOfItems = $('tbody tr.sh').length;
    var limitOfPages = listPaginationCount;

    if (numberOfItems > limitOfPages) {
        $("tbody tr.sh:gt(" + (limitOfPages - 1) + ")").hide();
        var totalPages = Math.round(numberOfItems / limitOfPages);
    } else {
        var totalPages = 1;
    }



    // Add previous current and next button

    $('.pagination').append("<li id='previous-page'><a href='javascript:void(0)' aria-label='Previous'><span aria-hidden='true'>&laquo;</span></a></li>");
    $('.pagination').append("<li class='current-page active'><a href='javascript:void(0)'>" + 1 + "</a></li>");
    for (var t = 2; t <= totalPages; t++) {
        $('.pagination').append("<li class='current-page'><a href='javascript:void(0)'>" + t + "</a></li>");
    }
    $('.pagination').append("<li id='next-page'><a href='javascript:void(0)' aria-label='Next'><span aria-hidden='true'>&raquo;</span></a></li>");


    // Show pages according to the button
    $(".pagination li.current-page").on("click", function () {
        if ($(this).hasClass("active")) {
            return false
        } else {
            var currentPage = $(this).index();
            $(".pagination li").removeClass("active");
            $(this).addClass("active");
            $("tbody tr.sh").hide();

            var grandTotal = limitOfPages * currentPage;
            for (var i = grandTotal - limitOfPages; i < grandTotal; i++) {
                $("tbody tr.sh:eq(" + i + ")").show()
            }
        }
    });


    $("#next-page").on("click", function () {
        var currentPage = $(".pagination li.active").index();
        if (currentPage === totalPages) {
            return false;
        } else {
            currentPage++;
            $(".pagination li").removeClass("active");
            $("tbody tr.sh").hide();
            var grandTotal = limitOfPages * currentPage;
            for (var i = grandTotal - limitOfPages; i < grandTotal; i++) {
                $("tbody tr.sh:eq(" + i + ")").show()
            }
            $(".pagination li.current-page:eq(" + (currentPage - 1) + ")").addClass("active");
        }

    });

    $("#previous-page").on("click", function () {
        var currentPage = $(".pagination li.active").index();
        if (currentPage === 1) {
            return false;
        } else {
            currentPage--;
            $(".pagination li").removeClass("active");
            $("tbody tr.sh").hide();
            var grandTotal = limitOfPages * currentPage;
            for (var i = grandTotal - limitOfPages; i < grandTotal; i++) {
                $("tbody tr.sh:eq(" + i + ")").show()
            }
            $(".pagination li.current-page:eq(" + (currentPage - 1) + ")").addClass("active");
        }

    });

}

