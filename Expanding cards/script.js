const cards = document.querySelectorAll('.mydiv');

cards.forEach((card) => {
    card.addEventListener('click', ()=>{
        removeClass()
       card.classList.add('active')
    })

})

function removeClass(){
    cards.forEach((card) => {
        card.classList.remove('active')

    })
}