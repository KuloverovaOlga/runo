//tabs//

let currTub;
document.querySelectorAll('.catalog__tab-item').forEach((tab) => {
  if (tab.classList.contains('_active')) {
    currTub = tab;
  };
  tab.addEventListener('click', () => {
    const id = tab.getAttribute('data-tab');

    const contentList = Array.from(document.querySelectorAll('.catalog__display'));
    const content = contentList.filter((item) => item.getAttribute('data-tab') === id);
    document.querySelector('.catalog__display.active').classList.remove('active');
    content[0].classList.add('active');

    currTub.classList.remove('_active');
    tab.classList.add('_active');
    currTub = tab;
  });
});