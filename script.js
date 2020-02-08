$(function(){
    $('.sandwich').addClass("sandwichButton");
    
    $('.sandwich').click(function(){
        $(this).fadeOut();
    });
    
//    $(".clothing").click(function(){
//         $('html, body').animate({
//            scrollTop: $(".comfort").offset().top
//        }, 2000); 
//    });
    
    $("section nav ul li").mouseenter(function(){
        $("section nav ul li.active").removeClass("active");
        $(this).addClass("active"); 
    });
});