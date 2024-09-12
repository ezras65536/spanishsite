const sidebar1 = document.getElementById('sidebar'); 

function sidebarn() {
    if (sidebar1.classList.contains('sidebar-inactive') == true) {
        sidebar1.classList.remove('sidebar-inactive');
        sidebar1.classList.add('sidebar-active');
    } else {
        sidebar1.classList.remove('sidebar-active');
        sidebar1.classList.add('sidebar-inactive');
    }   
}