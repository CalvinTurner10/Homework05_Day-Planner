//store data in local storage

var hours = [
    {
    "time": "8:00 am",
    "hour": "08",
    "text": ""
},
{
    "time": "9:00 am",
    "hour": "09",
    "text": "" 
},
{
    "time": "10:00 am",
    "hour": "10",
    "text": ""
},
{
    "time": "11:00 am",
    "hour": "11",
    "text": ""
},
{
    "time": "12:00 am",
    "hour": "12",
    "text": ""
},
{
    "time": "1:00 am",
    "hour": "13",
    "text": ""
},
{
    "time": "2:00 am",
    "hour": "14",
    "text": ""
},
{
    "time": "3:00 am",
    "hour": "15",
    "text": ""
},
{
    "time": "4:00 am",
    "hour": "16",
    "text": ""
},
]
if(localStorage.getItem('timeSlots') == null){
    localStorage.setItem('timeSlots', JSON.stringify(hours))
    var timeSlots = JSON.parse(localStorage.getItem('timeSlots'))
}
