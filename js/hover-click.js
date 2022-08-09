const hover__click = document.querySelectorAll('.wishlist_card');

hover__click.forEach(hoverItem, ()=>{
    hoverItem.addEventListener('click', ()=>{
        hoverItem.classList.add('wishlist_card_hov')
    })
})