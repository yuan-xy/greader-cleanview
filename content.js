function fun(){
	try{
		document.getElementById("top-bar").style.display="none";
	}catch(e){}
	try{
		document.getElementById("lhn-add-subscription-section").style.display="none";
	}catch(e){}
	try{
		document.getElementById("viewer-header").style.display="none";
	}catch(e){}
	//alert("ok");
}

window.addEventListener("load", fun, true);
document.addEventListener("load", fun, true);
document.body.addEventListener("load", fun, true);

