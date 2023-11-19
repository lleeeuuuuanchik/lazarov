let header =
{
  togggleBurger: function()
  {
    let burger = document.querySelector('.header__burger');
    let burgerOpen = document.querySelector('.header__nav-link--burger.open');
    let burgerClose = document.querySelector('.header__nav-link--burger.close');
    let content = document.querySelector('.content');
    burger.classList.toggle('show');
    burgerOpen.classList.toggle('hide');
    burgerClose.classList.toggle('hide');
    content.classList.toggle('hide');
  },
}