window.onload=function(){
 height();
 setTimeout(rotate,500);
 setTimeout(nav,1000);
 setTimeout(head,1500);
 setTimeout(img,1500);
 setTimeout(text,1500);
}
function height(){
	var l=document.querySelector('#left');
	var r=document.querySelector('#right');
	l.style.top='0';
	r.style.bottom='0';
}
function rotate(){
	var m=document.querySelector('#middle');
	m.style.transform='rotateY(0)';
}
function nav(){
    var n=document.querySelector('#nav');
    n.style.opacity='1';
}
function head(){
	var he1=document.querySelector('#he1');
	var he2=document.querySelector('#he2');
	he1.style.opacity='1';
	he2.style.opacity='1';
	he1.style.left='0';
	he2.style.left='0';
}
function img(){
    var i=document.querySelector('#img');
    i.style.opacity='1';
    i.style.left='55%'
}
function text(){
	var t=document.querySelector('#text');
	var b=document.querySelector('button');
	t.style.opacity='1';
	t.style.button='10%';
	b.style.top='40px';
}