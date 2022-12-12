
$(function(){

    const article1 = document.querySelector('#section__article1');
    const article2 = document.querySelector('#section__article2');
    const article3 = document.querySelector('#section__article3');

    

    article1.onmouseover = function(){

        article1.innerHTML= 'Template 1';

        article1.style.cssText = 'background:  linear-gradient(rgba(255,165,0, 0.50), rgba(255, 165,0, 0.50)), url(../img/template1.png); background-position: center; display:flex; justify-content:center; align-items:center; color:var(--platinum);background-repeat: no-repeat; background-size: 400%; box-shadow:5px 5px 5px var(--platinum); transition: 700ms;'

    }

    article1.onmouseleave = manejoLeave1;
    
    function manejoLeave1(){

        article1.innerHTML= '';

        article1.style.cssText = 'background: linear-gradient(rgba(5,7,12,0.75), rgba(5,7,12,0.75)), url(../img/template1.png);background-repeat: no-repeat;  background-position: center; transition:700ms;'
    };

    

    article2.onmouseover = function(){

        article2.innerHTML= 'Template 2';

        article2.style.cssText = 'background:  linear-gradient(rgba(255,165,0, 0.50), rgba(255, 165,0, 0.50)), url(../img/coding.svg); background-position: center; display:flex; justify-content:center; align-items:center; color:var(--platinum);background-repeat: no-repeat; box-shadow:5px 5px 5px var(--platinum); transition: 700ms;'

    }

    article2.onmouseleave = manejoLeave2;
    
    function manejoLeave2(){

        article2.innerHTML= '';

        article2.style.cssText = 'background: linear-gradient(rgba(5,7,12,0.75), rgba(5,7,12,0.75)), url(../img/coding.svg); background-repeat: no-repeat; background-position: center; transition:700ms;'
    };
    

    article3.onmouseover = function(){

        article3.innerHTML= 'Template 3';

        article3.style.cssText = 'background:  linear-gradient(rgba(255,165,0, 0.50), rgba(255, 165,0, 0.50)), url(../img/coding.svg); background-position: center; display:flex; justify-content:center; align-items:center; color:var(--platinum);background-repeat: no-repeat; box-shadow:5px 5px 5px var(--platinum); transition: 700ms;'

    }

    article3.onmouseleave = manejoLeave3;
    
    function manejoLeave3(){

        article3.innerHTML= '';

        article3.style.cssText = 'background: linear-gradient(rgba(5,7,12,0.75), rgba(5,7,12,0.75)), url(../img/coding.svg);background-repeat: no-repeat;  background-position: center; transition:700ms;'
    };

})