(function($){
  var camion =$('.camion2').offset({left:-120});
  var tl= new TimelineLite();
  
  $('.discocover').mouseover(function(){
  tl.to(camion, 0.4,{left:185});
  })
  
  $('.culture').mouseover(function(){
  tl.to(camion, 0.4,{left:315});
  })

  $('.produit').mouseover(function(){
  tl.to(camion, 0.4,{left:450});
  })
  
  $('.addict').mouseover(function(){
  tl.to(camion, 0.4,{left:585});
  })
  
})(jQuery);