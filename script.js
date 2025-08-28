 // Mobile menu toggle
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (menuBtn){
      menuBtn.addEventListener('click', () => {
        const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
        menuBtn.setAttribute('aria-expanded', String(!expanded));
        mobileMenu.classList.toggle('hidden');
      });
    }
//   menuBtn.addEventListener("click", () => {
//     mobileMenu.classList.toggle("hidden");
//   });
    // Intersection Observer reveal
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) entry.target.classList.add('is-visible');
      }
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Testimonials carousel (accessible)
    const track = document.querySelector('#slides ul');
    const dots = Array.from(document.querySelectorAll('.dot-btn'));
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');
    let index = 0;

    function updateCarousel(i){
      index = (i + dots.length) % dots.length;
      track.style.transform = `translateX(-${index * 100}%)`;
      dots.forEach((d, di) => {
        d.setAttribute('aria-selected', di === index ? 'true' : 'false');
        d.className = 'dot-btn h-2.5 w-2.5 rounded-full ' + (di === index ? 'bg-slate-500' : 'bg-slate-300');
      });
    }
    dots.forEach((d, di) => d.addEventListener('click', () => updateCarousel(di)));
    if (prev && next){
      prev.addEventListener('click', () => updateCarousel(index - 1));
      next.addEventListener('click', () => updateCarousel(index + 1));
    }

    // Dynamic year
    document.getElementById('year').textContent = new Date().getFullYear();


