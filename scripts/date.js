window.onload = function() {
    // Display the location of the webpage
    document.getElementById("location").innerHTML = "Page Location: " + window.location.href;

    // Display the last modification date
    document.getElementById("last-modified").innerHTML = "Last Modified: " + document.lastModified;
}
