'use strict'

const rotaters = document.querySelectorAll('.rotate')
const sizer = document.querySelector('.size')

const steve = document.getElementById('steve')

rotaters.forEach(range => range.addEventListener('input', event => {
	const { value } = event.target
	const axis = event.target.dataset.axis ?? 'x';
	steve.style.setProperty(`--rotate-${axis}`, `${value * (axis === 'x' ? -1 : 1)}deg`)
}))

sizer.addEventListener('input', event => {
	const { value } = event.target
	steve.style.setProperty(`--height`, `${value}px`)
})

const skinUrlInput = document.getElementById('skin-url')
const skinFileInput = document.getElementById('skin-file')

skinUrlInput.addEventListener('change', event => {
	setSkin(event.target.value)
})

skinFileInput.addEventListener('change', async event => {
	const file = event.target.files.item(0)
	setSkin(URL.createObjectURL(file))
})

const getBlobUrlFromFile = async file => {
	const reader = new FileReader()
	reader.addEventListener('load', e => {
		const result = e.target.result;
		const blob = new Blob([result], { type: 'image/png' })
		Promise.resolve(URL.createObjectURL(blob))
	}, { once: true })
	reader.readAsDataURL(file)
}

const setSkin = url => {
	if (url) {
		steve.style.setProperty(`--skin`, `url("${url}")`)
	} else {
		steve.style.removeProperty(`--skin`)
	}
}
