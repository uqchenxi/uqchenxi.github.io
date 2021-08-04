$(window).scroll(function () {
	if ($(".navbar").offset().top > 10) {
		$(".intro__navbar").addClass("scroll-nav");
	} else {
		$(".intro__navbar").removeClass("scroll-nav");
	}
});


$(document).ready(function() {
    $('.project__filter--item').click(function(e) {
	  e.preventDefault();
      $(".project__item").hide(); //Hide all content
      $(".project__filter li").attr("class", ".project__filter--item"); //Reset id's
      $(this).attr("class", "active Project__filter-item"); // Activate this
      $('.project__item' + $(this).attr('title')).fadeIn(); // Show content for current tab
    });
});