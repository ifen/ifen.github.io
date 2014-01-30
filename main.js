

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

window.open    = function(){};
window.print   = function(){};
      // Support hover state for mobile.
      if (false) {
        window.ontouchstart = function(){};
      }

