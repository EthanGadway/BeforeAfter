var loadBA=(function(){
var a=function(el){
	var c=document.createElement("div");	
	el.parentNode.insertBefore(c,el);
	el.classList.add("_");
	var b=el.getAttribute("before"),t;
	if (b!=null){
		el.removeAttribute("before");	t=c.appendChild(document.createElement("span"));
	t.innerText=b;
	t.classList.add("before");
	}
	c.appendChild(el);
	var a=el.getAttribute("after");
	if (a!=null){
		el.removeAttribute("after");
		t=c.appendChild(document.createElement("span"));
	t.innerText=a;
	t.classList.add("after");
	}
	c.classList.add("ba");
	c.id=el.id;el.id+="_";
}
return function(d){
	d=d!=null?d:document;
	var q=d.querySelectorAll("[before]"),c;
	for (var i=0;i<q.length;i++){
		c=q[i];
		a(c,0);
	}
	q=d.querySelectorAll("[after]");
	for (var i=0;i<q.length;i++){
		c=q[i];
		a(c,1);
	}
}
})();
