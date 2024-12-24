function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page-content');
    pages.forEach(page => page.classList.remove('active'));
    
    // Show the selected page
    const page = document.getElementById(pageId);
    page.classList.add('active');

    const menu = document.getElementById(navbarNav);
}

$(document).ready(function() {
    $(".navbar-toggler").click(function() {
        $("#navbarNav").toggleClass("show");
    });
    $('.navbar-nav li').click(function() {
        $("#navbarNav").removeClass("show");
    });
});