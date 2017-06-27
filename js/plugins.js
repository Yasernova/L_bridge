$(function(){

  var scrn = document.body.clientHeight;

  var img = 1,
      body = $('body'),
      changeBG = setInterval(function(){
                  setTimeout(showIntro, 1000);
                  body.css({
                    backgroundImage: 'url(images/home-'+ img +'.jpg)',
                    backgroundSize: 'cover'
                  });
                  img++;
                  if(img > 6){img = 1}
                }, 8000);
  var intro = $('.intro');
  intro.css({
    paddingTop: (scrn-intro.height())*0.7,
    paddingBottom: (scrn-intro.height())*0.3
  });
  showIntro();
  function showIntro(){
    intro.animate({
      paddingTop: (scrn-intro.height())*0.5,
      paddingBottom: (scrn-intro.height())*0.5,
      opacity: 1
    },500).delay(6000).animate({
        opacity: 0
    },1000, function(){
      intro.css({
        paddingTop: (scrn-intro.height())*0.7,
        paddingBottom: (scrn-intro.height())*0.3
      });
    });
  }




})
