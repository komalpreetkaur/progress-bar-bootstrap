$(document).ready(function() {

	 var href;
	 
	$(".dropdown-menu li a").click(function(){
		var selectText = $(this).text();
        $(this).parents('.dropdown').find('.dropdown-toggle').html(selectText+' <span class="caret"></span>');
        href = $(this).attr('href');
    });

	$(".dropdown-menu li a")[0].click();
    
    $(".btn-default").click(function(){
    	var btnText = $(this).text();
    	var progressbarWidth = $(href).find( "span" ).text().replace("%", "");
    	var newWidth = parseInt(btnText,10) + parseInt(progressbarWidth,10);
    	if(newWidth < 0) {
    		newWidth = 0 ;
    	} else {
			if(newWidth > 100) {
				$(href).addClass("progress-bar-red");
			} else {
				$(href).removeClass("progress-bar-red");
			}
    	}
    	$(href).css("width", newWidth+"%");
    	$(href).attr("data-aria-valuenow", newWidth+"%");
    	$(href).find( "span" ).text(newWidth+"%");
    });
});