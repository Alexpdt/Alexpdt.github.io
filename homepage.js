function homePageLoading()
{
	var url = "https://api.blockcypher.com/v1/btc/main";
	var elementID = 'demo';
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	        var myObj = this.responseText;
	        var jsonPretty = JSON.stringify(JSON.parse(myObj),null,2);
	        document.getElementById(elementID).innerHTML = jsonPretty;
	    }
	};
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}