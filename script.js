//setInterval is executing the checkTime function every 1 second (1000 milliseconds)
var timer = setInterval(checkTime, 1000)
// var timer = setInterval(alert("here i am"), 10000)

function checkTime(){
    let dateTime = new Date()
    $("#currentDay").html(dateTime)
    hourNow = dateTime.getHours()
    let offSet = 0
    if (hourNow > 17){offSet = 8}
    else if (hourNow < 9) {offSet = -8}
    oldHour = hourNow - offSet 
    if (oldHour < hourNow){
       // formatField(hourNow)
}
$(document).ready(function() {
  $('#name').keyup(function() {
    $(this).attr('size', $(this).val().length)
  });
});
}

//Call functions
createDivs()
createLabel()
createInput()
createBtn()

function createDivs () {

  for (i = 9; i < 18; i++) {
    let divs = $(`<div class="row${i}"></div>`);
   $(".container").append(divs);

  }
}

function createLabel () {

  for (i = 9; i < 18; i++) {
    let label = $(`<p class="col-xs-2">${i}</p>`);
    label.addClass("hour")
   $(`.row${i}`).append(label);

  }  
}

function createInput () {

  for (i = 9; i < 18; i++) {
    let input = $(`<input id="textarea" class="col-xs-6">`);
    input.addClass("row")
   $(`.row${i}`).append(input);

  }
}

function createBtn () {

  for (i = 9; i < 18; i++) {
    let button = $(`<button id="btn${i}" class="col-xs-2">`);
    button.addClass("save")
    button.text("Save")
   $(`.row${i}`).append(button);  

  }
}

//for the event listener, add a class/id scope for the use of this

function eventList () {

  addEventListener("click", this, document.getElementById(`btn${i}`))
  

}

// Local Storage


// Formatting (past, present, future)