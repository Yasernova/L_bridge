$(function(){

  var scrn = document.body.clientHeight,
      win = $(window);

  var img = 1,
      body = $('body.home'),
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
    about.toggleClass('blur');
    contact.toggleClass('blur');
    work.toggleClass('blur');
    blog.toggleClass('blur');
    $(this).toggleClass('slided');
    if($(this).hasClass('slided')){
      menuList.slideDown(500);
    }else{
      menuList.slideUp(0);
    }
    
  })
//================ about & contact ==================
  var about = $('.about'),
      contact = $('.contact'),
      work = $('.work'),
      blog = $('.blog');
  
  function animateContent(page){
    page.css({
    paddingTop: (scrn - page.height())*0.7,
    paddingBottom: (scrn - page.height())*0.3
    });
    var anmtPage = setTimeout(function(){
      page.animate({
        paddingTop: (scrn - page.height()) * 0.5,
        paddingBottom: (scrn - page.height()) * 0.5,
        opacity: 1
      }, 1000)
    } ,500);
  }
  animateContent(about);
  animateContent(contact);
//================ work ===========================
  var galImg = $('.img-cnt div');

  win.on('load resize', function(){
    galImg.height(galImg.width());
  });
//================ Blog ===========================
  var relImg = $('.related .img');

  relImg.height(relImg.width()*0.625);


                  /*Have a nice surfing*/
                  /*Ahmed Yasser*/
                  /*7/7/2017*/
                  /*1st*/
})
