document.addEventListener("DOMContentLoaded", init);

function init(){
  liit__borderradius();
  liit_typography();
  liit__colors();
}



// Generates random number between min and max

function generateRandom(min, max) {
  let difference = max - min;
  let rand = Math.random();
  rand = Math.floor( rand * difference);
  rand = rand + min;
  return rand;
}

function liit__colors(){
  var r = document.querySelector(':root');

  r.style.setProperty('--color__text--one', '#263139');
  r.style.setProperty('--color__accent--one', '#3E8C5B');
  r.style.setProperty('--color__background--one', '#e7ebef');
  
  r.style.setProperty('--color__text--two', '#263139');
  r.style.setProperty('--color__accent--two', '#3E8C5B');
  r.style.setProperty('--color__background--two', '#E4F6EF');

  r.style.setProperty('--color__text--three', '#e7ebef');
  r.style.setProperty('--color__accent--three', '#E4F6EF');
  r.style.setProperty('--color__background--three', '#31724B');

  r.style.setProperty('--color__text--four', '#24593A');
  r.style.setProperty('--color__accent--four', '#3E8C5B');
  r.style.setProperty('--color__background--four', '#E4F6EF');
}

// Calculates the border radius based on tov level. To set tov level <body data-tov="500">

function liit__borderradius() {
  var boxes = document.getElementsByClassName('corners');
  var tov = document.querySelector('body').dataset.tov;
  for (i=0; i<boxes.length; i++){
    var box = boxes[i];
    var box__width = box.offsetWidth;
    var box__height = box.offsetHeight;
    var box__radius = 100 - (parseInt(tov) / 10);
    var box__radius__new;
    if (box__width <= box__height){
      box__radius__new = box__width / (500 / box__radius) + "px";
    } else {
      box__radius__new = box__height / (500 / box__radius) + "px";
    }
    box.style.borderRadius = box__radius__new;
  }
}

