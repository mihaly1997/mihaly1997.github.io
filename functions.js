
function hide(id){
    // document.getElementById(id). style.display = 'none';
    var el = document.getElementById(id);
    if (el){
        el.style.display= 'none';
    } else{
        console.error("elementul un exista");
    }
}

function hideAllPages (){
    hide('skills');
    hide('languages');
    hide('projects');
    hide('home');
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

