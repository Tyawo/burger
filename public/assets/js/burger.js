$(function () {

    $(".create-form").on("submit", function (event) {
        event.preventDefault();
        // $(".devouredburgers").empty();

        var newBurger = {
            burger_name: $("newBurger").val().trim(),
            devoured: 0
        };
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function () {
            console.log("Added new burger");
            location.reload();
        });
    });

    $(".eatburger").on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr("id");
        var devouredState = {
            devoured: 1
        };
        console.log("is this firing")
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredState
        }).then(function () {
            console.log("Burger devoured");
            location.reload();
        });

    });

    $(".trashburger").on("click", function (event) {
        // event.preventdefault();
        var id = $(this).data("id");
        // send the delete request

        $.ajax({
            type: "DELETE",
            url: "/api/burgers/" + id
        }).then(location.reload());
    });
    
});

