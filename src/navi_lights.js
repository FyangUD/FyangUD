$(document).ready(function() {
    $(".light").css({
        opacity: 0,
        transition: '1s'
    });
    $(".section_hover h2").css({
        opacity: 0,
        transition: '1s'
    });

    //hover on title shows all categories
    $(".title_home").mouseenter(function() {
        $(".section_hover h2").css("opacity",1);
        $("#section .light").css("opacity",1);
    }).mouseleave(function() {
        $(".section_hover h2").css("opacity",0);
        $("#section .light").css("opacity",0);
    });

    //hover on each category
    $("#hover_1").mouseenter(function() {
        $("#ceiling").css("opacity",1);
        $("#hover_1 h2").css("opacity",1);
    }).mouseleave(function() {
        $("#ceiling").css("opacity",0);
        $("#hover_1 h2").css("opacity",0);
    });
    $("#hover_2").mouseenter(function() {
        $("#desk").css("opacity",1);
        $("#hover_2 h2").css("opacity",1);
    }).mouseleave(function() {
        $("#desk").css("opacity",0);
        $("#hover_2 h2").css("opacity",0);
    });
    $("#hover_3").mouseenter(function() {
        $("#floor").css("opacity",1);
        $("#hover_3 h2").css("opacity",1);
    }).mouseleave(function() {
        $("#floor").css("opacity",0);
        $("#hover_3 h2").css("opacity",0);
    });
    $("#hover_4").mouseenter(function() {
        $("#screen").css("opacity",1);
        $("#hover_4 h2").css("opacity",1);
    }).mouseleave(function() {
        $("#screen").css("opacity",0);
        $("#hover_4 h2").css("opacity",0);
    });

    //hover on cat
    $("#cat_1").css({
        opacity: 1,
        transition: '1s'
    });
    $("#cat_2").css({
        opacity: 0,
        transition: '1s'
    });
    $("#hover_5").mouseenter(function() {
        $("#cat_2").css("opacity",1);
        $("#cat_1").css("opacity",0);
    }).mouseleave(function() {
        $("#cat_2").css("opacity",0);
        $("#cat_1").css("opacity",1);
    });

    //pages on the right hover on svgs
    //luck neon sign
    $("#luck").parent().mouseenter(function() {
        $("#luck").css("opacity",0.5);
        $("#luck_dark").css("opacity",1);
        setTimeout(function (){
            $("#luck").css("opacity",1);
            $("#luck_dark").css("opacity",0);        
        }, 100);
        setTimeout(function (){
            $("#luck").css("opacity",0.5);
            $("#luck_dark").css("opacity",0);      
        }, 200);
        setTimeout(function (){
            $("#luck").css("opacity",1);
            $("#luck_dark").css("opacity",0);        
        }, 300);
        setTimeout(function (){
            $("#luck").css("opacity",0);
            $("#luck_dark").css("opacity",1);      
        }, 500);
        setTimeout(function (){
            $("#luck").css("opacity",1);
            $("#luck_dark").css("opacity",0);        
        }, 700);
    })
    //cellphone
    $(".content").mouseenter(function() {
        $("#cellphone").css("opacity",1);
    }).mouseleave(function() {
        $("#cellphone").css("opacity",0);
    });
    //screen
    $(".content").mouseenter(function() {
        $("#screen_right").css("opacity",1);
    }).mouseleave(function() {
        $("#screen_right").css("opacity",0);
    });
});