"use strict";

$(document).ready(function(){
  if ($.session.get('homescreen') == '1'){
    $('#0').html('welcome to my homepage');
    $('#1').html('design|science|technology');
    $('#2').html('i love to code()');
    $('#3').html('experiment');
    $('#4').html('learn');
  }
  else{
    $.session.set("homescreen", 1);
    swapText($('#0').get(0), "welcome to my homepage", 50, function () {
    });
    swapText($('#1').get(0), "design|science|technology", 60, function () {
    });
    swapText($('#2').get(0), "i love to code()", 70, function () {
    });
    swapText($('#3').get(0), "experiment", 80, function () {
    });
    swapText($('#4').get(0), "learn", 50, function () {
    });
  }
});

function swapText(element, targetString, speed, onComplete) {

  var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", ",", "/", ";", ":", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "[", "]", "{", "}", "|", "\'", "?", "\"", "<", ">", "~", "`", " "],
  textLength, _i, text, _tmplen, textCharacters, targetCharacters, alphabetString, pos, k, l;

  if (!onComplete) {
    onComplete = speed;
    speed = 50;
  }

  if (!speed) {
    onComplete = function () {};
    speed      = 50;
  }

  alphabet.sort();
  text = element.innerHTML;

  if (text.length > targetString.length) {

    textLength = text.length;
    _tmplen    = textLength - targetString.length;

    for (k = 0; k < _tmplen; ++k) {
      targetString = targetString+" ";
    }

  } else {

    textLength = targetString.length;
    _tmplen    = textLength - text.length;

    for (l = 0; l < _tmplen; ++l) {
      text = text+" ";
    }

  }

  textCharacters   = text.split("");
  targetCharacters = targetString.split("");
  alphabetString   = alphabet.join("");
  pos = [];

  for (_i = 0; _i < textLength; ++_i) {
    pos[_i] = alphabetString.indexOf(textCharacters[_i]);
  }

  for (_i = 0; _i < textLength; ++_i) {
    textCharacters[_i] = "-";
  }

  element.innerHTML = textCharacters.join("");

  function nextSwap() {

    var _i,
    safeTargetString = targetString.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/ /g,'&nbsp;');

    if (element.innerHTML != safeTargetString) {

      for (_i = 0; _i < textLength; _i++) {

        if (textCharacters[_i] != targetCharacters[_i]) {

          textCharacters[_i] = alphabet[pos[_i]];
          pos[_i]            = pos[_i]+1;

          if (pos[_i] == alphabet.length - 1) {
            pos[_i] = 0;
          }

        }

      }
      
      element.innerHTML = textCharacters.join("").replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/ /g,'&nbsp;');

      setTimeout(nextSwap, speed);

    } else {

      if (onComplete) {
        onComplete();
      }

    }

  }

  nextSwap();

}

