$(window).scroll(function() {
  if ($(document).scrollTop() != 0) {
    $('nav').addClass('shrink');
    $('nav a img').addClass('shrink-logo');
    $('nav a img').removeClass('img-brand');
  } else {
    $('nav').removeClass('shrink');
    $('nav a img').removeClass('shrink-logo');
    $('nav a img').addClass('img-brand');
  }
});

function validateForm() {
  var name =  document.getElementById('name').value;
  if (name == "") {
      document.querySelector('.status').innerHTML = "Nome não pode estar vazio";
      return false;
  }
  var email =  document.getElementById('email').value;
  if (email == "") {
      document.querySelector('.status').innerHTML = "Email não pode estar vazio";
      return false;
  } else {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(!re.test(email)){
          document.querySelector('.status').innerHTML = "Formato do e-mail inválido";
          return false;
      }
  }
  var subject =  document.getElementById('subject').value;
  if (subject == "") {
      document.querySelector('.status').innerHTML = "Assunto não pode estar vazio";
      return false;
  }
  var message =  document.getElementById('message').value;
  if (message == "") {
      document.querySelector('.status').innerHTML = "Mensagem não pode estar vazio";
      return false;
  }

  document.getElementById('contact-form').submit();

}
