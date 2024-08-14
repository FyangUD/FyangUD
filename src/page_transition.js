$(document).ready(function() {
    const pages = $(".page");
    const pages_hide = $(".hide");

    pages_hide.each(function(){
        $(this).hide();
    });


    const hovers = $(".section_hover");
    const backs = $(".back");
    
    const translateAmount = 100;
    let translate = 0;

    function slide(page, direction){
        if(direction === "right"){
            translate -= translateAmount;
            page.show();
            pages.css("transform", "translateX("+translate+"%)");
        }
        if(direction === "home"){
            translate += translateAmount;
            //console.log(1);
            pages.css("transform", "translateX("+translate+"%)");
            setTimeout(function (){
                page.hide();       
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
            //check if any expanded content, close it before return to home page
            var expanded = $(".ContentExpand");
            if (expanded.length > 0){
                expanded[0].lastChild.click();
                var mouseOutEvent = new MouseEvent('mouseout');
                expanded[0].dispatchEvent(mouseOutEvent);
            }
            // slide back home
            slide(pages_hide.eq(index), "home");            
        });
    });

});

