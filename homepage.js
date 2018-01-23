var div1=document.getElementById("logot");
var div2=document.getElementById("nvgtn");
var div5=document.getElementById("panel");

var ques=[];
ques=localQ();

var currUser=[];
currUser=local1();
if(currUser.length==0){
	alert("You Must Sign In First");
	window.location.assign("login.html");
}
function local1()
{
	if (!sessionStorage.currentuser)
		{
			//default to empty array
			sessionStorage.currentuser= JSON.stringify([]);
		}
	return JSON.parse(sessionStorage.currentuser);
}
function localQ()
{
	if (!localStorage.ques)
		{
			//default to empty array
			localStorage.ques= JSON.stringify([]);
		}
	return JSON.parse(localStorage.ques);
}

var ad=[];
ad=local();

function local()
{
	if (!sessionStorage.currentuser)
		{
			//default to empty array
			sessionStorage.currentuser= JSON.stringify([]);
		}
	return JSON.parse(sessionStorage.currentuser);
}

//delete 
function deletePanel(){
       var child=div5.childNodes;
    for(var i=0;child.length>0;){
             div5.removeChild(child[i]);
}
}	

 var nam=document.createElement("label");
	nam.setAttribute("id","logo");
	nam.setAttribute("style","float:left");
	nam.innerHTML="*$Q$*";
	div1.appendChild(nam);
	
	//log out button
 var butn113=document.createElement("button");
	butn113.setAttribute("id","logt");
	butn113.setAttribute("style","float:right");
	butn113.innerHTML="Logout";
	div1.appendChild(butn113); 
	//logout funtionality
	document.getElementById("logt").addEventListener("click",function(){
		sessionStorage.currentuser = JSON.stringify([]);
		window.location.assign("login.html");
	});

 var name11=document.createElement("label");
	name11.setAttribute("id","nme");
	name11.setAttribute("style","float:right");
	name11.innerHTML="Hi ,"+ad.name;
	div1.appendChild(name11);
	
		var btnques=document.createElement("button");
	btnques.setAttribute("id","ques");
	btnques.innerHTML="Add More Questions";
	btnques.setAttribute("style","width:100px");
	btnques.setAttribute("style","float:right");
	div2.appendChild(btnques);
	btnques.addEventListener("click",function(){
		pnl=document.createElement("iframe");
		pnl.setAttribute("src","addques.html");
		pnl.setAttribute("width","85%");
		pnl.setAttribute("height","85%");
		deletePanel();
		div5.appendChild(pnl);
	});
		
	var btnprdct=document.createElement("button");
	btnprdct.setAttribute("id","ques");
	btnprdct.innerHTML="Questions";
	btnprdct.setAttribute("style","width:100px");
	
	div2.appendChild(btnprdct);
	btnprdct.addEventListener("click",function(event){
		if(ques.length==0){
	alert("No questions Available");
	window.location.assign("home.html");
}else{
		pnl=document.createElement("iframe");
		pnl.setAttribute("src","questions.html");
		pnl.setAttribute("width","85%");
		pnl.setAttribute("height","85%");
		deletePanel();
		div5.appendChild(pnl);
}
	});