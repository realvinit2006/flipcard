const click = document.getElementById('butnum')
click.addEventListener("click", ()=>{
    const cardblock = document.getElementById('cardblock')
    cardblock.style = "display:block";
    click.style = "display:none";
})