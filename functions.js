
function hideAllPages (){
    var page = document.querySelectorAll(".page");
    for (var i = 0; i < page.length; i++) {
        var page = page[i];
        console.info('i +', i, page [i])
        hide(id)
    }
}

function showHome () {
    hideAllPages ();
    document.getElementById('home'). style.display = '';
}

function showSkills() {
    hideAllPages ();
    document.getElementById('skills'). style.display = '';   
}
``
function showProjacts() {
    hideAllPages ();
    document.getElementById('projects'). style.display = '';
}

function showLanguages() {
    hideAllPages ();
    document.getElementById('languages'). style.display = '';
}

