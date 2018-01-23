var div=document.getElementById("create");

var qu=[];
qu=local();

var opt=[];
opt=localOp()
function local()
{
	if (!localStorage.ques)
		{
			//default to empty array
			localStorage.ques= JSON.stringify([]);
		}
	return JSON.parse(localStorage.ques);
}

function localOp()
{
	if (!localStorage.options)
		{
			//default to empty array
			localStorage.options= JSON.stringify([]);
		}
	return JSON.parse(localStorage.options);
}
//store in browser history
function store(qu)
{
localStorage.ques= JSON.stringify(qu);
}

function storeOp(opt)
{
localStorage.options= JSON.stringify(opt);
}

	//generate "break"
function break1(target){
	var br=document.createElement("br");
	target.appendChild(br);
} 

	//store input values from form in an array 
function addToArray(){
	var objProduct=new Object();
	var ids;
	if(qu.length==0)
		ids=1;
	else
		ids=qu[qu.length-1].id+1;
	objProduct.id=ids;
	objProduct.score=document.getElementById("name1").value;
	objProduct.negative=document.getElementById("ngtv").value;
	objProduct.title=document.getElementById("title").value;
	objProduct.quest=document.getElementById("quest").value;
	objProduct.op1=document.getElementById("option1").value;
	objProduct.op2=document.getElementById("option2").value;
	var child=newdv.childNodes;
	for(var i=1;i<child.length;i++){
		var ob=new Object();
		ob.id=ids;
		if(i%2!=0)
			ob.opt=child[i].innerHTML;
		else
			ob.opt=child[i].innerHTML;
	}
	opt.push(ob);
	storeOp(opt);
	qu.push(objProduct); //push values stored in object in array
	store(qu);  //save array in browser local storage
       		
}	
		

		var Name=document.createElement("label");
		Name.innerHTML="Score";
		div.appendChild(Name);

		break1(div);
		
		var inptName=document.createElement("input");
		inptName.setAttribute("type","text");
		inptName.setAttribute("id","name1");
		inptName.setAttribute("placeholder","Enter Score");
		div.appendChild(inptName);

		break1(div);break1(div);break1(div);

		var Name=document.createElement("label");
		Name.innerHTML="Title";
		div.appendChild(Name);

		break1(div);
		
		var inptName=document.createElement("input");
		inptName.setAttribute("type","text");
		inptName.setAttribute("id","title");
		inptName.setAttribute("placeholder","Enter Title");
		div.appendChild(inptName);

		break1(div);break1(div);break1(div);

		var Desc=document.createElement("label");
		Desc.innerHTML="Negative Marking";
		div.appendChild(Desc);

	
		
		var radioBt=document.createElement("input");
        radioBt.setAttribute("type","checkbox");
		div.appendChild(radioBt);
		radioBt.addEventListener("click",function(){
		var x=document.getElementById("ngtv");
		x.setAttribute("style","visibility:visible");
	});
			var ngtv=document.createElement("input");
			ngtv.setAttribute("style","visibility:hidden");
		ngtv.setAttribute("type","text");
		ngtv.setAttribute("id","ngtv");
		ngtv.setAttribute("value","0");
		ngtv.setAttribute("placeholder","Enter Score");
		div.appendChild(ngtv);

		break1(div);break1(div);break1(div);
		var Price=document.createElement("label");
		Price.innerHTML="Question:";
		div.appendChild(Price);

		break1(div);
		
		var price=document.createElement("textarea");
		 price.setAttribute("type","text");
		 price.setAttribute("id","quest");
		 price.setAttribute("placeholder","Enter Question");
		div.appendChild(price);

		break1(div);break1(div);break1(div);

		var Quantity=document.createElement("label");
		Quantity.innerHTML="Options:";
		div.appendChild(Quantity);

		break1(div);
		
		var newdv=document.createElement("div");
		newdv.setAttribute("id","opt");
		var an=document.createElement("button");
		an.innerHTML="Add More Option";
		an.setAttribute("id","anch");
		newdv.appendChild(an);
		break1(newdv);
		var inptQuantity=document.createElement("input");
		inptQuantity.setAttribute("type","text");
		inptQuantity.setAttribute("id","option1");
		inptQuantity.setAttribute("placeholder","Enter Option");
		newdv.appendChild(inptQuantity);
		var radioB=document.createElement("input");
        radioB.setAttribute("type","checkbox");
		newdv.appendChild(radioB);
		break1(newdv);
		var inptQuantity=document.createElement("input");
		inptQuantity.setAttribute("type","text");
		inptQuantity.setAttribute("id","option2");
		inptQuantity.setAttribute("placeholder","Enter Option");
		newdv.appendChild(inptQuantity);
		var radioB=document.createElement("input");
        radioB.setAttribute("type","checkbox");
		newdv.appendChild(radioB);
		break1(newdv);
		var cnt=2;
		
		an.addEventListener("click",function(){
			cnt++;
			if(cnt<=10){
			var inptQuantity=document.createElement("input");
		inptQuantity.setAttribute("type","text");
		inptQuantity.setAttribute("id","option2");
		inptQuantity.setAttribute("placeholder","Enter Option");
		newdv.appendChild(inptQuantity);
		var radioB=document.createElement("input");
        radioB.setAttribute("type","checkbox");
		newdv.appendChild(radioB);
		var bt=document.createElement("button");
		bt.setAttribute("id","dl");
		bt.innerHTML="Delete";
		newdv.appendChild(bt);
		document.getElementById("dl").addEventListener("click",function(){
					
		});
			}else{
				alert("You can't enter more than 10 options");
			}
			break1(newdv);
		});
		
		div.appendChild(newdv);
		
		break1(div);break1(div);break1(div);
 		var button=document.createElement("Button");
		button.innerHTML="Add Ques";
		div.appendChild(button);
		break1(div);break1(div);
		button.addEventListener("click",function(event){
				addToArray(); //store values to an array
				window.location.assign("questions.html");
		});