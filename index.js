$(document).ready(function(){

// artificial emotion (A.E.)

function assessSentiment () {
    var emotion = document.getElementById("face");
    if(emotion.checked) {
      $("#smile").addClass("show");
    console.log("just checking");
    }
    if(emotion.checked != true) {
      console.log("nope");
      $("#smile").removeClass("show");
    }
}

};
