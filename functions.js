function hide (id){
    var el = document.getElementById(id);
    console.info
    if (el) {
        el.style.display = "none"
    }
}

function hideAllPages (){
    var pages = document.querySelectorAll(".page");
    for (var i = 0; i < pages.length; i++) {
        var page = pages[i];
        var id = page.id;
        hide(id);
    }
}

function showPage(pageId) {
    hideAllPages ();
    document.getElementById(pageId). style.display = '';
}

function initMenu() {
    document.addEventListener("click", function(e){
        var link = e.target; 
        if(link.matches("#top-menu-bar a")){
            var id =link.innerHTML.toLowerCase();
            console.info("click", id, link )
            showPage(id)
        }
        
    })
}

initMenu();

showPage("skills");

var skills = [ "HTML", "CSS", "JS"];

var skillsLi =skills.map(function(skill){
    return "<li>" + skill + "</li>";

});


var ul = document.querySelector("#skills ul")
ul.innerHTML = skillsLi.join("");

