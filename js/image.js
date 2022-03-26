function change_image() {
    var current_img = document.getElementById("image-zavod");
    var current_text = document.getElementById("image-text");
    var new_img;
    var new_text;
    switch(current_img.alt) {
        case "freund":
            new_img = "koudelka";
            new_text = "Český skokan Roman Koudelka";
            break;
        case "koudelka":
            new_img = "velta";
            new_text = "Bronzový Rune Velta z Norska";
            break;
        case "velta":
            new_img = "schlierenzauer";
            new_text = "Stříbrný Rakušan Schlierenzauer";
            break;
        case "schlierenzauer":
            new_img = "freund";
            new_text = "Vítěz závodu Severin Freund z Německa";
            break;
    }
    current_img.alt = new_img;
    current_text.innerHTML = new_text;
    current_img.src = "img/".concat(new_img, ".jpg");
    return;
} 