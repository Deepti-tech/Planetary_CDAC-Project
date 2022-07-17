function nasaRequest() {
    document.getElementById("alert").style.display="block";
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.responseText);

            let title = data["title"];
            let hdurl = data["hdurl"];
            let explanation = data["explanation"];

            let date = data["date"];

            document.getElementById("title").innerHTML = title;
            document.getElementById("img").src = hdurl;
            document.getElementById("explaination").innerHTML = explanation;
        }
    }

    let queryUrl = "https://api.nasa.gov/planetary/apod?";
    let queryKey = "api_key=kIrlqTnfuq7gHKLTX6a6Wg3ZXSGkYowq62qUnu5b";
    let queryFull = queryUrl + queryKey;

    xmlhttp.open("GET", queryFull, true);
    xmlhttp.send();
}

// nasaRequest().onload;
