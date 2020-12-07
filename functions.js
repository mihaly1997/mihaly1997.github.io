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

function getHTMLSkills(skills) {
    var skillsLi =skills.map(function(skill){
        var endorsements = `<span>&middot; ${skill.endorsements}</span>`;
        return "<li>" + skill.name + endorsements + "</li>";
    
    });
    return skillsLi.join("");
}

function showSkills(skills){
   var html = getHTMLSkills(skills);
    var ul = document.querySelector("#skills ul");
    ul.innerHTML = html;
}
 
fetch("date/skills.json").then(function(r) {
    return r.json();

}).then(function(skills){
    showSkills(skills);
});



