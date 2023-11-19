let tarifs =
{
  toggleTarif: function(val)
  {
    let imgs = val.querySelectorAll('.tarifs__content-item-title-img');
    imgs.forEach(element => element.classList.toggle('hide'));

    let content = val.nextElementSibling;
    content.classList.toggle('active');
  },
}