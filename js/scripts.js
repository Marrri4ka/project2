// //
// // //BUSINESS LOGIC
var aCount = 0;
var bCount = 0;
var cCount = 0;

var checkCourse = function(aCount,bCount,cCount){
var course;
 if (aCount >= bCount && aCount >= cCount){
  course = "Ruby";
}else if (bCount >= aCount && bCount >= cCount){
  course = "Css";
}else {
  course = "Python";
 }
 return course;
};


function newVal(answer){
  if (answer === "a"){
    aCount += 1;
  }
  if (answer === "b"){
    bCount += 1;
  }
  if (answer === "c"){
    cCount += 1;
  }
};



//UI LOGIC
$(document).ready(function() {
$(".btn").click(function() {

   $(".test").fadeIn();
   $("#ruby").fadeOut();
   $("#php").fadeOut();
   $("#java").fadeOut();
   $("#css").fadeOut();
   $("#c-sharp").fadeOut();
   $(".well").fadeOut();
   $(".btn").fadeOut();
});

$(".btn1").click(function(){
  $(".match").show();

  var answerOne = $("input:radio[name=question1]:checked").val();
  var answerTwo = $("input:radio[name=question2]:checked").val();
  var answerTh = $("input:radio[name=question3]:checked").val();
  var answerF = $("input:radio[name=question4]:checked").val();
  var answerFive = $("input:radio[name=question5]:checked").val();

newVal (answerOne);
newVal (answerTwo);
newVal (answerTh);
newVal (answerF);
newVal (answerFive);

if(checkCourse (aCount,bCount,cCount) === "Python"){
$('.test').fadeOut();
$("#java").fadeIn();
$("#css").fadeIn();
$("#c-sharp").fadeIn();
$("#btn2").fadeIn();

}

if(checkCourse (aCount,bCount,cCount) === "Ruby"){
$('.test').fadeOut();
$("#java").fadeIn();
$("#ruby").fadeIn();
$("#php").fadeIn();
$("#btn2").fadeIn();

}

if(checkCourse (aCount,bCount,cCount) === "Css"){
$('.test').fadeOut();
$("#java").fadeIn();
$("#css").fadeIn();
$("#ruby").fadeIn();
$("#btn2").fadeIn();

}
$("#btn2").click(function(){
  $("#btn2").fadeOut();
  $(".btn1").fadeIn();
  $("#ruby").fadeIn();
  $("#php").fadeIn();
  $("#java").fadeIn();
  $("#css").fadeIn();
  $("#c-sharp").fadeIn();
  $(".well").fadeIn();
  $(".btn").fadeIn();
  $(".match").hide();
});

});
});
