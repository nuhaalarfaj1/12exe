function myDate(){
  var now = new Date();
  var hour = now.getHours();
  var min = now.getMinutes();
  var sec = now.getSeconds();

  var hhmmss = hour + ":" + min + ":" + sec;

  var mo = now.getMonth() + 1;
  var date = now.getDate();
  var year = now.getFullYear() - 2000;

  var ddmmyy = mo + "/" + date + "/" + year;
  document.body.innerText = hhmmss + " | " + ddmmyy;
}
setInterval( myDate, 1000);
$("body").css("background-color", "teal")

