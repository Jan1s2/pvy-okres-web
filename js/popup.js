window.addEventListener('load', function() {
    var form = document.getElementById("searchbox");
    
    form.addEventListener("submit", function(event) {
        var data= new FormData(form);
        alert(data.get("text"));
        event.preventDefault();
    });
}, false);