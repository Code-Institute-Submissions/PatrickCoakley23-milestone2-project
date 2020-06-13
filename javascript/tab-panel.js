$( document ).ready(function() {

    $(".tab-panels .list-group-horizontal li").click(function(){

        var $panel = $(this).closest(".tab-panels");
        
        //Removes the previous active tab and adds it to the one clicked
        $panel.find(".list-group-horizontal li.active").removeClass("active");
        $(this).addClass("active");
     
        // using the rel attribute, we can use it to link it to the <div id="#">
       var panelToShow = $(this).attr("data-val");
       
        //what ever location eg(hotel, bar etc) is active, slide it up
       $panel.find(".locations.active").slideUp(300, showNextPanel);

       //show next location 
       function showNextPanel() {
           $(this).removeClass("active");

           $("#"+panelToShow).slideDown(300, function() {
           $(this).addClass("active");
           });
    }
    });

    setInterval(function() {
        $("#hero-image-slider .hero-slides").animate({"margin-left": "-=1000px"},1000);

    }, 5000);


    



    });