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
    id=id.toString();
    p=id.match(/\./);
        if (id.length > 25){
            labelId.innerHTML='Deben ser menos de 25 carácteres';
            labelId.style.display= 'block';
        }
        else if (id==""){
            labelId.innerHTML='¡Campo vacío!';
            labelId.style.display='block';
        }else if(p!=null){
            labelId.innerHTML='Solo se aceptan números enteros';
            labelId.style.display='block';
        }        else{
            labelId.style.display='none';
        };
  
}

function validarDireccion(){
    direccion=document.getElementById("direccion").value;
    labelDireccion=document.getElementById("labelDireccion");

    requisitos1=['cll','cra','av','anv','trans'];

    var validado=validarRequisitos(direccion,requisitos1,1);



        if (direccion.length > 25){
            labelDireccion.innerHTML='Deben ser menos de 25 carácteres';
            labelDireccion.style.display= 'block';
        }
        else if (direccion==""){
            labelDireccion.innerHTML='¡Campo vacío!';
            labelDireccion.style.display='block';
        }
        else if(validado==false)
        {
            labelDireccion.innerHTML='La dirección debe empezar por "cll","cra","av","anv" o "trans"';
            labelDireccion.style.display='block';

        }
        else{
            labelDireccion.style.display='none';
        };
  
}


function validarRequisitos(palabra,caracter,modo)
{
var validado1;

for(var i=0; i<=caracter.length-1;i++ ){

    var res = palabra.match(caracter[i]);
    
    
    if(res != null)
    {
        validado=true;
    }
    else{
        validado = false;
    };

    if(modo == 1)
    {
        validado1 = validado1||validado;
    }

    else
    {
        if(validado1 == null)
        {
            validado1 = validado && validado;
        }
        else{
            validado1=validado1 && validado;
        }
        
    }


}

validado=validado1;
return validado1;
}


function validarUsuario(){
    usuario=document.getElementById("usuario").value;
    labelUsuario=document.getElementById("labelUsuario");
    res=usuario.match(/[!#$%&/()=?¡¿*-+:;.,@|·ºª¬><-_']/);
        if (usuario.length > 25){
            labelUsuario.innerHTML='Deben ser menos de 25 carácteres';
            labelUsuario.style.display= 'block';
        }
        else if (usuario==""){
            labelUsuario.innerHTML='¡Campo vacío!';
            labelUsuario.style.display='block';
        }else if (res!=null){
            labelUsuario.innerHTML='Solo se aceptan carácteres alfanúmericos';
            labelUsuario.style.display='block';
        }
        else{
            labelUsuario.style.display='none';
        };
  
}

function validarContrasena(){
    contrasena=document.getElementById("contrasena").value;
    labelContrasena=document.getElementById("labelContrasena");

    requisitos=['#','%','/','&'];
    validado=validarRequisitos(contrasena,requisitos,2);
    val=UpLow(contrasena);
    vali=num(contrasena);

        if (contrasena.length > 25){
            labelContrasena.innerHTML='Deben ser menos de 25 carácteres';
            labelContrasena.style.display= 'block';
        }
        else if (contrasena==""){
            labelContrasena.innerHTML='¡Campo vacío!';
            labelContrasena.style.display='block';
        }
        else if(validado==false && val[1]==false && vali==false)
        {
            labelContrasena.innerHTML='La contraseña debe tener mayúsculas, números y los caracteres "#","%","/" y "&"';
            labelContrasena.style.display='block';

        }else if(validado==false && val[0]==false && vali==false){

            labelContrasena.innerHTML='La contraseña debe tener minúsculas, números y los caracteres "#","%","/" y "&"';
            labelContrasena.style.display='block';

        }
        else if(val[0]==false && vali==false){
            
            labelContrasena.innerHTML='La contraseña debe tener minúsculas y números';
            labelContrasena.style.display='block';

        }
        else if(val[1]==false && vali==false){
            
            labelContrasena.innerHTML='La contraseña debe tener mayúsculas y números';
            labelContrasena.style.display='block';

        }else if(validado==false && vali==false){
            
            labelContrasena.innerHTML='La contraseña debe tener números y los caracteres "#","%","/" y "&"';
            labelContrasena.style.display='block';

        }else if(validado==false && val[0]==false){
            
            labelContrasena.innerHTML='La contraseña debe tener minúsculas y los caracteres "#","%","/" y "&"';
            labelContrasena.style.display='block';

        }
        else if(validado==false && val[1]==false){
            
            labelContrasena.innerHTML='La contraseña debe tener mayúsculas y los caracteres "#","%","/" y "&"';
            labelContrasena.style.display='block';

        }
        else if(vali==false){
            
            labelContrasena.innerHTML='La contraseña debe tener números';
            labelContrasena.style.display='block';

        }else if(val[1]==false){
            labelContrasena.innerHTML='La contraseña debe contener mayúsculas';
            labelContrasena.style.display='block';
        }
        else if(val[0]==false){
            labelContrasena.innerHTML='La contraseña debe contener minúsculas';
            labelContrasena.style.display='block';

        }else if(validado==false){
            labelContrasena.innerHTML='La contraseña debe los caracteres "#","%","/" y "&"';
            labelContrasena.style.display='block';

        }
        else{
            labelContrasena.style.display='none';
        };
  
}

function UpLow(palabra){
    str=palabra;
    val1=false;
    val2=false;
    for(var i=0; i<=palabra.length-1;i++ ){
        if (str.charAt(i).toUpperCase() != palabra.charAt(i))
        {
            val1=true;
        }
        if (str.charAt(i).toLowerCase() != palabra.charAt(i))
        {
            val2=true;
        }
    }
    val= [val1,val2];
    return val

}

function num(palabra){
    var res = null;
    vali= false;
    res=palabra.match(/\d/);
    if (res !=null ){
        vali=true;
    }
    return vali;
}


function confirmarContrasena()
{
    contrasena=document.getElementById("contrasena").value;
    confirmacontrasena=document.getElementById("confirmacionContrasena").value;
    labelContrasenaConf=document.getElementById("labelContrasenaConf");

        if (contrasena != confirmacontrasena){
            labelContrasenaConf.innerHTML='Las contraseñas no coinciden';
            labelContrasenaConf.style.display= 'block';
        }
        
        else{
            labelContrasenaConf.style.display='none';
        };

}

function validarEmail(){
    email=document.getElementById("email").value;
    labelEmail=document.getElementById("labelEmail");

        if (email.length > 120){
            labelEmail.innerHTML='Deben ser menos de 120 carácteres';
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


