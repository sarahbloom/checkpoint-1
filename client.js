console.log("js");
let numberOfClicks = 0;

$(document).ready(readyNow);

function readyNow(){
  console.log('jQuery');
  $('#generate').on('click', addNewDiv);
  $('#container').on('click', '.swap', changeColor);
}

function addNewDiv(){
  numberOfClicks ++;
  let newButtons = ('<button class="swap">Swap</button>' + '<button class="delete">Delete</button>');
  $('#container').append('<div class="buttonclicks"><p>' + numberOfClicks + '</p>' + newButtons + '</div>');
  console.log(newButtons);
}

function changeColor(){
  console.log('swapping colors');
  $(this).parent().toggleClass('highlight');
}
