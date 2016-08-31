// keyboard iframe dimention controllers// Using w and + -
//Keyboard Browser DOM
//fb.com/tawsif.torabi
//github.com/TawsifTorabi
//4urTh0H1N
//107 is the keyboard code for "+"
//109 is the keyboard code for "-"
//87 is the keyboard code for "W"
//72 is the keyboard code for "H"
//113 is the keyboard code for "F2"
//187 is the keyboard code for "=", In Some Keyboards, "+" Doesn't Exists. Then It Works with "=" 
//189 is the keyboard code for "-", In Some Keyboards, "Num -" Doesn't Exists. Then It Works with "-" 

var w = false;
var h = false;

document.onkeyup=function(e) {
					if(e.which == 87) w=false;
					if(e.which == 72) h=false;
	}
	
	document.onkeydown=function(e){
					if(e.which == 87) w=true;
					if(e.which == 72) h=true;
					
					//width plus
					if(e.which == 107 && w == true) {
						 incrementvaluewidth();
						 return false;
					}				
					if(e.which == 187 && w == true) {
						 incrementvaluewidth();
						 return false;
					}
					
					
					
					
					//width minus
					if(e.which == 109 && w == true) {
						 decrementvaluewidth();
						 return false;
					}					
					if(e.which == 189 && w == true) {
						 decrementvaluewidth();
						 return false;
					}

					
				
					
					//height plus
					if(e.which == 107 && h == true) {
						 incrementvalueheight();
						 return false;
					}					
					if(e.which == 187 && h == true) {
						 incrementvalueheight();
						 return false;
					}
					
					
					
					
					//height minus
					if(e.which == 109 && h == true) {
						 decrementvalueheight();
						 return false;
					}					
					if(e.which == 189 && h == true) {
						 decrementvalueheight();
						 return false;
					}

					
					
					//help
					if(e.which == 113) {
						 showhelp();
						 return false;
					}
}






