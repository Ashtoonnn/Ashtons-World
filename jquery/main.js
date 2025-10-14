$(".dark-btn").click(
    function(){
        $(".box").toggleClass("dark");
        $("body").toggleClass("dark");
});


$(".spin-btn").click(
    function(){
        $(".box").toggleClass("spin");
});

$(".reveal-btn").click(
    function(){
        // $(".pumpkin").addClass("reveal");
    $(".pumpkin").show();
    $(".reveal-btn").hide();
});

$( ".draggable" ).draggable();
