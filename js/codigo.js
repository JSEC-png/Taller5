var nombre, apellido, direccion, usuario, pass, email, tel,label2;
    nombre=document.getElementById("prueba").value;
    direccion=document.getElementById("direccion").value;
    usuario=document.getElementById("usuario").value;
    pass=document.getElementById("pass").value;
    email=document.getElementById("email").value;
    tel=document.getElementById("tel").value;

function validar2(){
    apellido=document.getElementById("apellido").value;
    label2=document.getElementById("label2");

        if (apellido.length > 25){
            label2.innerHTML='Deben ser menos de 25 carácteres';
            label2.style.display= 'block';
        }else{
            label2.style.display= 'none';
        };
  
}

function validar(){
    apellido=document.getElementById("apellido").value;
    label2=document.getElementById("label2");
    if (apellido==""){
        label2.innerHTML='¡Campo vacío!';
        label2.style.display='block';
    }
    else{
        label2.style.display='none';
    };

}


