function validacaoEmail(){
    if( document.forms[0].email.value=="" 
       || document.forms[0].email.value.indexOf('@')==-1 
         || document.forms[0].email.value.indexOf('.')==-1
         )
        {
          alert("Email Inválido");
          return false;
        }
    else {
        alert("Bem vind@ " + document.getElementById('coloque-email').value + "!")
        return true;
    }

    }