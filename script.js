var today = moment();
$("#currentDay").text(moment().format("MMMM ,  Do YYYY"));
var time = moment().format("h:mm:ss a")
console.log(time);
