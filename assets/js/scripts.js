document.addEventListener('DOMContentLoaded', (event) => {
  var cabecera = document.getElementById('masthead');
  window.onscroll = function () {
    var scroll = window.scrollY;
    if (scroll > 8) {
      cabecera.classList.add('bg-black');
    } else {
      cabecera.classList.remove('bg-black');
    }
  };

  var forms = document.getElementsByClassName('needs-validation');

  var validation = Array.prototype.filter.call(forms, function (form) {
    form.addEventListener('submit', function (event) {
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });
});