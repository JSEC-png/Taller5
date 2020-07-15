window.onload = function()
{
    var a = document.getElementById('prueba');
    var b = document.getElementById('pruebahijo');
    function ocultar()
    {
        b.style.display = 'none';                                
    }
    

    function mostrar()
    {
        b.style.display = 'block';                                
    }

    a.onmouseover = function(){
        b.style.display = 'none';                                
    }

    a.onmouseout = function(){
        b.style.display = 'block';                                
    }

}


