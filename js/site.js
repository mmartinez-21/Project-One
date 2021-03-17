// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});

function incompSub(){
  var inName = document.getElementById("nameInput").value;
  var inEmail = document.getElementById("emailInput").value;
  var inDoB = document.getElementById("DoB").value;
  var inCB = document.getElementById("cbInput").value;
  
  if ((inCB == "") || (inEmail == "") || (inName == "") || (inDoB == "")){
    alert("Fill out all the required info to receive Mars Year Round Trips!");
  }
  else {
    alert("Thank you for your membership " + inName + "! We look forward to your travels!");
  }
}
