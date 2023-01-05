$(document).ready(function() {
    const filters = $(".filter");
    const physical_project_filter = filters.eq(0).children();


    physical_project_filter.each(function(){
        $(this).click(function(){
            filter_projects($(this));
            $(this).toggleClass("filter_dark");
        });
    });

    function filter_projects(filter){
        if(filter.attr("id") == "academic"){
            let projects = $("div.items > .academic_projects")
            toggle_class(projects);
            return;
        }
        if(filter.attr("id") == "competition"){
            let projects = $("div.items > .competition_projects")
            toggle_class(projects);
            return;
        }
        if(filter.attr("id") == "professional"){
            let projects = $("div.items > .professional_projects")
            toggle_class(projects);
            return;
        }
    }

    function toggle_class(projects){
        
        projects.each(function(){
            $(this).toggle();
            $(this).toggleClass("filter_hide");
        });
    }

});