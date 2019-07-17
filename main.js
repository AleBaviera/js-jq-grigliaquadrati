$(document).ready(function(){



console.log('ciao griglia');

$('.quadrato:not(.qui)').click(
function (){
  console.log('click');
  $(this).addClass('green');
});



$('.qui').click(function (){
  console.log('click');
  $(this).addClass('red');
});


});
