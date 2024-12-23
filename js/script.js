function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page-content');
    pages.forEach(page => page.classList.remove('active'));
    
    // Show the selected page
    const page = document.getElementById(pageId);
    page.classList.add('active');
}
