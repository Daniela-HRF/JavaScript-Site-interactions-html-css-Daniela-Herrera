    alert('Les débuts en JS !')

    // afficher des infos dans la console//
    let title = document.getElementById('title')
    console.log(title)
    title.innerHTML = "IIM"
    console.log(title.innerHTML)

    let image = document.getElementById('image')
    image.src = 'img/d957dd0a0bf648763b1d8f0501805c8a-removebg-preview.png'

    let title2 = document.querySelector('#main-title')
    title.addEventListener('click' , function(){
        this.classList.add('red')
        console.log('classe ajoutée')
    })


//menu//
    let accordions = document.querySelectorAll(".accordeon")
accordions.forEach(function(item) {
    item.addEventListener('click', function(){
        this.classList.toggle('open')
    })
    console.log('ca marvche')
})
//DARKMODE//
let darkmode = document.querySelector('.darkmode')
darkmode.addEventListener ('click' , function() {
    document.body.classList.toggle('darkmode') 
    console.log('classe ajoutée')
})