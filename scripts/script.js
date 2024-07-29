

//top menu function
document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.getElementById('menu-toggle');
    var menu = document.getElementById('menu');

    // event listener for each menu 
    var menuItems = menu.querySelectorAll('a');
    menuItems.forEach(function(item) {
        item.addEventListener('click', function() {
            // closes the menu after the item selection 
            menu.classList.remove('open');
        });
    });

    // event listener for each hamburguer menu icon 
    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('open');
    });
});

function switchToEnglish() {
    // Hide Portuguese content
    document.getElementById('content-pt').style.display = 'none';
    // Show English content
    document.getElementById('content-en').style.display = 'block';
}

function switchToPortuguese() {
    // Hide English content
    document.getElementById('content-en').style.display = 'none';
    // Show Portuguese content
    document.getElementById('content-pt').style.display = 'block';
}

// Default language setting on page load
window.onload = function() {
    // Set default to Portuguese
    document.getElementById('content-pt').style.display = 'block';
    document.getElementById('content-en').style.display = 'none';
};

//scroll to specific section
function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth'
        });
    }
}
//scroll to internal links 
document.querySelectorAll('.top-menu a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const sectionId = this.getAttribute('href');
        
        //if home is target, scroll to top 
        if (sectionId !== '#home') {
            document.querySelector(sectionId).scrollIntoView({
                behavior: 'smooth'
            });
        } else {
            
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    });
});
