/* Ширина вьюпорта */
let windowWidth = document.documentElement.clientWidth;

if (windowWidth < 1024) {
    let filterButton = document.querySelector(".catalog-filters__button");

    if (filterButton) {
        filterButton.addEventListener('click', () => {
            let filter = document.querySelector('.catalog-filters__form');
            filter.classList.toggle("catalog-filters__form--opened");
            filterButton.classList.toggle("catalog-filters__button--opened");
        });
    }
}

if (windowWidth < 1200) {
    /*Открытие/закрытие меню в header*/
    let menuButton = document.querySelector(".burger-button");

    if (menuButton) {
        menuButton.addEventListener('click', () => {
            let menu = document.querySelector('.main-nav');  
            menu.classList.toggle("main-nav--closed");
            menu.classList.toggle("main-nav--opened");
        });
    }


    /*Действия при клике на пункт меню*/
    const menuLinks = document.querySelectorAll('.main-nav .site-nav a')
    if (menuLinks.length > 0) {
        menuLinks.forEach(menuLink => {
            menuLink.addEventListener("click", onMenuLinkClick);
        });

        function onMenuLinkClick(e) {
            const menuLink = e.target;
            if (menu.classList.contains('main-nav--opened')) {
                menu.classList.toggle("main-nav--closed");
                menu.classList.toggle("main-nav--opened");
            }
        }
    }
}

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();