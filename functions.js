let activePage = "home"

function hide (id){
    const el = document.getElementById(id);
    console.info
    if (el) {
        el.style.display = "none"
    }
}

function hidePreviousPage(){
    hide (activePage)
    const link = document.querySelector(`#top-menu-bar a[data-page="${activePage}"]`)
    link.classList.remove("active")
}



function showPage(pageId) {
    hidePreviousPage();
    document.getElementById(pageId).style.display = "";
    const link = document.querySelector(`#top-menu-bar a[data-page="${pageId}"]`);
    link.classList.add("active");
    activePage = pageId;
}

function initMenu() {
    document.addEventListener("click",e => {
        const link = e.target;
        if (link.matches("#top-menu-bar a")) {
            const id = link.getAttribute("data-page");
            showPage(id);
        }
    })
}

initMenu();

showPage(activePage);

function getHTMLSkills(skills) {
    
    return skills.map(skill => 
        `<li class="${skill.endorsements > 9 ? "favorite" : ""}">
            ${skill.name} <span>&middot; ${skill.endorsements}</span>
        </li>`
    ).join("");
}

function showSkills(skills){
    const ul = document.querySelector("#skills ul");
    ul.innerHTML = getHTMLSkills(skills);
}
 
fetch("date/skills.json")
.then(r =>  r.json()
)
.then((skills) =>{
    skills.sort((s1, s2) => 
         s1.endorsements > s2.endorsements ? -1 : 1
    );

    showSkills(skills);
});



