// Load Bootstrap JS
import 'bootstrap';
import 'boxicons';
import AOS from 'aos';
import Typed from 'typed.js';

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
let contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let elmLoading = select(".contact .php-email-form .loading");
    let elmSent = select(".contact .php-email-form .sent-message");
    let elmError = select(".contact .php-email-form .error-message");
    
    let formData = new FormData(contactForm);
    let method = contactForm.getAttribute("method");
    let action = contactForm.getAttribute("action");
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === xhr.DONE) {
            let elmMsg = (xhr.status === 200 ? elmSent : elmError);
            elmLoading.style.display = "none";
            elmMsg.innerText = xhr.responseText;
            elmMsg.style.display = "block";
            // Hide back the message
            setTimeout(() => elmMsg.style.display = "none", 5000);
        }
    }
    elmLoading.style.display = "block";
    xhr.open(method, action, true);
    xhr.send(formData);
}, false);
