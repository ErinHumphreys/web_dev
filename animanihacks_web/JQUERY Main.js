$(document).ready(function(){

    $("#flipToSignUp").click(function(){
        $("#main").css("-webkit-animation-name","showSignUp");
        $("#main").css("transform","translate(-50%,-50%) rotateY(180deg)");

        $("#signUpForm").css("-webkit-animation-name","hideSignIn");
        $("#signUpForm").css("transform","translate(-50%,-50%) rotateY(0deg)");
    });


    $("#flipToSignIn").click(function(){
        $("#main").css("-webkit-animation-name","hideSignUp");
        $("#main").css("transform","translate(-50%,-50%) rotateY(0deg)");

        $("#signUpForm").css("-webkit-animation-name","showSignIn");
        $("#signUpForm").css("transform","translate(-50%,-50%) rotateY(180deg)");
    });


    $("#flipToReset").click(function(){
        $("#forgotpassword").css("-webkit-animation-name","hideSignUp");
        $("#forgotpassword").css("transform","translate(-50%,-50%) rotateY(0deg)");

        $("#main").css("-webkit-animation-name","showSignIn");
        $("#main").css("transform","translate(-50%,-50%) rotateY(180deg)");
    });


    $("#flipToApply").click(function(){
      $("#signUpForm").css("-webkit-animation-name","hideSignIn");
      $("#signUpForm").css("transform","translate(-50%,-50%) rotateY(0deg)");

      $("#forgotpassword").css("-webkit-animation-name","showSignIn");
      $("#forgotpassword").css("transform","translate(-50%,-50%) rotateY(180deg)");

    });

});
