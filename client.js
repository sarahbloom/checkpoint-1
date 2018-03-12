console.log("js");
let numberOfClicks = 0;

$(document).ready(readyNow);

function readyNow(){
  console.log('jQuery');
  $('#generate').on('click', addNewDiv);
}

function addNewDiv(){
  numberOfClicks ++;
  let newButtons = ('<button id ="swap">Swap</button> <button id="delete">Delete</button>');
  $('#container').append('<div class="clicks"><p>' + numberOfClicks + '</p>' + newButtons + '</div>');
  console.log(newButtons);
}
