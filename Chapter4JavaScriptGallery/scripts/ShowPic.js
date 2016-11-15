function showPic(whichpic) {
	var source = whichpic.getAttribute("href");
    var palceholder =   document.getElementById("placeholder");
    palceholder.setAttribute("src",source);
}