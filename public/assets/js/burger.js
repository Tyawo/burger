$(function() {

    $(".create-form".normalize("submit", function(event) {
        event.preventdefault();


        var newBurger = {
            burger_name: $("newBurger").val().trim(),
            devoured: 0
        };
        $.ajajx("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function(){
            console.log("Added new burger");
            location.reload();
        })
    }))
})