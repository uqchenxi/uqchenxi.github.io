
$(document).ready(function() {

    // Adding a "JavaScript is Enabled" Body Class

    $("body").addClass("js");

    
    // Avoid the Repeated Sumbission

    if(name != "") {
        $("#login-page").addClass("show-off");
        $("body").addClass("show-off");
    }  


    // Login Page Submission

    $(".submit button" ).click(function(event) {
        
        name = $("#name").val();
        var complete = false;
        var nameLength = name.length;

        if (name != "" && nameLength <= 20) {
            complete = true;
            
            $("body").addClass("show-off");
            $(".name").html(name);
            $("#site-tag-line").addClass("message-popup");
        }

        if (name != "" && nameLength > 20) {
            $("#length-error").addClass("showup");
        }

        else if(name == "") {
            $("#name").addClass("error").parent().parent().find("label").addClass("error");
        }

        

        event.preventDefault();
    });


    // Diaglog Box From Winnie

    $(".message a, #Winnie img").click(function(event) {
        $("#site-tag-line").toggleClass("message-popup");
        event.preventDefault();
    });


    // The Button Guide to the Next Page

    $("#continue-bee").click(function(event) {
        $(location).attr("href","honey.html");
        event.preventDefault();
    });

    $("#continue-honey").click(function(event) {
        $(location).attr("href","quiz.html");
        event.preventDefault();
    });

    $("#continue-harvest").click(function(event) {
        $(location).attr("href","honeyextractor.html");
        event.preventDefault();
    });

    $("#continue-extractor").click(function(event) {
        $(location).attr("href","bee.html");
        event.preventDefault();
    });

    $("#continue-beekeeping").click(function(event) {
        $(location).attr("href","feeders.html");
        event.preventDefault();
    });

    $("#continue-feeders").click(function(event) {
        $(location).attr("href","hive.html");
        event.preventDefault();
    });
    
    $(".readmore-button").click(function(event) {
        $(this).parent().parent().addClass("readmore-content");
        event.preventDefault();
    });


    // Quiz Submisson & Answer Check

    $("#submit-quiz").click(function(event) {
        var score_count;
        var quiz_answer1;
        var quiz_answer2;
        var quiz_answer3;
        
        score_count = 0;
        quiz_answer1 = $("input[name=quiz1]:checked").val();
        quiz_answer2 = $("input[name=quiz2]:checked").val();
        quiz_answer3 = $("input[name=quiz3]:checked").val();

        if (quiz_answer1 == "A") {
            score_count += 1;
        }

        if (quiz_answer2 == "A") {
            score_count += 1;
        }

        if (quiz_answer3 == "B") {
            score_count +=1;
        }
        
        $("#feedback-page").toggleClass("showup");
        $(".name").html(name);
        $(".score").html(score_count);

        event.preventDefault();
    });


    // Switch of Hint on Quiz Page

    $(".hint-button").click(function(event) {
        $(this).parent().find("figure").toggleClass("show-up");
        event.preventDefault();
    });


    // Switch of Feedback Page

    $("#finish-quiz").click(function(event) {
        $("#feedback-page").toggleClass("showup");
        event.preventDefault();
    });


    // Slide Show on Honey Harvest Page

    $("#step1-photo").click(function(event) {
        $("#step1").toggleClass("popup");
        event.preventDefault();
    })

    $("#step2-photo").click(function(event) {
        $("#step2").toggleClass("popup");
        event.preventDefault();
    })

    $("#step3-photo").click(function(event) {
        $("#step3").toggleClass("popup");
        event.preventDefault();
    })

    $("#step4-photo").click(function(event) {
        $("#step4").toggleClass("popup");
        event.preventDefault();
    })

    $(".step-close").click(function(event) {
        $(this).parent().toggleClass("popup");
        event.preventDefault();
    });
    

    // Masks on Bee Page

    $("#feeder").mouseover(function() {
        $(".beekeeper-mask").show();
    });

    $("#feeder").mouseout(function() {
        $(".beekeeper-mask").hide();
    });

    $("#hive").mouseover(function() {
        $(".hive-mask").show();
    });

    $("#hive").mouseout(function() {
        $(".hive-mask").hide();
    });

    $("#queenbee").mouseover(function() {
        $(".queenbee-mask").show();
    });

    $("#queenbee").mouseout(function() {
        $(".queenbee-mask").hide();
    });

    $("#venom").mouseover(function() {
        $(".venom-mask").show();
    });

    $("#venom").mouseout(function() {
        $(".venom-mask").hide();
    });

    $("#workerbee").mouseover(function() {
        $(".workerbee-mask").show();
    });

    $("#workerbee").mouseout(function() {
        $(".workerbee-mask").hide();
    });

});
