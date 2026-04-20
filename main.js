document.addEventListener("DOMContentLoaded", function () {

    // 🔥 TYPED JS
    var typed = new Typed(".text", {
        strings: ["Frontend Developer", "Web Designer", "Full Stack Developer"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });

    // 🔥 SCROLL REVEAL
    ScrollReveal({
        distance: '60px',
        duration: 2000,
        delay: 200,
        reset: true
    });

    ScrollReveal().reveal('.home-content, .heading1', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .services-list, .portfolio-content', { origin: 'bottom' });
    ScrollReveal().reveal('.contact-text, .contact-form', { origin: 'left' });
    ScrollReveal().reveal('.container1', { origin: 'bottom' });
    ScrollReveal().reveal('.services-list div', { interval: 200 });

    // 🔥 PERCENTAGE COUNTER (ONLY WHEN SCROLL)
    const counters = document.querySelectorAll('.percentage');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                const counter = entry.target;
                const target = +counter.getAttribute('data-target');
                let count = 0;

                const update = () => {
                    if(count < target){
                        count++;
                        counter.innerText = count + '%';
                        setTimeout(update, 20);
                    }
                };

                update();
                observer.unobserve(counter);
            }
        });
    });

    counters.forEach(counter => observer.observe(counter));

    // 🔥 TILT EFFECT
    VanillaTilt.init(document.querySelectorAll(".row"), {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.3,
    });

    // 🔥 MODAL
    const rows = document.querySelectorAll(".row");
    const modal = document.getElementById("project-modal");

    const modalTitle = document.getElementById("modal-title");
    const modalDesc = document.getElementById("modal-desc");
    const modalImg = document.getElementById("modal-img");
    const githubLink = document.getElementById("github-link");
    const liveLink = document.getElementById("live-link");

    const closeBtn = document.querySelector(".close-btn");

    rows.forEach(row => {
        row.addEventListener("click", () => {
            modal.style.display = "block";

            modalTitle.innerText = row.dataset.title;
            modalDesc.innerText = row.dataset.desc;
            modalImg.src = row.dataset.img;

            githubLink.href = row.dataset.github;
            liveLink.href = row.dataset.live;
        });
    });

    closeBtn.onclick = () => modal.style.display = "none";

    window.onclick = (e) => {
        if(e.target == modal){
            modal.style.display = "none";
        }
    };

});
