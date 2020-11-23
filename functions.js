var activePage = "home"

function hide (id){
    var el = document.getElementById(id);
    console.info
    if (el) {
        el.style.display = "none"
    }
}

function hidePreviousPage(){
    hide (activePage)
}

function showPage(pageId) {
    // hideAllPages ();
    hidePreviousPage();
    document.getElementById(pageId). style.display = '';
    activePage = pageId;
}

function initMenu() {
    document.addEventListener("click", function(e){
        var link = e.target; 
        if(link.matches("#top-menu-bar a")){
            var id =link.innerHTML.toLowerCase();
            showPage(id);
        }
        
    })
}

initMenu();

showPage(activePage);

var skills = [ "HTML", "CSS", "JS"];

var skillsLi =skills.map(function(skill){
    return "<li>" + skill + "</li>";

});


var ul = document.querySelector("#skills ul")
ul.innerHTML = "<li>"+skills[0]+"</li> <li>"+skills[1]+"</li> <li>"+skills[2]+"</li>"
