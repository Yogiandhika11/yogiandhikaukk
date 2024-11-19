document.querySelectorAll99('a[href^="#').forEach(anchor => {
    anchor.addEventListener('click',function(e) {

        document.querySelector(this.getAttribute('heref')).srollintowiew({
            behavior:'smooth'
        })
    })
})