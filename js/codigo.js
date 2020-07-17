
function validarFormulario()
{
    alerta=document.getElementById("alerta");
    formulario=document.getElementById("formulario");
    boton=document.getElementById("registro");
validado1=validarId();
validado2=validarNombre();
validado3=validarApellido();
validado4=validarDireccion();
validado5=validarUsuario();
validado6=validarContrasena();
validado7=confirmarContrasena();
validado8=validarEmail();
validado9=validarTel();

validado=validado1&&validado2&&validado3&&validado4&&validado5;
validado_2=validado6&&validado7&&validado8&&validado9;

FormularioVal=validado&&validado_2;

if(!FormularioVal)
{
    
    alerta.innerHTML="Faltan campos por ser completados";
    alerta.style.display='block';
    boton.type = 'button';
}
else{
    alerta.style.display='none';
    boton.type = 'submit'
    formulario.action = "mailto:sebastian.rivera.leon2000@gmail.com";
}
}


function validarCampo(campo,labelCampo,longitud)
{
    campoValidado=false;
    if (campo.length > longitud){
        labelCampo.innerHTML='Deben ser menos de ' +longitud+ ' carácteres';
        labelCampo.style.display= 'block';
    }
    else if (campo==""){
        labelCampo.innerHTML='¡Campo vacío!';
        labelCampo.style.display='block';
    }
    else{
        labelCampo.style.display='none';
        campoValidado=true;
    };

    return campoValidado;
}

function validarApellido(){
    apellido=document.getElementById("apellido").value;
    labelApellido=document.getElementById("labelApellido");

       validado=validarCampo(apellido,labelApellido,25);

       return validado;
  
}


function validarNombre(){
    nombre=document.getElementById("nombre").value;
    labelNombre=document.getElementById("labelNombre");

    validado=validarCampo(nombre,labelNombre,25);

    return validado;
  
}



function validarId(){
    id=document.getElementById("id").value;
    labelId=document.getElementById("labelId");
    id=id.toString();
    p=id.match(/\./);
      validado=false;
        if(p!=null){
            labelId.innerHTML='Solo se aceptan números enteros';
            labelId.style.display='block';
            
        }       
        else{
            validado=validarCampo(id,labelId,25);
        }

        return validado;
  
}

function validarDireccion(){
    direccion=document.getElementById("direccion").value;
    labelDireccion=document.getElementById("labelDireccion");

    requisitos1=['cll','cra','av','anv','trans'];

    var validado=validarRequisitos(direccion,requisitos1,1);

          
        if(validado==false)
        {
            labelDireccion.innerHTML='La dirección debe empezar por "cll","cra","av","anv" o "trans"';
            labelDireccion.style.display='block';

        }
        else{
            validado=validarCampo(direccion,labelDireccion,25);
        };
  
        return validado;
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
        validado=false;
    
        if (res!=null){
            labelUsuario.innerHTML='Solo se aceptan carácteres alfanúmericos';
            labelUsuario.style.display='block';
        }
        else if(usuario.length<10)
        {
            labelUsuario.innerHTML='El nombre de usuario debe tener más de 10 caracteres';
            labelUsuario.style.display='block';
        }
        else{
            validado=validarCampo(usuario,labelUsuario,20);
        };
  return validado;
}

function validarContrasena(){
    contrasena=document.getElementById("contrasena").value;
    labelContrasena=document.getElementById("labelContrasena");

    requisitos=['#','%','/','&'];
    validado=validarRequisitos(contrasena,requisitos,2);
    val=UpLow(contrasena);
    vali=num(contrasena);
    contraVal=false;
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
        else if(validado==false && val[0]==false && val[1]==false){

            labelContrasena.innerHTML='La contraseña debe tener minúsculas, mayúsculas y los caracteres "#","%","/" y "&"';
            labelContrasena.style.display='block';

        }else if(vali==false && val[0]==false && vali==false){

            labelContrasena.innerHTML='La contraseña debe tener minúsculas, mayúsculas y los caracteres "#","%","/" y "&"';
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

        }else if(val[0]==false && val[1]==false){

            labelContrasena.innerHTML='La contraseña debe tener minúsculas y mayúsculas';
            labelContrasena.style.display='block';

        }else if(vali==false){
            
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
            contraVal=true;
        };
  return contraVal;
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
            validado=false;
        }
        
        else{
            labelContrasenaConf.style.display='none';
            validado=true;
        };

        return validado;

}

function validarEmail(){
    email=document.getElementById("email").value;
    labelEmail=document.getElementById("labelEmail");

    validado=validarCampo(email,labelEmail,120);
    return validado;
  
}


function validarTel(){
    tel=document.getElementById("tel").value;
    labelTel=document.getElementById("labelTel");

    validado=validarCampo(tel,labelTel,25);
  return validado;
}

function listaGustos()
{

    gustos=document.getElementById("gustos").value;
    lista=document.getElementById("listargustos");

    if(gustos != null)
    {
        lista.style.display= 'block';
    }

    else
    {
        lista.style.display= 'none';
    }
}


 function ponervalor()
        {
            var valor = document.getElementById("valor");
            var labelvalor = document.getElementById("labelvalor");
            labelvalor.style.display='block';
            labelvalor.innerHTML = '$' + valor.value;
            
        }