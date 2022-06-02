var resize_document = function () {
    var c = document.getElementById("content");
    if (document.body.clientWidth < 1024) {
        c.style.width = "100%";
    } else {
        c.style.width = (document.getElementById("main").clientWidth - 450) + "px";
    }
}
window.addEventListener("resize", function() {
    resize_document();
});
window.addEventListener("scroll", function() {

});
resize_document();
var s = document.getElementsByClassName("sidebar")[0];
var arr = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
var prev_lvl = 0;
var h = "";
arr.forEach(function(e) {
    var lvl = parseInt(e.tagName[1]);
    if (lvl > prev_lvl) {
        h += "<ul>";
    } else if (lvl < prev_lvl) {
        h += "</ul>";
    }
    h += '<li><a class="nav-link" href="' + e.children[0].href + '">' + e.innerHTML + "</a></li>";
    prev_lvl = lvl;
});
h += "</ul>";
s.innerHTML = h;

var ul = document.createElement("ul");
s.append(ul);