var nombre, apellido, direccion, usuario, pass, email, tel,labelNombre;
    nombre=document.getElementById("prueba").value;
    direccion=document.getElementById("direccion").value;
    usuario=document.getElementById("usuario").value;
    pass=document.getElementById("pass").value;
    email=document.getElementById("email").value;
    tel=document.getElementById("tel").value;

function validarApellido(){
    apellido=document.getElementById("apellido").value;
    labelApellido=document.getElementById("labelApellido");

        if (apellido.length > 25){
            labelApellido.innerHTML='Deben ser menos de 25 carácteres';
            labelApellido.style.display= 'block';
        }
        else if (apellido==""){
            labelApellido.innerHTML='¡Campo vacío!';
            labelApellido.style.display='block';
        }
        else{
            labelApellido.style.display='none';
        };
  
}

function validarNombre(){
    apellido=document.getElementById("nombre").value;
    labelNombre=document.getElementById("labelNombre");

        if (apellido.length > 25){
            labelNombre.innerHTML='Deben ser menos de 25 carácteres';
            labelNombre.style.display= 'block';
        }
        else if (apellido==""){
            labelNombre.innerHTML='¡Campo vacío!';
            labelNombre.style.display='block';
        }
        else{
            labelNombre.style.display='none';
        };
  
}

function validarId(){
    id=document.getElementById("id").value;
    labelId=document.getElementById("labelId");

        if (id.length > 25){
            labelId.innerHTML='Deben ser menos de 25 carácteres';
            labelId.style.display= 'block';
        }
        else if (id==""){
            labelId.innerHTML='¡Campo vacío!';
            labelId.style.display='block';
        }
        else{
            labelId.style.display='none';
        };
  
}

function validarDireccion(){
    direccion=document.getElementById("direccion").value;
    labelDireccion=document.getElementById("labelDireccion");

        if (direccion.length > 25){
            labelDireccion.innerHTML='Deben ser menos de 25 carácteres';
            labelDireccion.style.display= 'block';
        }
        else if (direccion==""){
            labelDireccion.innerHTML='¡Campo vacío!';
            labelDireccion.style.display='block';
        }
        else{
            labelDireccion.style.display='none';
        };
  
}


function validarUsuario(){
    usuario=document.getElementById("usuario").value;
    labelUsuario=document.getElementById("labelUsuario");

        if (usuario.length > 25){
            labelUsuario.innerHTML='Deben ser menos de 25 carácteres';
            labelUsuario.style.display= 'block';
        }
        else if (usuario==""){
            labelUsuario.innerHTML='¡Campo vacío!';
            labelUsuario.style.display='block';
        }
        else{
            labelUsuario.style.display='none';
        };
  
}

function validarContraseña(){
    contraseña=document.getElementById("contraseña").value;
    labelContraseña=document.getElementById("labelContraseña");

        if (contraseña.length > 25){
            labelContraseña.innerHTML='Deben ser menos de 25 carácteres';
            labelContraseña.style.display= 'block';
        }
        else if (contraseña==""){
            labelContraseña.innerHTML='¡Campo vacío!';
            labelContraseña.style.display='block';
        }
        else{
            labelContraseña.style.display='none';
        };
  
}

function validarEmail(){
    email=document.getElementById("email").value;
    labelEmail=document.getElementById("labelEmail");

        if (email.length > 25){
            labelEmail.innerHTML='Deben ser menos de 25 carácteres';
            labelEmail.style.display= 'block';
        }
        else if (email==""){
            labelEmail.innerHTML='¡Campo vacío!';
            labelEmail.style.display='block';
        }
        else{
            labelEmail.style.display='none';
        };
  
}


function validarTel(){
    tel=document.getElementById("tel").value;
    labelTel=document.getElementById("labelTel");

        if (tel.length > 25){
            labelTel.innerHTML='Deben ser menos de 25 carácteres';
            labelTel.style.display= 'block';
        }
        else if (tel==""){
            labelTel.innerHTML='¡Campo vacío!';
            labelTel.style.display='block';
        }
        else{
            labelTel.style.display='none';
        };
  
}



// function validar(){
//     apellido=document.getElementById("apellido").value;
//     labelNombre=document.getElementById("labelNombre");
//     if (apellido==""){
//         labelNombre.innerHTML='¡Campo vacío!';
//         labelNombre.style.display='block';
//     }
//     else{
//         labelNombre.style.display='none';
//     };

//}


