$(document).ready(function(){
// animated box
	$("button").addClass("animated fadeIn");
	
	$("#buttonL").click(function(){
		$("#one").animate({left:"-=50px"},function(){});	
		var a=1;
	});
	$("#buttonU").click(function(){
		$("#one").animate({top:"-=50px",width:"+=5px",height:"+=5px"},function(){});
		var a=1;
	});
	$("#buttonD").click(function(){
		$("#one").animate({top:"+=50px",width:"-=5px",height:"-=5px"},function(){});
		var a=1;
	});
	$("#buttonR").click(function(){
		$("#one").animate({left:"+=50px"},function(){});
		var a=1;
	});

//Sun scroll effect
	$("#ist").click(function(){
		$(".one").hide();
		$("p").removeClass("pHide");
		$(window).scroll(function(){
			$("p").addClass("pHide");
		});
		$("button").removeClass("button");
		$("#sunScroll").removeClass("sunView");

		var sun=$(".sun");
			var win=$(window);

			$(window).on("scroll",function(){
				var top= win.scrollTop()/2;
				sun.css('transform' , 'rotate('  + top + 'deg )');
				
			});
		var b=1;
	});

//banner slide
	$("#C").click(function(){
		$(".sunScroll").hide();
		$(".one").hide();
		$("#sunScroll").hide();
		$("p").addClass("pHide");
		$("#showHideBanner").removeClass("showHideBanner");
		var x=0;
		var y=0;
		var c=1;
		// vriable for the banner
		var banner=$("#banner");
		//initial banner position
		banner.css("backgroundPosition", x + "px" + " " + y +"px");
		//scrool up th background every 20 milesecond
		window.setInterval(function(){
			banner.css("backgroundPosition", x + "px" + " " + y +"px");
			// x--;
			y--;
		},20);
		//HOW I STOP THIS ANIMATION???
	});

// jQuery for the toTop button
	$("#D").click(function(){
		$(".sunScroll").hide();
		$(".one").hide();
		$("#sunScroll").hide();
		$("p").addClass("pHide");
		$("#showHideBanner").hide();
		$("button").removeClass("buttonHide");
		$(".buttonScroll").removeClass("content");
		
	});		
});

//Javascript for the toTop button
window.onscroll = function() {
	scrollFunction()
};
		
function scrollFunction() {
	if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
		document.getElementById("myBtn").style.display = "block";
	} else {
		document.getElementById("myBtn").style.display = "none";
		}
	}
// When the user clicks on the button, scroll to the top of the document
function toTop() {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}