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
    var link = document.querySelector(`#top-menu-bar a[data-page="${activePage}"]`)
    link.classList.remove("active")
}

function showPage(pageId) {
    hidePreviousPage();
    document.getElementById(pageId). style.display = '';
    var link = document.querySelector(`#top-menu-bar a[data-page="${pageId}"]`)
     link.classList.add("active")
    activePage = pageId;
}

function initMenu() {
    document.addEventListener("click", function(e){
        var link = e.target; 
        if(link.matches("#top-menu-bar a")){
            var id =link.getAttribute("data-page");
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
