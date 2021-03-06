
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
            validado=validarCampo(id,labelId,11);
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
    res=null;
    usuario=document.getElementById("usuario").value;
    labelUsuario=document.getElementById("labelUsuario");
    res=usuario.match(/[!"·$%&/()|@#~€¬/*+.`+ç´^*Ç¨]/);
 
        validado=false;
    
        if (res!=null) {
            labelUsuario.innerHTML='Solo se aceptan carácteres alfanúmericos';
            labelUsuario.style.display='block';
        }
        else if(usuario.length<10)
        {
            labelUsuario.innerHTML='El nombre de usuario debe tener mínimo 10 caracteres';
            labelUsuario.style.display='block';
        }
        else{
            validado=validarCampo(usuario,labelUsuario,20);
        };
  return validado;
}

function validarContrasena(){
    var M,m,r,c,n;
    contrasena=document.getElementById("contrasena").value;
    labelContrasena=document.getElementById("labelContrasena");
    M='mayúsculas'
    m='minúsculas'
    r='La contraseña debe contener '
    c='los caracteres "#","%","/" y "&"'
    n='números'
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
        else if (contrasena.length < 15){
            labelContrasena.innerHTML='Deben ser al menos 15 carácteres';
            labelContrasena.style.display='block';
        }
        else if(validado==false && val[1]==false && vali==false)
        {
            labelContrasena.innerHTML=r+M+', '+n+' y '+c;
            labelContrasena.style.display='block';
        }else if(validado==false && val[0]==false && vali==false){
            labelContrasena.innerHTML=r+m+', '+n+' y '+c;
            labelContrasena.style.display='block';
        }
        else if(validado==false && val[0]==false && val[1]==false){
            labelContrasena.innerHTML=r+m+', '+M+' y '+c;
            labelContrasena.style.display='block';
        }else if(vali==false && val[0]==false && val[1]==false){
            labelContrasena.innerHTML=r+m+', '+M+' y '+n;
            labelContrasena.style.display='block';
        }
        else if(val[0]==false && vali==false){
            labelContrasena.innerHTML=r+m+' y '+n;
            labelContrasena.style.display='block';
        }
        else if(val[1]==false && vali==false){ 
            labelContrasena.innerHTML=r+M+' y '+n;
            labelContrasena.style.display='block';
        }else if(validado==false && vali==false){     
            labelContrasena.innerHTML=r+n+' y '+c;
            labelContrasena.style.display='block';
        }else if(validado==false && val[0]==false){        
            labelContrasena.innerHTML=r+m+' y '+c;
            labelContrasena.style.display='block';
        }
        else if(validado==false && val[1]==false){           
            labelContrasena.innerHTML=r+M+' y '+c;
            labelContrasena.style.display='block';
        }else if(val[0]==false && val[1]==false){
            labelContrasena.innerHTML=r+M+' y '+m;
            labelContrasena.style.display='block';
        }else if(vali==false){            
            labelContrasena.innerHTML=r+n;;
            labelContrasena.style.display='block';
        }else if(val[1]==false){
            labelContrasena.innerHTML=r+M;
            labelContrasena.style.display='block';
        }
        else if(val[0]==false){
            labelContrasena.innerHTML=r+m;
            labelContrasena.style.display='block';
        }else if(validado==false){
            labelContrasena.innerHTML=r+c;
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
    var valor = document.getElementById("input-left");
    var labelvalor = document.getElementById("labelvalor");
    labelvalor.style.display='block';
    labelvalor.innerHTML = '$' + valor.value;
    document.getElementById('costo-minimo').style.display= 'block';
    
}

function ponervalor2()
{
    var valor = document.getElementById("input-right");
    var labelvalor = document.getElementById("labelvalor2");
    labelvalor.style.display='block';
    labelvalor.innerHTML = '$' + valor.value;
    document.getElementById('costo-maximo').style.display= 'block';
    
}


window.onload = function()
{
    var inputLeft = document.getElementById("input-left");
    var inputRight = document.getElementById("input-right");

    var thumbLeft = document.querySelector(".slider > .thumb.left");
    var thumbRight = document.querySelector(".slider > .thumb.right");
    var range = document.querySelector(".slider > .range");

function setLeftValue() {
	var _this = inputLeft,
		min = parseInt(_this.min),
		max = parseInt(_this.max);

	_this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1);

	var percent = ((_this.value - min) / (max - min)) * 100;

	thumbLeft.style.left = percent + "%";
	range.style.left = percent + "%";
}

setLeftValue();

function setRightValue() {
	var _this = inputRight,
		min = parseInt(_this.min),
		max = parseInt(_this.max);

	_this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1);

	var percent = ((_this.value - min) / (max - min)) * 100;

	thumbRight.style.right = (100 - percent) + "%";
	range.style.right = (100 - percent) + "%";
}
setRightValue();

inputLeft.addEventListener("input", setLeftValue);
inputRight.addEventListener("input", setRightValue);

inputLeft.addEventListener("mouseover", function() {
	thumbLeft.classList.add("hover");
});
inputLeft.addEventListener("mouseout", function() {
	thumbLeft.classList.remove("hover");
});
inputLeft.addEventListener("mousedown", function() {
	thumbLeft.classList.add("active");
});
inputLeft.addEventListener("mouseup", function() {
	thumbLeft.classList.remove("active");
});

inputRight.addEventListener("mouseover", function() {
	thumbRight.classList.add("hover");
});
inputRight.addEventListener("mouseout", function() {
	thumbRight.classList.remove("hover");
});
inputRight.addEventListener("mousedown", function() {
	thumbRight.classList.add("active");
});
inputRight.addEventListener("mouseup", function() {
	thumbRight.classList.remove("active");
});
}










