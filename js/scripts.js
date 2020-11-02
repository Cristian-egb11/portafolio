window.onscroll = () => {
  // console.log(window.scrollY);

  let scroll = window.scrollY;

  // Seleccione <div class="header-scroll">
  const headerScroll = document.querySelector('.header-scroll');

  if (scroll > 400) {
    headerScroll.classList.add('activo');
  }else{
    headerScroll.classList.remove('activo');
  }
}

(function() {
     'use strict';
     window.addEventListener('load', function() {
       // Seleccionar el formulario para validar
       var forms = document.getElementsByClassName('needs-validation');
       // Validar cada campo y prevenir que se envie
       var validation = Array.prototype.filter.call(forms, function(form) {
         form.addEventListener('submit', function(event) {
           if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
           } else {
            // Obtener valores del formulario
            var nombre = document.getElementById('nombre').value,
                email = document.getElementById('email').value,
                mensaje = document.getElementById('mensaje').value;
           }
           form.classList.add('was-validated');
         }, false);
       });
     }, false);
   })();