// Catch all Elements
let allImages = document.querySelectorAll('.carousel-img'),
    preBtn = document.getElementById('preBtn'),
    nextBtn = document.getElementById('nextBtn');

// Loop on all Images and show just the active one
const activeImg = (index) => {
    // I will loop on all images and remove the active class
    allImages.forEach( (img, i) => {
        img.classList.remove('active')

        // I will check if it is the chosen one, I will provide it the active class
        if(i === index) img.classList.add('active')
    })
}

let current = 0

// Next-Btn
nextBtn.addEventListener('click', () => {
    current = (current + 1) % allImages.length
    return activeImg(current)
})

// Prev-Btn
preBtn.addEventListener('click', () => {
    current = (current - 1 + allImages.length) % allImages.length
    return activeImg(current)
})