function colo()
{
	var col=["a.jpg","b.jpg","c.jpg","d.jpg","e.jpg","f.jpg","g.jpg","h.webp"];
	var len=col.length;
	var ran=Math.random()*len;
	var rannum=Math.round(ran);
	document.getElementById("a").style.backgroundImage="URL(./"+col[rannum]+")";
	var updatethetime=setTimeout(function(){colo()},1000);
}
function colo2()
{
	var col=["a1.jpg","b1.jpg","c1.webp","d1.jpg","e1.jpg","f1.jpg","g1.jpg","h1.jpg"];
	var len=col.length;
	var ran=Math.random()*len;
	var rannum=Math.round(ran);
	document.getElementById("a").style.backgroundImage="URL(./"+col[rannum]+")";
	var updatethetime=setTimeout(function(){colo2()},1000);
}
function colo3()
{
	var col=["a2.webp","b2.webp","c2.webp","d2.webp","e2.webp","f2.webp","g2.webp","h2.webp"];
	var len=col.length;
	var ran=Math.random()*len;
	var rannum=Math.round(ran);
	document.getElementById("a").style.backgroundImage="URL(./"+col[rannum]+")";
	var updatethetime=setTimeout(function(){colo3()},1000);
}
function colo4()
{
	var col=["a3.webp","b3.webp","c3.webp","d3.webp","e3.webp","f3.webp","g3.webp","h3.webp"];
	var len=col.length;
	var ran=Math.random()*len;
	var rannum=Math.round(ran);
	document.getElementById("a").style.backgroundImage="URL(./"+col[rannum]+")";
	var updatethetime=setTimeout(function(){colo4()},1000);
}
function colo5()
{
	var col=["a4.jpg","b4.jpg","c4.jpg","d4.jpg","e4.jpg","f4.jpg","g4.jpg","h4.jpg"];
	var len=col.length;
	var ran=Math.random()*len;
	var rannum=Math.round(ran);
	document.getElementById("a").style.backgroundImage="URL(./"+col[rannum]+")";
	var updatethetime=setTimeout(function(){colo5()},1000);
}
//from here gallary code starts
function imgK(pic,heading,discription)
{
	document.getElementById("bigscreen").removeAttribute("style");
	document.getElementById("imghead").innerHTML=heading;
	document.getElementById("imgpara").innerHTML=discription;
	bigscreen.style.display="flex";
	fullimg.src=pic;
}
function imgV()
{
	document.getElementById("bigscreen").setAttribute("style", "display:none");
	//console.log("calling");
}
