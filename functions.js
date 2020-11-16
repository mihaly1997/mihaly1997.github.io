function hide (id){
    var el = document.getElementById(id);
    console.info
    if (el) {
        el.style.display = "none"
    }
}

function hideAllPages (){
    var pages = document.querySelectorAll(".pages");
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