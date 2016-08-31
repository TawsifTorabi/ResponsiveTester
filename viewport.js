	//get viewport
		function getviewport(){
			
			var doc = document.getElementById('viewport').value;

			if(doc == "1"){
				var printportname = document.getElementById('portprnt');
				var desktop = document.getElementById('desktop');
				var laptop = document.getElementById('laptop');
				var tablet = document.getElementById('tablet');
				var mobile = document.getElementById('mobile');
				
				var show = ('display:inline;');
				var hide = ('display:none;');
				var name = ('Mobile');
				
				printportname.innerHTML = name;
				
				mobile.style = show;
				tablet.style = hide;
				laptop.style = hide;
				desktop.style = hide;
			}			
			
			if(doc == "2"){
				var printportname = document.getElementById('portprnt');
				var desktop = document.getElementById('desktop');
				var laptop = document.getElementById('laptop');
				var tablet = document.getElementById('tablet');
				var mobile = document.getElementById('mobile');
				
				var show = ('display:inline;');
				var hide = ('display:none;');
				var name = ('Tablet');
				
				printportname.innerHTML = name;
				
				mobile.style = hide;
				tablet.style = show;
				laptop.style = hide;
				desktop.style = hide;
			}
			
			if(doc == "3"){
				var printportname = document.getElementById('portprnt');
				var desktop = document.getElementById('desktop');
				var laptop = document.getElementById('laptop');
				var tablet = document.getElementById('tablet');
				var mobile = document.getElementById('mobile');
				
				var show = ('display:inline;');
				var hide = ('display:none;');
				var name = ('Laptop');
				
				printportname.innerHTML = name;
				
				mobile.style = hide;
				tablet.style = hide;
				laptop.style = show;
				desktop.style = hide;
			}

			if(doc == "4"){
				var printportname = document.getElementById('portprnt');
				var desktop = document.getElementById('desktop');
				var laptop = document.getElementById('laptop');
				var tablet = document.getElementById('tablet');
				var mobile = document.getElementById('mobile');
				
				var show = ('display:inline;');
				var hide = ('display:none;');
				var name = ('Desktop');
				
				printportname.innerHTML = name;
				
				mobile.style = hide;
				tablet.style = hide;
				laptop.style = hide;
				desktop.style = show;
			}
		}
	//get viewport end