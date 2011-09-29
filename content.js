function fun(){
	try{
		document.getElementById("top-bar").style.display="none";
	}catch(e){}
	try{
		document.getElementById("chrome-header").style.display="none";
	}catch(e){}
	try{
		document.getElementById("viewer-footer").style.display="none";
	}catch(e){}
	//alert("ok");
}

window.addEventListener("load", fun, true);
document.addEventListener("load", fun, true);
document.body.addEventListener("load", fun, true);

