function vis()
		{
			document.getElementById("pass").removeAttribute("type")
			document.getElementById("img").setAttribute("src", "./visible.jpg")
		}
		function hide()
		{
			document.getElementById("pass").setAttribute("type", "password")
			document.getElementById("img").setAttribute("src", "./hide.jpg")
		}
	function match()
		{
			var user=document.getElementById("user").value
			var pass=document.getElementById("pass").value
			if (user=="vyshnavi16"&&pass=="123456")
			{
				document.getElementById("button").setAttribute("type", "submit")
				document.getElementById("f").setAttribute("action", "./index.html")
				document.getElementById("u").innerHTML=""
				document.getElementById("p").innerHTML=""
				document.getElementById("passdiv").style.borderColor="blue"
				document.getElementById("user").style.borderColor="blue"
			}
			else if (user=="vyshnavi16"&&pass!="123456")
			{
				document.getElementById("passdiv").style.borderColor="red"
				document.getElementById("p").innerHTML="Invalid Password"
				document.getElementById("u").innerHTML=""
				document.getElementById("user").style.borderColor="blue"
				document.getElementById("body").style.backgroundImage="radial-gradient(black, purple, red)"
			}
			else if (user!="vyshnavi16"&&pass=="123456")
			{
				document.getElementById("user").style.borderColor="red"
				document.getElementById("u").innerHTML="Invalid Usename"
				document.getElementById("p").innerHTML=""
				document.getElementById("passdiv").style.borderColor="blue"
				document.getElementById("body").style.backgroundImage="radial-gradient(black, purple, red)"
			}
			else
			{
				document.getElementById("passdiv").style.borderColor="red"
				document.getElementById("user").style.borderColor="red"
				document.getElementById("p").innerHTML="Invalid Password"
				document.getElementById("u").innerHTML="Invalid Usename"
				document.getElementById("body").style.backgroundImage="radial-gradient(black, purple, red)"
			}
		}	
