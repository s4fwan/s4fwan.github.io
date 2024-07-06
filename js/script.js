const text = "Safwan Abrar (s4fwan)";
let index = 0;

function blinkEffect() {
  document.getElementById("blinkingEffect").innerHTML += "&#8205";
  document.getElementById("blinkingEffect").classList.add("blink-caret");
  setTimeout(typeEffect, 2000);
}

function typeEffect() {
  //hide blinking cursor
  document.getElementById("blinkingEffect").style.visibility = "hidden";
  if (index < text.length) {
    document.getElementById("typingEffect").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 75); // adjust typing speed here
  } else {
    document.getElementById("typingEffect").classList.add("blink-caret");
  }
}

window.onload = blinkEffect;
