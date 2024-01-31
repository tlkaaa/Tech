//nav bar item highlights based on the current page
if (document.title == "Laptop" || document.title == "Desktop" || document.title == "Accessory") {
    document.getElementById("Product").id = "current-page";
} else {
    document.getElementById(document.title).id = "current-page";
}


//select between d-series or g-series desktop
if (document.title == "Desktop") {
    var btn = document.getElementById("product-button");
    document.getElementById("d-desk").style.display = "none";
    btn.onclick = function () { select() };

    function select() {
        if (btn.textContent == "See D-Series") {
            btn.innerHTML = "See G-Series";
            document.getElementById("g-desk").style.display = "none";
            document.getElementById("d-desk").style.display = "flex";
            document.getElementById("desktop-series").innerHTML = "D-Series";

        } else {
            btn.innerHTML = "See D-Series";
            document.getElementById("d-desk").style.display = "none";
            document.getElementById("g-desk").style.display = "flex";
            document.getElementById("desktop-series").innerHTML = "G-Series";
        }
    }
}

//select between d-series or g-series laptop
if (document.title == "Laptop") {
    var btn = document.getElementById("product-button");
    document.getElementById("d-lap").style.display = "none";

    btn.onclick = function () { select() };

    function select() {
        if (btn.textContent == "See D-Series") {
            btn.innerHTML = "See G-Series";
            document.getElementById("g-lap").style.display = "none";
            document.getElementById("d-lap").style.display = "flex";
            document.getElementById("laptop-series").innerHTML = "D-Series";

        } else {
            btn.innerHTML = "See D-Series";
            document.getElementById("d-lap").style.display = "none";
            document.getElementById("g-lap").style.display = "flex";
            document.getElementById("laptop-series").innerHTML = "G-Series";
        }
    }
}

/** mimic the opening of another support window
 * if document.title == "Support" --> // open a empty page in   support from popular support topics 
 * empty() -->  open a empty page in support from buttons
 */
if (document.title == "Support") {
    document.getElementById("faq-links").addEventListener("click", function () {
        window.open("empty.html");
    });

    function empty() {
        window.open("empty.html");
    }
}

// Contact us contact details buttons
if (document.title == ("Contact")) {

    function contactButton(regionId) {
        document.getElementById(regionId).style.display = "block";

        var ids = ["oce-content", "na-content", "eu-content", "sea-content"];
        ids.splice(ids.indexOf(regionId), 1);
        for (let i = 0; i < ids.length; i++) {
            document.getElementById(ids[i]).style.display = "none";
        }
    }

    document.getElementById("oce-butt").addEventListener("click",
        function () {
            contactButton("oce-content");
        });
    document.getElementById("na-butt").addEventListener("click",
        function () {
            contactButton("na-content");
        });
    document.getElementById("sea-butt").addEventListener("click",
        function () {
            contactButton("sea-content");
        });
    document.getElementById("eu-butt").addEventListener("click",
        function () {
            contactButton("eu-content");
        });
}


// hover in pro series  --> trigger text pop up
// var gpTrigger = document.getElementById("gp-trigger-text");
// var dpTrigger = document.getElementById("dp-trigger-text");

// function mO(x) {
//     x.style.display = "block";
//     x.style.animation = "move 1s";
//     x.style.animationFillMode = "forwards";
// }

// document.getElementById("gp-trigger").addEventListener("mouseover", function () {
//     mO(gpTrigger);
// });

// document.getElementById("dp-trigger").addEventListener("mouseover", function () {
//     mO(dpTrigger);
// });


