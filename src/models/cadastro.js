function validarCPF(cpf){
    if(cpf.length !== 11){
      return {valido:false, texto:"CPF deve ter 11 digitos."}
    }else{
      return {valido:true, texto:""}
    }
};

function validarSenha(senha){
    if(senha.length < 8 || senha.length > 18){
      return {valido:false, texto:"Senha deve conter de 8 a 18 dígitos."}
    }else{
      return {valido:true, texto:""}
    }
};

export { validarCPF, validarSenha };  