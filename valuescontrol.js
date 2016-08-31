//increase deacrease width	
function incrementvaluewidth()
{
    var value = parseInt(document.getElementById('chkframe').width);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('chkframe').width = value;
	document.getElementById('getwidth').value = value;
}
function decrementvaluewidth()
{
    var value = parseInt(document.getElementById('chkframe').width);
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('chkframe').width = value;
	document.getElementById('getwidth').value = value;
}
//increase deacrease width end	
	
//increase deacrease height	
function incrementvalueheight()
{
    var value = parseInt(document.getElementById('chkframe').height);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('chkframe').height = value;
	document.getElementById('getheight').value = value;
}
function decrementvalueheight()
{
    var value = parseInt(document.getElementById('chkframe').height);
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('chkframe').height = value;
	document.getElementById('getheight').value = value;
}
//increase deacrease width end	
	
	