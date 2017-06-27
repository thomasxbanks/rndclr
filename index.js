let random_number = (min, max) => {
	return ~~(Math.floor(Math.random() * max) + min)
}

let makeColor = (color) => {
	document.querySelector('body').style.backgroundColor = `#${color}`
}

let hexchars = [
	0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'
]

let scrInt = 0
window.onscroll = () => {
	scrInt++
	if (scrInt > 50) {
		let color =
			hexchars[random_number(0, hexchars.length)].toString() +
			hexchars[random_number(0, hexchars.length)].toString() +
			hexchars[random_number(0, hexchars.length)].toString() +
			hexchars[random_number(0, hexchars.length)].toString() +
			hexchars[random_number(0, hexchars.length)].toString() +
			hexchars[random_number(0, hexchars.length)].toString()
		makeColor(color)
		scrInt = 0
	}
}
