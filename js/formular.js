window.addEventListener('load', function() {
    var form = document.getElementById("anketa");
    
    form.addEventListener("submit", function(event) {
        const former = document.querySelectorAll(".marked");
        former.forEach(tag => {
            tag.classList.remove("marked")
        });
        var data= new FormData(form);
        var parent = document.getElementById(data.get("osoba"));
        parent.classList.add("marked");
        
        event.preventDefault();
    });
}, false);