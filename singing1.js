const toggleButton = document.getElementsByClassName('hamburger')[0]
const nav = document.getElementsByClassName('nav-bar-links')[0]

toggleButton.addEventListener('click', ()=>{
    nav.classList.toggle('active')
})
