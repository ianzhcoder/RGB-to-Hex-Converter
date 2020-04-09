const red = document.querySelector('#R')
const green = document.querySelector('#G')
const blue = document.querySelector('#B')
const hex = document.querySelector('.hex')
const hexcolor = document.querySelector('.hexcolor')
const convert = document.querySelector('#convert')


convert.addEventListener('click', function rgbToHex() {
  if (Number(red.value) > 255 || Number(green.value) > 255 || Number(blue.value) > 255) {
    alert('請輸入0~255')
  } else {
    let redValue = Number(red.value).toString(16)
    let greenValue = Number(green.value).toString(16)
    let blueValue = Number(blue.value).toString(16)
    hex.innerText = `#${redValue.padStart(2, '0')}${greenValue.padStart(2, '0')}${blueValue.padStart(2, '0')}`
    hexcolor.style.backgroundColor = hex.innerText
  }
  return
})