$(function(){
    var $menu = $('.navbar_menu li');
    var $contents = $('section');
  /*console.log($contents);*/

   $menu.click(function(event){

    var idx = $(this).index();
    var tt = $contents.eq(idx).offset().top;
  console.log(tt);
    $('html,body').animate({scrollTop:tt});
   });

});