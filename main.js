'use strict'

const rotaters = document.querySelectorAll('.rotate')
const sizer = document.querySelector('.size')

rotaters.forEach(range => range.addEventListener('input', event => {
	const { value } = event.target
	const axis = event.target.dataset.axis ?? 'x';
	const target = document.getElementById(event.target.dataset.target)
	target.style.setProperty(`--rotate-${axis}`, `${value * (axis === 'x' ? -1 : 1)}deg`)
}))

sizer.addEventListener('input', event => {
	const { value } = event.target
	const target = document.getElementById(event.target.dataset.target)
	target.style.setProperty(`--height`, `${value}px`)
})