
var btn = document.getElementById("btn");
btn.onclick = function() {
    /* 1. create a XHR object */
    var xhr = null;
    // check the browser to see if it support XHR object
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        // only old IE 5/6 don't support XHR
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    
    /* 2. open() method to initialize the object */
    xhr.open("post", "/xhr", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); // only needed when the request method is 'post'

    /* 3. send() method to send the request to the server */
    xhr.send();

    /* 4. onreadystatechange property to get the return value */
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                console.log(xhr.responseText);
                alert(xhr.responseText);
            }
        }
    };
}

