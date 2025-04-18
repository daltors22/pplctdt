// Animation on scroll (fade in)
document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        }
      });
    });
  
    document.querySelectorAll("section, .intro, .contact form, .infos").forEach((el) => {
      el.classList.add("invisible");
      observer.observe(el);
    });
  });