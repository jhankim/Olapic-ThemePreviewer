$(document).ready(function(){

	$('#widget-list').on('change', function() {
		var widgetInstanceId = $(':selected').data('instance');
		var widgetApikey = $(':selected').attr('data-apikey');

		console.log(widgetInstanceId + ' ' + widgetApikey);

		if ( widgetInstanceId != "--") {

			$('#widget-container-viewport').css('width','auto');
			$('#widget-iframe').attr('src','');
			$('#widget-iframe').attr('src','iframesrc.html?olapicForceRender&data-apiKey='+widgetApikey+'&data-instance='+widgetInstanceId);

	        // fillParam(widgetInstanceId);
		}

	});

	$('.adjust-viewport-btn').on('click', function(){
		adjustViewportSize($(this).val());
	});

	$('.adjust-viewport-btn-custom').on('click', function(){
		adjustViewportSize($('.adjust-viewport-custom').val());
	});
});

function adjustViewportSize(width) {
	if ( width == 'auto' ) {
		$('#widget-container-viewport').css('width','auto');
	} else if ( width == 0 ) {
		return false;
	} else {
		$('#widget-container-viewport').animate({
		    width: width
		});
	}
}


function fillParam(instanceID){
	// var instanceParams = [
	// {
	// 	"hash":"1231bccc246553e98133642e29b19c52", 
	// 	"name":"Carousel A Single",
	// 	"params":"Background, Font Family, Font Color, Header Text, View Gallery Text, Bottom Right Hashtag"
	// },
	// {
	// 	"hash":"08b813cb1088ccfe33e9c71cc0381221", 
	// 	"name":"Carousel B Multi",
	// 	"params":"Background, Font Family, Font Color, Header/Footer Text, See Gallery Text"
	// },
	// {
	// 	"hash":"ee28ac41ca35279486c56ccd5ece79f7", 
	// 	"name":"Carousel C Multi",
	// 	"params":"Background, Font Family, Font Color, Navigation button background color, Bottom first/second line text, Hashtag, View Gallery text/color"
	// },
	// {
	// 	"hash":"e9c61f90eb01af49d0e08bd11fdc8db6", 
	// 	"name":"Filtered Gallery A",
	// 	"params":"Primary background color, Header - Background, Font Family, Font Color, Header - Heading, Header - Subheading, Button colors, Hashtag under upload button, Filter Button colors"
	// },
	// {
	// 	"hash":"c6b37776cc48f90c444d0fd0261b501b", 
	// 	"name":"Gallery A",
	// 	"params":"Header - Heading, Header - Subheading, Header - Subheading 2, Font Family, Font Color, Hashtag above upload button, Upload button text/color, Header - Subheading 3"
	// },
	// {
	// 	"hash":"cdc10ff47ec021aba23d00a54355ed55", 
	// 	"name":"Gallery B",
	// 	"params":"Header - Heading, Hashtag, Font Family, Font Color, Upload button text/color"
	// }];

	// for (var i = 0, l = instanceParams.length; i < l; i++) {
	// 	if (instanceParams[i].hash == instanceID) {
	// 		$('#widget-params').html('');
	// 		console.log(instanceParams[i]);
	// 		var tempParams = instanceParams[i].params.split(', ');
	// 		console.log(tempParams);

	// 		for (var i = 0, l = tempParams.length; i < l; i++) {
	// 			$('#widget-params').append('<li>'+tempParams[i]+'</li>');
	// 		}
			
	// 	}
	// }

}