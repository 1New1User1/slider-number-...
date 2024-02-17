let slowSlider = document.querySelectorAll('.imageSlider')
let leftBtn = document.getElementById('leftBtn')
let rightBtn = document.getElementById('rightBtn')
let FullArea = document.querySelector('.FullArea')

console.log(slowSlider)

slowSlider[0].classList.add('activeImage')
let counter = 0

leftBtn.addEventListener('click', () => {
    for(let i = 0; i < slowSlider.length; i++){
        slowSlider[i].classList.remove('activeImage')
    }

    counter--

    if(counter < 0) counter = slowSlider.length - 1
    slowSlider[counter].classList.add('activeImage')
})

rightBtn.addEventListener('click', () => {
	for (let i = 0; i < slowSlider.length; i++) {
		slowSlider[i].classList.remove('activeImage')
	}

	counter++

	if (counter >= slowSlider.length) counter = 0
	slowSlider[counter].classList.add('activeImage')
})

function passiveSlider (){
	for (let i = 0; i < slowSlider.length; i++) {
		slowSlider[i].classList.remove('activeImage')
	}

	counter++

	if (counter >= slowSlider.length) counter = 0
	slowSlider[counter].classList.add('activeImage')
}

let second = 2000
let TimerImage = setInterval(passiveSlider, second)

let blockSlider = document.getElementById('blockSlider')
blockSlider.addEventListener('mouseover', () => {
	clearInterval(TimerImage)
})

blockSlider.addEventListener('mouseleave', () => {
    TimerImage = setInterval(passiveSlider, second)
})