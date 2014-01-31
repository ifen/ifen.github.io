

$(document).ready(function(){
  var on = false;
  $(".menu-button").click(function(){
    if(on == false){
      $(".menu-bar").addClass("open");
      on = true;
    } else {
      $(".menu-bar").removeClass("open");
      on = false;
    }
    return false;
  });
});


  //Google Analytics
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-47675301-1', 'ifen.github.io');
  ga('send', 'pageview');

  window.open    = function(){};
  window.print   = function(){};
      // Support hover state for mobile.
      if (false) {
        window.ontouchstart = function(){};
      }

