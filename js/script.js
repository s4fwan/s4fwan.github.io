const text = "Safwan Abrar (s4fwan)";
let index = 0;

function blinkEffect() {
  document.getElementById("blinkingEffect").innerHTML += "\u2005";
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

function loadParticleConfig() {
  const width = window.innerWidth;

  let configPath = "config/particles-default.json";

  if (width >= 1200) {
    configPath = "config/particles-desktop.json";
  } else if (width <= 300) {
    configPath = "config/particles-mobile.json";
  } 

  particlesJS.load("particles-js", configPath, function () {
    console.log("callback - particles.js config loaded");
  });
}

window.addEventListener("resize", loadParticleConfig);

window.addEventListener('load', blinkEffect);

window.addEventListener('load', loadParticleConfig);
