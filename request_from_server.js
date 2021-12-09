function sendRequest() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:12345/");
    xhttp.send("get-cookie");
    document.getElementById("response-cookie").innerHTML = xhttp.responseText;
}