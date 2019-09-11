function googleSearch() {
    var input = document.getElementById("searchbar").value;
    if (input == "" || input == "null" || input == "undefined") {
        console.log("No Input found")
    } else {
        var url = "https://www.google.com/search?q=" + input;
        window.location.replace(url);
    }
}