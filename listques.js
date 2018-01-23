var list=document.getElementById("q");
var ques=[];
ques=localQ();

function localQ()
{
	if (!localStorage.ques)
		{
			//default to empty array
			localStorage.ques= JSON.stringify([]);
		}
	return JSON.parse(localStorage.ques);
}

addArry();
//add and show edited product array in dom
function addArry(){
 for(var i=0;i<ques.length;i++){
		var object=new Object();
		object.id=ques[i].id;
		object.title=ques[i].title;
		addToDOM(object);
} 
}

//generate "break"
function break1(target){
	var br=document.createElement("br");
	target.appendChild(br);
} 

//store and show added product in dom
function addToDOM(objProduct){
    var div1=document.createElement("div");
     div1.setAttribute("id",objProduct.id);
	
     var name=document.createElement("label");
     name.setAttribute("id","title");
     name.innerHTML=objProduct.title;
     div1.appendChild(name);

    break1(div1);

  
     var dlt=document.createElement("Button");
     dlt.innerHTML="Delete";
     div1.appendChild(dlt);
	dlt.addEventListener("click",function(event){
		
        });

	var edt=document.createElement("Button");
	edt.innerHTML="Edit";
	div1.appendChild(edt);
	edt.addEventListener("click",function(event){
		var target=event.target.parentNode;
	
		var index=getArrayIndex(parseInt(target.id));
		
		putValuesInDom(index); //
		localStorage.products = JSON.stringify([]);
		store(productArray);
		});
	list.appendChild(div1);
	break1(div1);
	break1(div1);
   
}