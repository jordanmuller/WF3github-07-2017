$(document).ready(function() {

    $.ajax({
        type: "GET",
        dataType: "JSON",
        // Le js est situé dans la balise script sur la page index.html
        url: "data/data.json",

        success: function(data) {
            console.log(data);

            for (var i = 0; i < data.length; i++) {
                $("nav ul").append('<li><a href="' + data[i].anchor + '">' + data[i].content + '</a></li>')
            }
        },
        error: function(err) {
            console.log(err);
        },
        complete: function() {
            console.log("Fin de la requête");
        }
    });
});