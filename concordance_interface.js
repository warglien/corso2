var img;
var tex;
var texj;
var texP;
var inp;
var w;


function preload(){
   tex=loadStrings("inferno.txt");
}

function setup() {
  createImg("dante.jpg");
  inp=createInput('syllable');

  inp.position(450,100);
  createP('');
  var rhyme=createButton('Search rhymes');
  rhyme.position(450,125);
  rhyme.style('background','orange');
  rhyme.mousePressed(searchRhyme);
  var word=createButton('Search word');
  word.position(600,125);
  word.style('background','aqua');
  word.mousePressed(searchWord);
  var assonance=createButton('Search assonance');
  assonance.position(750,125);
  assonance.style('background','pink');
  assonance.mousePressed(searchAssonance);
  texj=join(tex,' ');
  }


function searchRhyme(){
   var x=inp.value()+'\\W?$';
   createElement('h3','You searched rhymes for #'+inp.value()+'');
   createElement('h3','*For a new search reload this page*');
   for (var i in tex) {
     if (match(tex[i],x)) {createP(tex[i]);};
   }
}

function searchWord(){
   var x='\\b'+inp.value()+'\\b';
   createElement('h3','You searched for the word '+inp.value());
   createElement('h3','*For a new search reload this page*');
   for (var i in tex) {
     if (match(tex[i],x)) {createP(tex[i]);};
   }
}

function searchAssonance(){
   var x=inp.value();
   createElement('h3','You searched assonances for '+inp.value());
   createElement('h3','*For a new search reload this page*');
   for (var i in tex) {
     if (match(tex[i],x)) {createP(tex[i]);};
   }
}
