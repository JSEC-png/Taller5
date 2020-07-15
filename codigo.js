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

    a.onmouseover = ocultar();
        

    a.onmouseout = mostrar();
        

    
    
    function newFunction() {
        var e = document.getElementById("correo");
    
        e.addEventListener("focus", function () {
    
            alert("llene eso");
        }, true);
    }
    
    

    
}



