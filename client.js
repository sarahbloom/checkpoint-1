console.log("js");
let numberOfClicks = 0;

$(document).ready(readyNow);

function readyNow(){
  console.log('jQuery');
  addClickHandlers();
}

function  addClickHandlers(){
  $('#generate').on('click', addNewDiv);
  $('#container').on('click', '.swap', changeColor);
  $('#container').on('click', '.delete', removeDiv);
}

function addNewDiv(){
  numberOfClicks ++;
  let newButtons = ('<button class="swap">Swap</button><button class="delete">Delete</button>');
  $('#container').append('<div class="buttonclicks"></div>');
  $('.buttonclicks').last().append('<p>' + numberOfClicks + '</p>');
  $('.buttonclicks').last().append(newButtons);
}

function changeColor(){
  console.log('swapping colors');
  $(this).parent().toggleClass('highlight');
}

function removeDiv(){
  console.log("removing div");
  $(this).parent().remove();
}
