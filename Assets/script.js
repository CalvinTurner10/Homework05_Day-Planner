//places current date on page
var currentDayEl = $('#currentDay')
currentDayEl.text(moment().format("MMM Do YY"))


var output = ''
timeSlots.forEach((timeSlot, i) => {

    var curnetHour = moment().start0f('hour').format('HH')
    var color = ''
    if (timeSlot.hour == currentHour){
        color = 'present'
    } else if (timeSlot.hour < currentHour) {
        color = 'past'
    } else{
        color = 'future'
    }
    output+=
    <div class ='row'>
        <div class = 'col-lg-1 hour time-block>'
    </div>
})
