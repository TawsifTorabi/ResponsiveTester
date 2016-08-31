
	//show and hide adjuster
	function showadjuster(){
		var doc = document.getElementById('adjuster');
		var show = ('display:inline;');
		doc.style = show;

	}	
	function hideadjuster(){
		var doc = document.getElementById('adjuster');
		var hide = ('display:none;');
		doc.style = hide;
	}
	//show and hide adjuster end
		
	//show and hide resizer
	function showresizer(){
		var doc = document.getElementById('resizer');
		var show = ('display:inline;');
		doc.style = show;
	}	
	function hideresizer(){
		var doc = document.getElementById('resizer');
		var hide = ('display:none;');
		doc.style = hide;
	}
	//show and hide resizer end
	
	//reset function
	function reset(){
		var frame = document.getElementById('chkframe');
		var url = document.getElementById('geturl');
		var print = document.getElementById('url');
		var resizer1 = document.getElementById('getwidth');
		var resizer2 = document.getElementById('getheight');
		var reseturl = ('http://blog.grplusbd.net?m=1');
		var resetwidth = ('522');
		var resetheight = ('533');
		frame.src = reseturl;
		frame.width = resetwidth;
		frame.height = resetheight;
		url.value = null ;
		resizer2.value = null ;
		resizer1.value = null ;
		print.innerHTML = reseturl;
	}
	//reset function end
	
	//change URL of iframe
	function chngurl(){
		var frame = document.getElementById('chkframe');
		var url = document.getElementById('geturl').value;
		frame.src = url;
		}
	//change URL of iframe end
	
	
	//change height
		function chngheight(){
		var frame = document.getElementById('chkframe');
		var input = document.getElementById('getheight').value;
		frame.height = input;
		}
	//change height end

	//change width
		function chngwidth(){
		var frame = document.getElementById('chkframe');
		var input = document.getElementById('getwidth').value;
		frame.width = input;
		}
	//change width end
	
	//show and hide about box
	function about(){
		var privacypolicy1 = document.getElementById('aboutdata');
		var privacypolicy2 = ('display: inline;');
		privacypolicy1.style= privacypolicy2;
	}
	function hideabout(){
		var privacypolicy1 = document.getElementById('aboutdata');
		var privacypolicy2 = ('display: none;');
		privacypolicy1.style= privacypolicy2;
	}
	//show and hide about box end	
	
	//show and hide preset
	function preset(){
		var doc = document.getElementById('preset');
		var show = ('display: inline;');
		doc.style= show;
	}
	function hidepreset(){
		var doc = document.getElementById('preset');
		var hide = ('display: none;');
		doc.style= hide;
	}
	//show and hide preset box end
	
	function loaded(){
		var doc = document.getElementById('loader');
		var hide = ('display: none;');
		doc.style= hide;
	}

	

