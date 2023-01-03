$(document).ready(function() {
    var contents = document.getElementsByClassName('extensible');
    for(i=0;i<contents.length;i++){
        var expBtn = document.createElement('img');
        expBtn.src = '/images/ExpandBtn.svg';

        var cloBtn = document.createElement('img');
        cloBtn.src = '/images/CloseBtn.svg';

        expBtn.classList.add('ExpandBtn');
        expBtn.setAttribute('hidden','true');
        cloBtn.classList.add('ExpandBtn');
        cloBtn.setAttribute('hidden','true');

        contents[i].appendChild(expBtn);
        contents[i].appendChild(cloBtn);

        //show expand button when hover on content grid
        contents[i].addEventListener('mouseover', function(){
            this.lastChild.previousSibling.removeAttribute('hidden');
        });
        //show expand button when hover on content grid
        contents[i].addEventListener('mouseout', function(){
            this.lastChild.previousSibling.setAttribute('hidden','true');
        });

        expBtn.addEventListener('click', function(){
            this.parentNode.classList.add('ContentExpand');
            this.parentNode.classList.remove('content');
            
            this.setAttribute('hidden','true');
            this.previousElementSibling.removeAttribute('hidden');  //show details div
            this.nextSibling.removeAttribute('hidden');  //show close button

            ToggleVisibility(this.parentNode);
        }, false);
        cloBtn.addEventListener('click', function(){
            this.parentNode.classList.add('content');
            this.parentNode.classList.remove('ContentExpand');
            
            this.setAttribute('hidden','true');
            this.previousSibling.previousElementSibling.setAttribute('hidden', 'true'); //hide details div
            this.previousSibling.removeAttribute('hidden');  //show expand button

            ToggleVisibility(this.parentNode);

        }, false);

        //add scroll distance
        contents[i].addEventListener('scroll', function(e){ScrollPos(e);}, false);
    }

    function ToggleVisibility(item) {
        for(j=0;j<contents.length;j++){
            if(contents[j] == item){
                continue;
            }
            contents[j].style.display == ''?
                contents[j].style.display = 'none' :
                contents[j].style.display = '';
        }
    }

    function ScrollPos(e){
        var pos = e.target.scrollTop;
        var startPos = 0.3 / 100 * document.documentElement.clientWidth; //change 0.3 based on button top value
        e.target.lastChild.style.top = startPos + pos + 'px'; //update close button position to top
    }
});