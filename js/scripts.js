// //
// // //BUSINESS LOGIC
var aCorb = 0;
var bCorb = 0;
var cCorb = 0;




var checkCourse = function(aCorb,bCorb,cCorb){

var course;
 if (aCorb >= bCorb && aCorb >= cCorb){
  course = "aury";
}else if (bCorb >= aCorb || bCorb >= cCorb){
  course = "bury";
}else {
  course = "cury";
 }
 return course;
};


function newVal(answer){
  if (answer === "a"){
    aCorb += 1;
  }
  if (answer === "b"){
    bCorb += 1;
  }
  if (answer === "c"){
    cCorb += 1;
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
//   if (answerOne === "a" && answerTwo === "a" && answerTh === "a" && answerF === "a" && answerFive === "a"){
//     aCorb= aCorb +1;
// }
// if (answerOne === "b" && answerTwo === "b" && answerTh === "b" && answerF === "b" && answerFive === "b"){
//   bCorb= bCorb +1;
// }
//
// if (answerOne === "c" && answerTwo === "c" && answerTh === "c" && answerF === "c" && answerFive === "c"){
//   cCorb= cCorb +1;
// }
// var question1 = $("input:radio[name=question1]:checked").val();
//   // $("#answer1").text(question1);
//   // $("#answer1").show();
// var question2 = $("input:radio[name=question2]:checked").val();
//     // $("#answer2").text(question2);
//     // $("#answer2").show();
// var question3 = $("input:radio[name=question3]:checked").val();
//       // $("#answer3").text(question3);
//       // $("#answer3").show();
// var question4 = $("input:radio[name=question4]:checked").val();
//         // $("#answer4").text(question4);
//         // $("#answer4").show();
// var question5 = $("input:radio[name=question5]:checked").val();
//           // $("#answer5").text(question5);
//           // $("#answer5").show();
// $("#answer1").text("Your coourse is" + checkCourse (aAnswer,bAnswer,cAnswer) + "!");
// $("#answer1").show();
if(checkCourse (aCorb,bCorb,cCorb) === "aury"){
$('.test').fadeOut();
$('#ruby').fadeIn();
$('#c1').fadeIn();
}

});
});
