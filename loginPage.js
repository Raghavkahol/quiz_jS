var lg=document.getElementById("form");
var user=[];
user=local1();


function local1()
{
	if (!sessionStorage.currentuser)
		{
			//default to empty array
			sessionStorage.currentuser= JSON.stringify([]);
		}
	return JSON.parse(sessionStorage.currentuser);
}
  //store in browser history
function store(prodcts)
{
		sessionStorage.currentuser = JSON.stringify(prodcts);
}


 var mail=document.createElement("label");
 mail.innerHTML="Email Id";
 lg.appendChild(mail);
 

 var email=document.createElement("input");
 email.setAttribute("id","email");
 email.setAttribute("placeholder","Enter Email Id");
 lg.appendChild(email);
 
  var br=document.createElement("br");
 lg.appendChild(br);
 var br=document.createElement("br");
 lg.appendChild(br);
 
 
  var pswrd=document.createElement("label");
 pswrd.innerHTML="Password"
 lg.appendChild(pswrd);
 
 var pswrdVal=document.createElement("input");
 pswrdVal.setAttribute("id","pswrd");
 pswrdVal.setAttribute("type","password");
 pswrdVal.setAttribute("placeholder","Enter Password");
 lg.appendChild(pswrdVal);
 
   var br=document.createElement("br");
 lg.appendChild(br);
 var br=document.createElement("br");
 lg.appendChild(br);
 
  var log=document.createElement("button");
 log.innerHTML="Login"
 log.setAttribute("id","signin");
 lg.appendChild(log);
 
 var ad=[];
 //login button funtions
  document.getElementById("signin").addEventListener("click",function(){
	  var cnt=0;
	 if(!email.value){
		 alert("Enter EmailId");
		 cnt++;
	 }else if(!pswrdVal.value){
		 if(cnt==0)
		 alert("Enter Password");
	 }else if(email.value=="admin"&&pswrdVal.value=="temp123"){
		 
			 var obj=new Object();
			 obj.email=email.value;
			 obj.name="Raghav";
			 obj.id="1";
			 ad.push(obj);
			 store(obj);
			 window.location.assign("home.html");
		 }else{
			 if(cnt==0)
			 alert("Not a valid Account");
		 }
	 
 });