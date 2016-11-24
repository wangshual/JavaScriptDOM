function showpic(whichpic) {
	var source = whichpic.getAttribute("herf");
	var placeholder = document.getElementById('placeholder');
	placeholder.setAttribute('src',source);

}