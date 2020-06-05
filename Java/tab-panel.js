$( document ).ready(function() {

    $(".tab-panels .tabs li").click(function(){

        var $panel = $(this).closest(".tab-panels");
        
        //Removes the previous active tab and adds it to the one clicked
        $panel.find(".tabs li.active").removeClass("active");
        $(this).addClass("active");
     
        // using the rel attribute, we can use it to link it to the <div id="#">
       var panelToShow = $(this).attr("rel");
       
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
    });