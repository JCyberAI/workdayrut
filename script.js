var timer = setInterval(checkTime, 1000)

function checkTime(){
    let dateTime = new Date()
    $("#currentDay").html(dateTime)
    hourNow = dateTime.getHours()
    let offSet = 0
    if (hourNow > 17){offSet = 8}
    else if (hourNow < 9) {offSet = -8}
    hourNow = hourNow - offSet 
    if (oldHour < hourNow){
        formatField(hourNow)
}
$(document).ready(function() {
  $('#name').keyup(function() {
    $(this).attr('size', $(this).val().length)
  });
});

}