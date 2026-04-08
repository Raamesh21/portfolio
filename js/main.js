window.addEventListener('load', () => {
    const tl = gsap.timeline();

    tl.to("#progress-bar", { width: "100%", duration: 1.5, ease: "power4.inOut" })
      .to("#loader", { yPercent: -100, duration: 0.8, ease: "expo.inOut" })
      .from(".reveal", { 
          y: 50, 
          opacity: 0, 
          duration: 1, 
          stagger: 0.2, 
          ease: "power4.out" 
      }, "-=0.2");
});

const cursor = document.createElement('div');
cursor.className = 'fixed w-4 h-4 bg-cyan-500 rounded-full pointer-events-none z-[999] mix-blend-difference transition-transform duration-100 ease-out';
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX - 8,
        y: e.clientY - 8,
        duration: 0.1
    });
});

const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
