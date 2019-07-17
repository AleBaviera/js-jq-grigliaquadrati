$(document).ready(function(){



console.log('ciao griglia');
var elementogreen = document.getElementById('countgreen');
var elementored = document.getElementById('countred');
var countgreen = 0;
var countred = 0;
$('.quadrato:not(.qui)').click(

function (){

  console.log('click');
  if($(this).addClass('green')){
    countgreen++;
    console.log(countgreen);
    // countgreen.addClass('greentext');
    elementogreen.innerHTML = countgreen;
  }


});

$('.qui').click(function (){

  console.log('click');
  if($(this).addClass('red')){
    countred++;
    console.log(countgreen);
    // countred.addClass('redtext');
      elementored.innerHTML = countred;

  }


});


});
