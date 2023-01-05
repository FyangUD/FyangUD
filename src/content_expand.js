$(document).ready(function() {
    const contents = document.getElementsByClassName("extensible");
    const contents_jquery = $(".extensible");

    const filters = $(".filter");

    for(i=0;i<contents.length;i++){

        //Add expand and close button
        var expBtn = document.createElement('img');
        expBtn.src = '/images/ExpandBtn.svg';

        var cloBtn = document.createElement('img');
        cloBtn.src = '/images/CloseBtn.svg';

        expBtn.classList.add('ExpandBtn');
        hover_div = contents[i].querySelector(".hover_title");
        hover_div.style.opacity = "0";
        hover_div.appendChild(expBtn);

        cloBtn.classList.add('ExpandBtn');
        cloBtn.setAttribute('hidden','true');
        contents[i].appendChild(cloBtn);

        //show expand button when hover on content grid
        contents[i].addEventListener('mouseover', function(){
            if(this.classList.contains("content")){
                 this.querySelector(".hover_title").style.opacity = "1";
                 this.firstElementChild.classList.add("transparent");
            }
        });
        //hide expand button when leave content grid
        contents[i].addEventListener('mouseout', function(){
            if(this.classList.contains("content")){
                this.querySelector(".hover_title").style.opacity = "0";
                this.firstElementChild.classList.remove("transparent");
            }
        });

        //skip those grids that link to other webpage
        if(contents[i].classList.contains("outside_link")){
            hover_div.lastChild.setAttribute('hidden','true');
            continue;
        }

        //click to expand grid
        hover_div.addEventListener('click', function(){
            this.parentNode.classList.add('ContentExpand');
            this.parentNode.classList.remove('content');
            
            this.setAttribute('hidden','true'); //hide click expand div
            this.parentNode.lastChild.previousElementSibling.removeAttribute('hidden');  //show details div
            this.parentNode.lastChild.removeAttribute('hidden');  //show close button

            ToggleVisibility(this.parentNode);
            filters.hide();
        }, false);

        /*issue: after expand, click h2 other content grids would show up and mess the layout
        //find all items that can click to expand and add click event
        click_items = contents[i].querySelectorAll('.click_expand');

        //add click to expand function
        for(j=0; j<click_items.length; j++){
            click_items[j].addEventListener('click', function(){
                this.parentNode.classList.add('ContentExpand');
                this.parentNode.classList.remove('content');
                
                this.parentNode.lastChild.previousSibling.setAttribute('hidden','true'); //hide expand button
                this.parentNode.lastChild.previousSibling.previousElementSibling.removeAttribute('hidden');  //show details div
                this.parentNode.lastChild.removeAttribute('hidden');  //show close button
    
                ToggleVisibility(this.parentNode);
            }, false);
        }*/

        //add close button click function
        cloBtn.addEventListener('click', function(){
            this.parentNode.classList.add('content');
            this.parentNode.classList.remove('ContentExpand');
            
            this.setAttribute('hidden','true'); //hide close button
            this.previousElementSibling.setAttribute('hidden', 'true'); //hide details div
            this.previousElementSibling.previousElementSibling.removeAttribute('hidden');  //show expand button

            ToggleVisibility(this.parentNode);
            filters.show();
        }, false);

        //add scroll distance
        contents[i].addEventListener('scroll', function(e){ScrollPos(e);}, false);
    }

    function ToggleVisibility(item) {
        for(j=0;j<contents.length;j++){
            if(contents[j] == item){
                continue;
            }
  
            if(!contents[j].classList.contains("filter_hide")){
                contents_jquery.eq(j).toggle();
            }
        }
    }

    function ScrollPos(e){
        var pos = e.target.scrollTop;
        var startPos = 0.3 / 100 * document.documentElement.clientWidth; //change 0.3 based on button top value
        e.target.lastChild.style.top = startPos + pos + 'px'; //update close button position to top
    }
});