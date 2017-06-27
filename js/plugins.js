$(function(){

  var scrn = document.body.clientHeight;

  var img = 1,
      body = $('body'),
      changeBG = setInterval(function(){
                  showIntro();
                  body.css({
                    backgroundImage: 'url(images/home-'+ img +'.jpg)',
                    backgroundSize: 'cover'
                  });
                  img++;
                  if(img > 6){img = 1}
                }, 9000);
  var intro = $('.intro');
  intro.css({
    paddingTop: (scrn-intro.height())*0.7,
    paddingBottom: (scrn-intro.height())*0.3
  });
  intro.animate({
    paddingTop: (scrn-intro.height())*0.5,
    paddingBottom: (scrn-intro.height())*0.5,
    opacity: 1
  },500);
  function showIntro(){
    intro.delay(1000).animate({
      paddingTop: (scrn-intro.height())*0.5,
      paddingBottom: (scrn-intro.height())*0.5,
      opacity: 1
    },500).delay(5500).animate({
        opacity: 0
    },1000, function(){
      intro.css({
        paddingTop: (scrn-intro.height())*0.7,
        paddingBottom: (scrn-intro.height())*0.3
      });
    });
  }
//================ mob-nav =========================
  var menuBars = $('.fa-bars'),
      menuList = $('.mob-nav ul'),
      mobMenu = $('.mob-nav');

  menuBars.on('click', function(){
    intro.toggleClass('blur');
    menuList.slideToggle(300);
  })



})
