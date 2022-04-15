$(function(){ //다시듣기
    $(".gnb > li").on("mouseenter", function(){
        $(this).children("ul").css("display","block");
    });
    $(".gnb > li").on("mouseleave", function(){
        $(this).children("ul").css("display","none");
    });


//모바일

    $(".btn").on("click", function(){
        $(".btn, .section").toggleClass("on");
    });

    $(".m_btn").on("click", function(){

        if($(this).hasClass("on")==true){
            $(".m_gnb > li > ul").stop().slideUp();
        }

        $(this).toggleClass("on");
        $(".m_menu").stop().fadeToggle();

    });
   
    $(".sub").on("click", function(){

        var d = $(this).next("ul").css("display");

        if(d=="none"){
            $(".m_gnb > li > ul").stop().slideUp();
            $(this).next("ul").stop().slideDown();
        }else{
            $(this).next("ul").stop().slideUp();
        }

        return false;
    });

    $(window).on("resize", function(){
        var w = $(window).width();
        if(w>=800){
            $(".m_btn").removeClass("on");
            $(".m_menu").css("display","none");
            $(".m_gnb > li > ul").css("display","none");
        }else{
            $(".btn, section").removeClass("on");
        }


    });

 
});