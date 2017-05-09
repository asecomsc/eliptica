$(document).ready(function() {
	d = new Date();
	d.setHours(0,0,0,0);
	var miInterval;
	
	var socket = io();
	socket.on('chat message', function(msg){
	  miVal = $('#txAdd').text();
	  miVal++;
	  $('#txAdd').text(miVal);	
	  if (miVal==$('#pasos').val()) {
		 fin();
	  }	
	  if (miVal==1) {
		 ini();
	  }		  
	});		

	function ini() {
		miInterval = setInterval(miTimer,1000);		
	}	
	function fin() {
		clearInterval(miInterval);
	}	
	function miTimer() {
	    d.setSeconds(d.getSeconds()+1);
	    $('#uno').text(d.format("MM:ss"));
	}
});