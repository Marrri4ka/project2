$(document).ready(function() {


$(".btn").click(function() {

   $(".test").fadeIn();
   $(".tracks").fadeOut();

});

$(".btn1").click(function(){
var question1 = $("input:radio[name=question1]:checked").val();
  $("#answer1").text(question1);
  $("#answer1").show();

  var question2 = $("input:radio[name=question2]:checked").val();
    $("#answer2").text(question2);
    $("#answer2").show();

    var question3 = $("input:radio[name=question3]:checked").val();
      $("#answer3").text(question3);
      $("#answer3").show();

      var question4 = $("input:radio[name=question4]:checked").val();
        $("#answer4").text(question4);
        $("#answer4").show();


        var question5 = $("input:radio[name=question5]:checked").val();
          $("#answer5").text(question5);
          $("#answer5").show();


});
});
