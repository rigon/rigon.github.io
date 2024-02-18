// Load Bootstrap JS
import 'bootstrap';
import 'boxicons';
import AOS from 'aos';
import Typed from 'typed.js';
import Isotope from 'isotope-layout';

// Load Styles
import '../scss/main.scss';

/**
 * Easy selector helper function
 */
const select = (el, all = false) => {
    el = el.trim()
    if (all) {
        return [...document.querySelectorAll(el)]
    } else {
        return document.querySelector(el)
    }
}
/**
 * Easy event listener function
 */
const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
        if (all) {
            selectEl.forEach(e => e.addEventListener(type, listener))
        } else {
            selectEl.addEventListener(type, listener)
        }
    }
}
/**
 * Easy on scroll event listener 
 */
const onscroll = (el, listener) => {
  el.addEventListener('scroll', listener)
}


/**
 * Navbar links active state on scroll
 */
let navbarlinks = select('#navbar .scrollto', true)
const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
        if (!navbarlink.hash) return
        let section = select(navbarlink.hash)
        if (!section) return
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
            navbarlink.classList.add('active')
        } else {
            navbarlink.classList.remove('active')
        }
    })
}
window.addEventListener('load', navbarlinksActive)
onscroll(document, navbarlinksActive)

/**
 * Scrolls to an element with header offset
 */
const scrollto = (el) => {
    let elementPos = select(el).offsetTop
    window.scrollTo({
        top: elementPos,
        behavior: 'smooth'
    })
}

/**
 * Back to top button
 */
let backtotop = select('.back-to-top')
if (backtotop) {
    const toggleBacktotop = () => {
        if (window.scrollY > 100) {
            backtotop.classList.add('active')
        } else {
            backtotop.classList.remove('active')
        }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
}

/**
 * Mobile nav toggle
 */
on('click', '.mobile-nav-toggle', function(e) {
    select('body').classList.toggle('mobile-nav-active')
    this.classList.toggle('bx-menu')
    this.classList.toggle('bx-x')
})

/**
 * Scrool with ofset on links with a class name .scrollto
 */
on('click', '.scrollto', function (e) {
    if (select(this.hash)) {
        //e.preventDefault()

        let body = select('body')
        if (body.classList.contains('mobile-nav-active')) {
            body.classList.remove('mobile-nav-active')
            let navbarToggle = select('.mobile-nav-toggle')
            navbarToggle.classList.toggle('bx-menu')
            navbarToggle.classList.toggle('bx-x')
        }
        scrollto(this.hash)
    }
}, true)

/**
 * Scroll with ofset on page load with hash links in the url
 */
window.addEventListener('load', () => {
    if (window.location.hash) {
        if (select(window.location.hash)) {
            scrollto(window.location.hash)
        }
    }
});

/**
 * Hero type effect
 */
const typed = select('.typed')
if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
    });
}

/**
 * Projects isotope and filter
 */
window.addEventListener('load', () => {
    let projectsContainer = select('.projects-container');
    if (projectsContainer) {
        let projectsIsotope = new Isotope(projectsContainer, {
            itemSelector: '.projects-item',
            percentPosition: true,
            masonry: {
              columnWidth: '.grid-sizer'
            }
        });

        let projectsFilters = select('#projects-filters li', true);

        on('click', '#projects-filters li', function (e) {
            e.preventDefault();
            projectsFilters.forEach(function (el) {
                el.classList.remove('filter-active');
            });
            this.classList.add('filter-active');

            projectsIsotope.arrange({
                filter: this.getAttribute('data-filter')
            });
            projectsIsotope.on('arrangeComplete', function () {
                AOS.refresh()
            });
        }, true);
    }

});

/**
 * Animation on scroll
 */
window.addEventListener('load', () => {
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    })
});


// Submit contact form
var contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var msgLoading = select(".contact .php-email-form .loading");
    var msgSent = select(".contact .php-email-form .sent-message");
    var msgError = select(".contact .php-email-form .error-message");

    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: contactForm.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        msgLoading.style.display = "none";
        if (response.ok) {
            msgSent.style.display = "block";
            contactForm.reset();
        } else {
            msgError.style.display = "block";
            response.json().then(data => {
                msgError.innerHTML = Object.hasOwn(data, 'errors') ?
                    data["errors"].map(error => error["message"]).join(", ") :
                    "Oops! There was a problem submitting your form";
            })
        }
    }).catch(error => {
        msgError.innerHTML = "Oops! There was a problem submitting your form";
    });
    msgLoading.style.display = "block";
    msgSent.style.display = "none";
    msgError.style.display = "none";
});
