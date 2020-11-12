
function hide(id){
    // document.getElementById(id). style.display = 'none';
    var el = document.getElementById(id);
    if (el){
        el.style.display= 'none';
    } else{
        console.error("elementul un exista");
    }
}

function showHome () {
    document.getElementById('home'). style.display = '';
    hide('skills');
    hide('languages')
    hide('projects')
}

function showSkills() {
    document.getElementById('skills'). style.display = '';   
    hide('home');
    hide('projects')
    hide('languages')
}

function showProjacts() {
    document.getElementById('projects'). style.display = '';
    hide('home');
    hide('skills')
    hide('languages')
}

function showLanguages() {
    document.getElementById('languages'). style.display = '';
    hide('home');
    hide('projects')
    hide('skills')
    
}
