 $(document).ready(function() {
     // navigation click actions	
     $('.scroll-link').on('click', function(event){
        event.preventDefault();
        var sectionID = $(this).attr("data-id");
        scrollToID('#' + sectionID, 1500);
     });
});

    //  scroll function
    function scrollToID(id, speed){
        var offSet = 75;
        var targetOffset = $(id).offset().top - offSet;
        $('html,body').animate({scrollTop:targetOffset}, speed);
}