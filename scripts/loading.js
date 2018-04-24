if (!sessionStorage.alreadyClicked) {
  (function($){

    var camion =$('.camion');
    var body_hidden = $('.contents');
    var depart = $('.head-nav').offset({left:1800});
    var tl = new TimelineLite();
    
    tl.to(camion, 0, {alpha:1});
    tl.to(body_hidden, 0, {alpha:0});
    tl.to(depart, 3.5, {left:0});
    tl.to(body_hidden, 3.5, {alpha:1}, '-=1');
    tl.to(camion, 1.5, {left:-400}, '-=3');
    tl.to(camion, 1.5, {alpha:0}, '-=0.5');
 
  })(jQuery);
  sessionStorage.alreadyClicked = "true";
}