function liit_typography(){
  var r = document.querySelector(':root');
  var elegance = document.querySelector('body').dataset.elegance;

  switch(elegance){
    case '900':
      r.style.setProperty('--heading__normal--font', '"Inter Tight", sans-serif');
      r.style.setProperty('--heading__normal--weight', '300');
      r.style.setProperty('--heading__normal--style', 'Regular');

      r.style.setProperty('--heading__highlight--font', '"p22-mackinac-pro", serif');
      r.style.setProperty('--heading__highlight--weight', '400');
      r.style.setProperty('--heading__highlight--style', 'Italic');

      r.style.setProperty('--paragraph__normal--font', '"p22-mackinac-pro", serif');
      r.style.setProperty('--paragraph__normal--weight', '400');
      r.style.setProperty('--paragraph__normal--style', 'Regular');

      r.style.setProperty('--paragraph__highlight--font', '"Inter", sans-serif');
      r.style.setProperty('--paragraph__highlight--weight', '300');
      r.style.setProperty('--paragraph__highlight--style', 'Regular');
    break;

    case '800':
      r.style.setProperty('--heading__normal--font', '"Inter Tight", sans-serif');
      r.style.setProperty('--heading__normal--weight', '400');
      r.style.setProperty('--heading__normal--style', 'Regular');

      r.style.setProperty('--heading__highlight--font', '"p22-mackinac-pro", serif');
      r.style.setProperty('--heading__highlight--weight', '400');
      r.style.setProperty('--heading__highlight--style', 'Italic');

      r.style.setProperty('--paragraph__normal--font', '"Inter", sans-serif');
      r.style.setProperty('--paragraph__normal--weight', '400');
      r.style.setProperty('--paragraph__normal--style', 'Regular');

      r.style.setProperty('--paragraph__highlight--font', '"p22-mackinac-pro", serif');
      r.style.setProperty('--paragraph__highlight--weight', '400');
      r.style.setProperty('--paragraph__highlight--style', 'Italic');
    break;

    case '700':
      r.style.setProperty('--heading__normal--font', '"Inter Tight", sans-serif');
      r.style.setProperty('--heading__normal--weight', '400');
      r.style.setProperty('--heading__normal--style', 'Regular');

      r.style.setProperty('--heading__highlight--font', '"p22-mackinac-pro", serif');
      r.style.setProperty('--heading__highlight--weight', '400');
      r.style.setProperty('--heading__highlight--style', 'Italic');

      r.style.setProperty('--paragraph__normal--font', '"Inter", sans-serif');
      r.style.setProperty('--paragraph__normal--weight', '400');
      r.style.setProperty('--paragraph__normal--style', 'Regular');

      r.style.setProperty('--paragraph__highlight--font', '"p22-mackinac-pro", serif');
      r.style.setProperty('--paragraph__highlight--weight', '400');
      r.style.setProperty('--paragraph__highlight--style', 'Italic');
    break;

    case '600':
      r.style.setProperty('--heading__normal--font', '"Inter Tight", sans-serif');
      r.style.setProperty('--heading__normal--weight', '400');
      r.style.setProperty('--heading__normal--style', 'Regular');

      r.style.setProperty('--heading__highlight--font', '"Inter Tight", sans-serif');
      r.style.setProperty('--heading__highlight--weight', '400');
      r.style.setProperty('--heading__highlight--style', 'Italic');

      r.style.setProperty('--paragraph__normal--font', '"Inter", sans-serif');
      r.style.setProperty('--paragraph__normal--weight', '400');
      r.style.setProperty('--paragraph__normal--style', 'Regular');

      r.style.setProperty('--paragraph__highlight--font', '"Inter", sans-serif');
      r.style.setProperty('--paragraph__highlight--weight', '400');
      r.style.setProperty('--paragraph__highlight--style', 'Italic');
    break;

    case '500':
      r.style.setProperty('--heading__normal--font', '"Inter Tight", sans-serif');
      r.style.setProperty('--heading__normal--weight', '400');
      r.style.setProperty('--heading__normal--style', 'Regular');

      r.style.setProperty('--heading__highlight--font', '"Inter Tight", sans-serif');
      r.style.setProperty('--heading__highlight--weight', '600');
      r.style.setProperty('--heading__highlight--style', 'Regular');

      r.style.setProperty('--paragraph__normal--font', '"Inter", sans-serif');
      r.style.setProperty('--paragraph__normal--weight', '400');
      r.style.setProperty('--paragraph__normal--style', 'Regular');

      r.style.setProperty('--paragraph__highlight--font', '"Inter", sans-serif');
      r.style.setProperty('--paragraph__highlight--weight', '600');
      r.style.setProperty('--paragraph__highlight--style', 'Regular');
    break;

    case '400':
      r.style.setProperty('--heading__normal--font', '"Inter Tight", sans-serif');
      r.style.setProperty('--heading__normal--weight', '700');
      r.style.setProperty('--heading__normal--style', 'Regular');

      r.style.setProperty('--heading__highlight--font', '"Inter Tight", sans-serif');
      r.style.setProperty('--heading__highlight--weight', '700');
      r.style.setProperty('--heading__highlight--style', 'Regular');

      r.style.setProperty('--paragraph__normal--font', '"Inter", sans-serif');
      r.style.setProperty('--paragraph__normal--weight', '400');
      r.style.setProperty('--paragraph__normal--style', 'Regular');

      r.style.setProperty('--paragraph__highlight--font', '"Inter", sans-serif');
      r.style.setProperty('--paragraph__highlight--weight', '700');
      r.style.setProperty('--paragraph__highlight--style', 'Regular');
    break;

    case '300':
      r.style.setProperty('--heading__normal--font', '"Inter Tight", sans-serif');
      r.style.setProperty('--heading__normal--weight', '600');
      r.style.setProperty('--heading__normal--style', 'Regular');

      r.style.setProperty('--heading__highlight--font', '"Inter Tight", sans-serif');
      r.style.setProperty('--heading__highlight--weight', '800');
      r.style.setProperty('--heading__highlight--style', 'Regular');

      r.style.setProperty('--paragraph__normal--font', '"Inter", sans-serif');
      r.style.setProperty('--paragraph__normal--weight', '500');
      r.style.setProperty('--paragraph__normal--style', 'Regular');

      r.style.setProperty('--paragraph__highlight--font', '"Inter", sans-serif');
      r.style.setProperty('--paragraph__highlight--weight', '700');
      r.style.setProperty('--paragraph__highlight--style', 'Regular');
    break;

    case '200':
      r.style.setProperty('--heading__normal--font', '"Inter Tight", sans-serif');
      r.style.setProperty('--heading__normal--weight', '600');
      r.style.setProperty('--heading__normal--style', 'Regular');

      r.style.setProperty('--heading__highlight--font', '"Inter Tight", sans-serif');
      r.style.setProperty('--heading__highlight--weight', '800');
      r.style.setProperty('--heading__highlight--style', 'Regular');

      r.style.setProperty('--paragraph__normal--font', '"Inter", sans-serif');
      r.style.setProperty('--paragraph__normal--weight', '500');
      r.style.setProperty('--paragraph__normal--style', 'Regular');

      r.style.setProperty('--paragraph__highlight--font', '"Inter", sans-serif');
      r.style.setProperty('--paragraph__highlight--weight', '700');
      r.style.setProperty('--paragraph__highlight--style', 'Regular');
    break;

    case '100':
      r.style.setProperty('--heading__normal--font', '"Inter Tight", sans-serif');
      r.style.setProperty('--heading__normal--weight', '600');
      r.style.setProperty('--heading__normal--style', 'Regular');

      r.style.setProperty('--heading__highlight--font', '"Inter Tight", sans-serif');
      r.style.setProperty('--heading__highlight--weight', '800');
      r.style.setProperty('--heading__highlight--style', 'Regular');

      r.style.setProperty('--paragraph__normal--font', '"Inter", sans-serif');
      r.style.setProperty('--paragraph__normal--weight', '500');
      r.style.setProperty('--paragraph__normal--style', 'Regular');

      r.style.setProperty('--paragraph__highlight--font', '"Inter", sans-serif');
      r.style.setProperty('--paragraph__highlight--weight', '700');
      r.style.setProperty('--paragraph__highlight--style', 'Regular');
    break;
  }
}