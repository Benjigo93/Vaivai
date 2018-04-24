(function($){

  var camion =$('.camion-right');
  var body_hidden = $('.content');
  var depart = $('.buttons.row').offset({left:-1800});
  var tl = new TimelineLite();

  tl.to(camion, 0, {alpha:1});
  tl.to(depart, 3.5, {left:0});
  tl.to(camion, 1.5, {left:-400}, '-=1.5');
  tl.to(camion, 1.5, {alpha:0}, '-=0.5');

})(jQuery);

/*************************

Mega menu culture JS :

**************************/

document.querySelector(".bouton").onclick = function() {
  if (window.getComputedStyle(document.querySelector('.cultureText')).display=='none'){
    document.querySelector(".cultureText").style.display="block";
    document.querySelector(".cultureText1").style.display="none";
    document.querySelector(".cultureText2").style.display="none";
    document.querySelector(".cultureText3").style.display="none";
    document.querySelector(".cultureText4").style.display="none";
    document.querySelector(".bouton div").style.background="#ed237a";
    document.querySelector(".bouton1 div").style.background="#90BC9A";
    document.querySelector(".bouton2 div").style.background="#90BC9A";
    document.querySelector(".bouton3 div").style.background="#90BC9A";
    document.querySelector(".bouton4 div").style.background="#90BC9A";

  }
}
document.querySelector(".bouton1").onclick = function() {
  if (window.getComputedStyle(document.querySelector('.cultureText1')).display=='none'){
    document.querySelector(".cultureText1").style.display="block";
    document.querySelector(".cultureText2").style.display="none";
    document.querySelector(".cultureText3").style.display="none";
    document.querySelector(".cultureText4").style.display="none";
    document.querySelector(".cultureText").style.display="none";
    document.querySelector(".bouton div").style.background="#90BC9A";
    document.querySelector(".bouton1 div").style.background="#ed237a";
    document.querySelector(".bouton2 div").style.background="#90BC9A";
    document.querySelector(".bouton3 div").style.background="#90BC9A";
    document.querySelector(".bouton4 div").style.background="#90BC9A";
  }
}
document.querySelector(".bouton2").onclick = function() {
  if (window.getComputedStyle(document.querySelector('.cultureText2')).display=='none'){
    document.querySelector(".cultureText2").style.display="block";
    document.querySelector(".cultureText1").style.display="none";
    document.querySelector(".cultureText3").style.display="none";
    document.querySelector(".cultureText4").style.display="none";
    document.querySelector(".cultureText").style.display="none";
    document.querySelector(".bouton div").style.background="#90BC9A";
    document.querySelector(".bouton1 div").style.background="#90BC9A";
    document.querySelector(".bouton2 div").style.background="#ed237a";
    document.querySelector(".bouton3 div").style.background="#90BC9A";
    document.querySelector(".bouton4 div").style.background="#90BC9A";
  }
}
document.querySelector(".bouton3").onclick = function() {
  if (window.getComputedStyle(document.querySelector('.cultureText3')).display=='none'){
    document.querySelector(".cultureText3").style.display="block";
    document.querySelector(".cultureText2").style.display="none";
    document.querySelector(".cultureText1").style.display="none";
    document.querySelector(".cultureText4").style.display="none";
    document.querySelector(".cultureText").style.display="none";
    document.querySelector(".bouton div").style.background="#90BC9A";
    document.querySelector(".bouton1 div").style.background="#90BC9A";
    document.querySelector(".bouton2 div").style.background="#90BC9A";
    document.querySelector(".bouton3 div").style.background="#ed237a";
    document.querySelector(".bouton4 div").style.background="#90BC9A";
  }
}
document.querySelector(".bouton4").onclick = function() {
  if (window.getComputedStyle(document.querySelector('.cultureText4')).display=='none'){
    document.querySelector(".cultureText4").style.display="block";
    document.querySelector(".cultureText2").style.display="none";
    document.querySelector(".cultureText3").style.display="none";
    document.querySelector(".cultureText1").style.display="none";
    document.querySelector(".cultureText").style.display="none";
    document.querySelector(".bouton div").style.background="#90BC9A";
    document.querySelector(".bouton1 div").style.background="#90BC9A";
    document.querySelector(".bouton2 div").style.background="#90BC9A";
    document.querySelector(".bouton3 div").style.background="#90BC9A";
    document.querySelector(".bouton4 div").style.background="#ed237a";
  }
}