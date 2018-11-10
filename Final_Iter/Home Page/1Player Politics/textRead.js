function LoadFile() {
	var div = document.getElementById("textDiv")
    var oFrame = document.getElementById("frmFile");
    div = oFrame.contentWindow.document.body.childNodes[0].innerHTML;
    while (div.indexOf("\r") >= 0)
        div = div.replace("\r", "");
    div = div.split("\n");
	document.getElementById("q1").innerHTML = div[0]
	document.getElementById("q2").innerHTML = div[1]
	document.getElementById("q3").innerHTML = div[2];
	document.getElementById("q3a").innerHTML = div[3];
	document.getElementById("q3b").innerHTML = div[4];
	document.getElementById("q3c").innerHTML = div[5];
	document.getElementById("q3d").innerHTML = div[6];
	document.getElementById("q4").innerHTML = div[7];
	document.getElementById("q4a").innerHTML = div[8];
	document.getElementById("q4b").innerHTML = div[9];
	document.getElementById("q4c").innerHTML = div[10];
	document.getElementById("q4d").innerHTML = div[11];
	document.getElementById("q5").innerHTML = div[12];
	document.getElementById("q6").innerHTML = div[13];
}