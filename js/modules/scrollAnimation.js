//Fuction to animate the elements in browser during scroll.
export default function initPage() {
  const section = document.querySelectorAll('[data-anime="scroll"]');
  const windowBreak = window.innerHeight * 0.6;
  section[0].classList.add("ativo");

  function animaScroll() {
    section.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top - windowBreak;
      if (sectionTop < 0) {
        section.classList.add("ativo");
      }
    });
  }

  window.addEventListener("scroll", animaScroll);
}
