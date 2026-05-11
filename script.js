const links = document.querySelectorAll('.toc a');
const sections = document.querySelectorAll('main section');

const updateActiveLink = () => {
  let fromTop = window.scrollY + 120;

  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');

    if (fromTop >= top && fromTop < top + height) {
      links.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
};

window.addEventListener('scroll', updateActiveLink);
window.addEventListener('load', updateActiveLink);

links.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    window.scrollTo({ top: target.offsetTop - 24, behavior: 'smooth' });
  });
});
