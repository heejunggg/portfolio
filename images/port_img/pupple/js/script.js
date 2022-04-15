$(function(){

    $(window).on("resize", function(){ /*화면을 재조정한다.*/
        var w = $(window).width();
        var h = $(window).height(); /*바뀐높이값을 h변수에 저장한다.*/
        if(w>=700){
            $(".section").css("height",h);/*섹션의 css높이h로불러들인다.*/
            $(".menu_btn").removeClass("on");
            $(".mobile_menu").css("display","block");
        }else{ 
            $(".main").css("height",h);
            $(".about").css("height","auto");
            $(".skill").css("height","auto");
        }
      
    });
   
    $(window).trigger("resize");


  
    $(window).on('scroll', onScroll);
    $(window).on('scroll', scrollHeader);
    
    function scrollHeader(){
        var scr = $(window).scrollTop();
        var win_h = $(window).height();

        if(scr>=win_h){
            $("header").css({
                "position":"fixed",
                "top":0
            });
        }else{
            $("header").css({
                "position":"absolute",
                "top":"100%"
            });
        }
    }

    function onScroll(){
        var scr = $(window).scrollTop();
        var win_h = $(window).height();

       
        if(scr>=$(".main").offset().top && scr<$(".about").offset().top){
            $(".circle_graph_cover").removeClass("on");
            $(".circle .left .circle-mask-inner").css("transform","rotate(0deg)");
            $(".circle .right .circle-mask-inner").css("transform","rotate(0deg)");
        }else if(scr>=$(".about").offset().top && scr<$(".skill").offset().top){
            $(".circle_graph_cover").removeClass("on");
            $(".circle .left .circle-mask-inner").css("transform","rotate(0deg)");
            $(".circle .right .circle-mask-inner").css("transform","rotate(0deg)");
        }else if(scr>=$(".skill").offset().top && scr<$(".works_1").offset().top){
            circle_graph();
        }else if(scr>=$(".works_1").offset().top && scr<$(".works_2").offset().top){
            $(".circle_graph_cover").removeClass("on");
            $(".circle .left .circle-mask-inner").css("transform","rotate(0deg)");
            $(".circle .right .circle-mask-inner").css("transform","rotate(0deg)");
        }
        else if(scr>=$(".works_2").offset().top && scr<$(".contact").offset().top){
            $(".circle_graph_cover").removeClass("on");
            $(".circle .left .circle-mask-inner").css("transform","rotate(0deg)");
            $(".circle .right .circle-mask-inner").css("transform","rotate(0deg)");
        }else{
            $(".circle_graph_cover").removeClass("on");
            $(".circle .left .circle-mask-inner").css("transform","rotate(0deg)");
            $(".circle .right .circle-mask-inner").css("transform","rotate(0deg)");
        }

        $(".gnb li").each(function(){
            var selec = $(this).children("a").attr("data-target");
            var selecofs = $("."+selec).offset().top;
            
            if(scr>=selecofs && scr<selecofs+win_h){
                $(".gnb li").removeClass("on");
                $(this).addClass("on");
            }
        });
    }

    /*mobile_menu_start*/

   $(".menu_btn").on("click",function(){
        $(".menu_btn, .mobile_menu").toggleClass("on");
   });
    
    /*$(".menu_btn").on("click",function(){
        $(this).toggleClass("on");
        $(".mobile_menu").stop().fadeToggle();
    });*/
    
    $(".gnb li").on("click",function(){

        $(window).off("scroll",onScroll);
        var target = $(this).children("a").attr("data-target");
        var ofs = $("."+target).offset().top;

        $(".gnb li").removeClass("on");
        $(this).addClass("on");

        $("html,body").stop().animate({
            "scrollTop":ofs
        },1300, function(){
            $(window).on("scroll",onScroll);
        });

        $(".mobile_menu,.menu_btn").removeClass("on");
        return false;

   });

    $(".main .mouseicon").on("click",function(){
        $("html,body").stop().animate({
            "scrollTop":$(window).height()
    },1300);
});
//about typing

   var typed = new Typed("#typed",{
    stringsElement :"#string",
    typeSpeed:200,
    backSpeed:50,
    backDelay:1000,
    startDelay:1000,
    loop:true,
    cursorchar:"-"

   });

   function circle_graph(){
    if($(".circle_graph_cover").hasClass("on")==false){
        
        
        var graph = $(".circle_graph_cover").find(".circle_graph");
        
        graph.each(function(){
            
            var percent = $(this).children(".circle").attr("data-percent");
            //90,75,60,80,70
            var circleLeft = $(this).find(".left .circle-mask-inner");
            var circleRight = $(this).find(".right .circle-mask-inner");
            var strong = $(this).find("strong");
            
            $({Count:0}).stop().animate({
                Count:percent
            },{
                duration:5000,
                progress:function(){
                    var num = this.Count; //75  25
                    strong.text(Math.ceil(num));
                    //백분율 구하는 공식 (부분값/전체값)*100 = 백분율
                    //백분율 에서 부분값을 구하는 공식  (백분율/100)*전체값 = 부분값
                    var deg = (num/100)*360; // 270   90
                    var degRight = Math.min(Math.max(deg,0),180);
                    var degLeft = Math.min(Math.max(deg-180,0),180);
                    
                    circleRight.css("transform","rotate("+degRight+"deg)");
                    circleLeft.css("transform","rotate("+degLeft+"deg)");
                }
            });
            
            
            console.log(percent);
            
        });
        $(".circle_graph_cover").addClass("on");
    }		
}
   

//슬라이드
$(".web_slide").slick({
    slidesToShow:4,
    slidesToScroll:1,
    autoplay:true,
    autoplaySpeed:5000,
    responsive:[{
        breakpoint:716, /*화면이 716이 되었을때 보여지는 사진.*/
        settings:{
            slidesToShow:2
        }
    },{
        breakpoint:550, /*화면이550이하가 되었을때 보여지는 사진.*/
        settings:{
            slidesToShow:1
        }
    
    }]
});
//슬라이드
$(".design_slide").slick({
    slidesToShow:4,
    slidesToScroll:1,
    autoplay:true,
    autoplaySpeed:5000,
    responsive:[{
        breakpoint:716, /*화면이 716이 되었을때 보여지는 사진.*/
        settings:{
            slidesToShow:2, 
            slidesToScroll:1,
            autoplay:true,
            autoplaySpeed:5000,
          
           
        }
    },{
        breakpoint:550, /*화면이550이하가 되었을때 보여지는 사진.*/
        settings:{
            slidesToShow:1, 
            slidesToScroll:1,
            autoplay:true,
            autoplaySpeed:5000
        }
    
    }]
});



  //모달(design)
    
    //모달_1


            $(".modal_cover button").on("click",modal_close);
            
            $(".design_slide .slick-slide").on("click",modal_popUp);
                
            function modal_popUp(){
                var mo = $(this).find(".img_click").attr("data-modal");
                
                $(".modal_cover").css("display","none");
                $("."+mo).css("display","block");
                $(".modal").stop().fadeIn();
            
                
                return false;
            }

            function modal_close(){
                $(".modal").stop().fadeOut();
            }


});