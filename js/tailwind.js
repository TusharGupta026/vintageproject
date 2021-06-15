
window.addEventListener('DOMContentLoaded', ()=> {
    const menuBtn = document.querySelector('#menu-btn1')
    const dropdown = document.querySelector('#dropdown1')
    
    menuBtn.addEventListener('click', () => {
        dropdown.classList.toggle('hidden')
        dropdown.classList.toggle('flex')
    })

})