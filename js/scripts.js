
//User Logic
$(document).ready(function(){
  $("form#leap-year").submit(function(event){
    event.preventDefault();
    var inputYear = parseInt($("input#year").val());
    var result = leapYear(inputYear);
    console.log(result);

    $(".year").text(inputYear);

    if (!result) {
     $(".not").text("not");
    } else {
     $(".not").text("");
    }

    $("#result").show();
  });
});

//Business Logic
function leapYear(year){
  if ((year%400 === 0) || (year%100 !== 0) && (year%4 === 0))  {
    return true;
  } else {
    return false;
  }

};
