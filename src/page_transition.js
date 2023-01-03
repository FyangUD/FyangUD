$(document).ready(function() {
    const pages = $(".page");
    const pages_hide = $(".hide");

    const hovers = $(".section_hover");
    const backs = $(".back");
    
    const translateAmount = 100;
    let translate = 0;

    function slide(page, direction){
        if(direction === "right"){
            translate -= translateAmount;
            page.css("visibility", "visible");
            pages.css("transform", "translateX("+translate+"%)");
        }
        if(direction === "home"){
            translate += translateAmount;
            pages.css("transform", "translateX("+translate+"%)");
            setTimeout(function (){
                page.css("visibility", "hidden");         
            }, 1000);
        }
    }

    hovers.each(function(index) {
        if($(this).attr("id") !== "hover_5"){   //exclude cat hover
            $(this).click( () => {
                slide(pages_hide.eq(index), "right");
            });            
        }

    });

    backs.each(function(index) {
        $(this).click( () => {
            slide(pages_hide.eq(index), "home");
        });
    });

});

