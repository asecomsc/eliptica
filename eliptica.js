$(document).ready(function() {
	d = new Date();
	d.setHours(0,0,0,0);
	var miInterval;
	
	$('#btAdd').click( function() {
		miVal = $('#txAdd').text();
		miVal++;
		$('#txAdd').text(miVal);
		if (miVal==$('#pasos').val()) {
			$('#stop').click();
		}
	});
	$('#start').click( function() { 
		miInterval = setInterval(miTimer,1000);
	});
	function miTimer() {
	    d.setSeconds(d.getSeconds()+1);
	    $('#uno').text(d.format("MM:ss"));
	}
	$('#stop').click( function() {
		clearInterval(miInterval);
	});
});