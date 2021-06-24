'use strict'
$(function () {

    // parallax
    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {

        let bg1 = document.querySelector('.intro__parallax-bg1');
        let bg2 = document.querySelector('.image-of-phone__parallax-bg2');

        window.addEventListener('mousemove', function (e) {
            let x = e.clientX / window.innerWidth;
            let y = e.clientY / window.innerHeight;
            bg1.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
            bg2.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
        })
    }
    // parallax end

    // header arrow
    let linkAndArrow = $(".header__arrow, .header__link-last");
    linkAndArrow.on('click', function () {
        $(".header__arrow").toggleClass("open");
        $(".header__sub-item-ul").toggleClass("active");
    });
    $(document).on('click', function (e) {
        if ($(".header__item-last").has(e.target).length === 0) {
            $(".header__arrow").removeClass("open");
            $(".header__sub-item-ul").removeClass("active");
        }
    });
    linkAndArrow.on("mouseover", function () {
        document.documentElement.style.setProperty('--color', 'rgb(119, 0, 255)');
    });
    linkAndArrow.on("mouseout", function () {
        document.documentElement.style.setProperty('--color', 'black');
    });
    // header arrow end

    // which browser
    let Mozila = /firefox/.test(navigator.userAgent.toLowerCase());
    if (Mozila) {
        $(".header__top").addClass("forMozila");
    }
    // which browser end

    // AOS

    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 600, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });

    // AOS end

    // burger menu

    $('.header__burger').on('click', function (event) {
        $('.header__burger, .header__top, .header__download-media').toggleClass('active')
        $("body").toggleClass('lock')
    })

    // burger menu end

    // fix bug cuz of dark reader

    let arrow = $('.arrow-to-top')
    arrow.hide();
    document.addEventListener('scroll', () => {
        return (window.pageYOffset > 850) ? arrow.show() : arrow.hide();
    });

    // fix bug cuz of dark reader end

    // fix bug cuz of window resize

    window.addEventListener('resize', () => {
        if (window.screen.width > 930) {
            $('.header__burger, .header__top, .header__download-media').removeClass('active');
            $("body").removeClass('lock');
        }
    });

    // fix bug cuz of window resize end

    //scroll to top

    let scrolled;
    let timer;

    document.getElementById('arrow-to-top').onclick = function () {
        scrolled = window.pageYOffset;
        scrollToTop();
    }

    function scrollToTop() {
        if (scrolled > 0) {
            window.scrollTo(0,scrolled);
            scrolled = scrolled - 50;
            timer = setTimeout(scrollToTop, 10);
        } else {
            clearTimeout(timer);
            window.scrollTo(0, 0)
        }
    }

    //scroll to top end

});