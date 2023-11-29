document.addEventListener('keyup',(e)=>{
    /*Verifica si el evento keyup se realizo en un elemento con id="buscador"*/
    if(e.target.matches("#buscador")){
        document.querySelectorAll('.articulo').forEach(fruta =>{
            fruta.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?fruta.classList.remove('filtro')
            :fruta.classList.add('filtro')
        });
    }

    console.log(e.target.value)
});