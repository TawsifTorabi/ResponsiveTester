	//***********************************************************************
	//**************************************************Print all meta data
	//***********************************************************************
	//coded by 4urTh0H1N fb.com/tawsif.torabi  *********************
	//***********************************************************************
	function printurl(){
		var frameurl = document.getElementById('chkframe').src;
		document.getElementById('urlprnt').innerHTML = frameurl;
		setTimeout("printurl()",200)
	}
	
		function printdim(){
		var framewidth = document.getElementById('chkframe').width;
		var frameheight = document.getElementById('chkframe').height;
		var dim = "<span>" + framewidth +" px × " + frameheight + " px</span>"
		document.getElementById('dim').innerHTML = dim;
		document.getElementById('dim2').innerHTML = dim;
		setTimeout("printdim()",200)
	}
	
	//***********************************************************************
	//*******************************************END Print all meta data
	//***********************************************************************
