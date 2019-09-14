var links = document.querySelectorAll("nav > a")

//console.log(links)

/*Funcion Nominada

links.forEach(clickEvent)

function clickEvent(link) {
    console.log(link)
}*/

links.forEach(function (link) {
    console.log(link)

    link.onclick = function (e) {
        e.preventDefault()
        
        
        var respuesta = confirm("Esta seguro que desea abandonar la pagina?")

        if ( respuesta ) {
            console.log(e.target.href)
            window.location.href = e.target.href
        } else{
            alert("Gracias por quedarse")
        }
    }
})