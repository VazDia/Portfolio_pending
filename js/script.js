$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });



    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');
    });

    $('a[href*="#"]').on('click', function(e){

        $('html, body').animate({
            scrollTop : $($(this).attr('href')).offset().top,

        },
        500,
        'linear'
        );
    });

});


// Button and link click animation

var activateLinks = document.querySelectorAll('.clickTarget');

activateLinks.forEach(elt => elt.addEventListener('click', function(e){
    resetClass();
    elt.classList.add('active');

})
);


function resetClass(){
    for (elt of activateLinks){
        elt.classList.remove('active');
        
    }
}


