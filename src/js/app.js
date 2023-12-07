const colorRojo=document.getElementById('rojo');
const colorGris=document.getElementById('gris');
const colorNegro=document.getElementById('negro')
const etiqueta=document.getElementById('etiqCarro');
const botonAgregar=document.getElementById('button')
const imgCard=document.querySelector('.product-image')

colorRojo.addEventListener('click',()=>{
    botonAgregar.style.backgroundColor='red';
    etiqueta.style.backgroundColor='red';
    imgCard.style.backgroundImage='url("../../public/img/redcar.jpg")';
})


colorGris.addEventListener('click',()=>{
    botonAgregar.style.backgroundColor='gray';
    etiqueta.style.backgroundColor='gray';
    imgCard.style.backgroundImage='url("../../public/img/graycar.jpg")';
})


colorNegro.addEventListener('click',()=>{
    botonAgregar.style.backgroundColor='black';
    etiqueta.style.backgroundColor='black';
    imgCard.style.backgroundImage='url("../../public/img/blackcar.jpg")';
})
