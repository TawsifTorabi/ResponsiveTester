	//get viewport
	//http://mydevice.io/devices/
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
	
	
	//http://mydevice.io/devices/
		function mobile(){
			
			var input = document.getElementById('setmobile').value;

			if(input == "1"){
				var frame = document.getElementById('chkframe');
				var print = document.getElementById('setted');
				var name = ('iPhone 5');
				var width = ('320');
				var height = ('568');
				
				frame.height = height;
				frame.width = width;
				print.innerHTML = name;				
			}			
			
			if(input == "2"){
				var frame = document.getElementById('chkframe');
				var print = document.getElementById('setted');
				var name = ('iPhone 6');
				var width = ('375');
				var height = ('667');
				
				frame.height = height;
				frame.width = width;
				print.innerHTML = name;				
			}		
			
			if(input == "3"){
				var frame = document.getElementById('chkframe');
				var print = document.getElementById('setted');
				var name = ('LG G3');
				var width = ('360');
				var height = ('640');
				
				frame.height = height;
				frame.width = width;
				print.innerHTML = name;				
			}		

			if(input == "4"){
				var frame = document.getElementById('chkframe');
				var print = document.getElementById('setted');
				var name = ('LG Optimus G');
				var width = ('384');
				var height = ('640');
				
				frame.height = height;
				frame.width = width;
				print.innerHTML = name;				
			}					
			
			if(input == "5"){
				var frame = document.getElementById('chkframe');
				var print = document.getElementById('setted');
				var name = ('Samsung Galaxy Note');
				var width = ('400');
				var height = ('640');
				
				frame.height = height;
				frame.width = width;
				print.innerHTML = name;				
			}	

			if(input == "6"){
				var frame = document.getElementById('chkframe');
				var print = document.getElementById('setted');
				var name = ('Samsung Galaxy Note 2');
				var width = ('360');
				var height = ('640');
				
				frame.height = height;
				frame.width = width;
				print.innerHTML = name;				
			}	

			if(input == "7"){
				var frame = document.getElementById('chkframe');
				var print = document.getElementById('setted');
				var name = ('Samsung Galaxy S4 mini');
				var width = ('320');
				var height = ('533');
				
				frame.height = height;
				frame.width = width;
				print.innerHTML = name;				
			}		

			if(input == "8"){
				var frame = document.getElementById('chkframe');
				var print = document.getElementById('setted');
				var name = ('HTC One');
				var width = ('360');
				var height = ('640');
				
				frame.height = height;
				frame.width = width;
				print.innerHTML = name;				
			}			
			//input more http://mydevice.io/devices/
			
		
		}




		function tablet(){
			
			var input = document.getElementById('settablet').value;

			if(input == "1"){
				var frame = document.getElementById('chkframe');
				var print = document.getElementById('setted');
				var name = ('iPad Pro');
				var width = ('1024');
				var height = ('1366');
				
				frame.height = height;
				frame.width = width;
				print.innerHTML = name;				
			}			
			
			if(input == "2"){
				var frame = document.getElementById('chkframe');
				var print = document.getElementById('setted');
				var name = ('iPad 3, 4, Air');
				var width = ('768');
				var height = ('1024');
				
				frame.height = height;
				frame.width = width;
				print.innerHTML = name;				
			}		
			
			if(input == "3"){
				var frame = document.getElementById('chkframe');
				var print = document.getElementById('setted');
				var name = ('HTC Nexus 9');
				var width = ('768');
				var height = ('1024');
				
				frame.height = height;
				frame.width = width;
				print.innerHTML = name;				
			}		

			if(input == "4"){
				var frame = document.getElementById('chkframe');
				var print = document.getElementById('setted');
				var name = ('Asus Nexus 7');
				var width = ('600');
				var height = ('960');
				
				frame.height = height;
				frame.width = width;
				print.innerHTML = name;				
			}					
			
			if(input == "5"){
				var frame = document.getElementById('chkframe');
				var print = document.getElementById('setted');
				var name = ('LG G Pad 8.3');
				var width = ('600');
				var height = ('960');
				
				frame.height = height;
				frame.width = width;
				print.innerHTML = name;				
			}	

			if(input == "6"){
				var frame = document.getElementById('chkframe');
				var print = document.getElementById('setted');
				var name = ('Amazon Kindle Fire');
				var width = ('600');
				var height = ('1024');
				
				frame.height = height;
				frame.width = width;
				print.innerHTML = name;				
			}		
			//input more http://mydevice.io/devices/
		}