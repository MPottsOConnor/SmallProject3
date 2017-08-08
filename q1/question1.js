$("document").ready(function() {  //question 1 (a)
		
		$("#title-name").css("text-transform", "uppercase");   // question 1(b)
		$("h3").css("font-style", "italic");   //question1(c)

        //question1(d)
        $("#introduction > p").css("font-size", "120%");

        //question1(e)
        $("body").html($("body").html().replace(/\[.*\]/g,''));
        
       //question1(f)
       var additionalInfo = $("#additional").html();
         
        $("#additional").html("Click here to read more");

        $("#additional").click(function(){
            $("#additional").html(additionalInfo);
        });

});

