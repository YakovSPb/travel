document.addEventListener("DOMContentLoaded", function() {

	// change input cheked
	const inputChecked =	document.querySelector('.switch_1')
	const hotelInput = document.getElementById('hotel-input')
	const hotelText = document.querySelector('.hotel__text')
	const hotelList = document.querySelector('.hotel__list')

	inputChecked.cheked = 'checked'
	inputChecked.addEventListener('click', ()=>{
		document.querySelector('.switch_box__all').classList.toggle('active')
		document.querySelector('.switch_box__sell').classList.toggle('active')
		document.querySelector('.hotel__list').classList.toggle('sale')
	})

	// click Hotel list
	hotelList.addEventListener('click', (event)=>{
		const liValue = event.target.innerText
		hotelInput.value = liValue
		hotelText.innerText = liValue
		document.querySelector('.hotel__block').style.display = 'none'
	})

	//hover Hotel
	document.querySelector('.hotel').addEventListener('mouseenter', ()=>{
		document.querySelector('.hotel__block').style.display = 'block'
	})
	document.querySelector('.hotel__block').addEventListener('mouseleave', ()=>{
		document.querySelector('.hotel__block').style.display = 'none'
	})


	//filter Hotel Input
	hotelInput.addEventListener('keyup', 	filterHotel)

	function filterHotel(){
		let filterValue = hotelInput.value.toUpperCase()

		let li = hotelList.querySelectorAll('li')
		for(let i = 0; i< li.length; i++){
			if(li[i].innerHTML.toUpperCase().indexOf(filterValue) > -1){
				li[i].style.display = ''
			} else {
				li[i].style.display = 'none'
			}
		}
	}

//DAYS
$('input[name="dates"]').daterangepicker({
	locale: {
		firstDay:1,
		cancelLabel: 'Clear' 
	}
});

const daysInput = document.getElementById('daysInput')
daysInput.value = 'Заезд - Отъезд'


// ROOMS

const roomItem = document.querySelectorAll('.rooms__item-wrap')
for( i = 0; i < roomItem.length; i++){
	roomItem[i].addEventListener('click', (event)=>{
		let myTarget = event.target

		if(event.target.parentElement.classList.contains('s-minus')){
			let inputValue = myTarget.parentElement.nextElementSibling
			if(inputValue.value > 1){
				inputValue.value--
			}
			upDate()
		} else if(event.target.parentElement.classList.contains('s-plus')){
			let inputValue = myTarget.parentElement.previousElementSibling
			inputValue.value++
			upDate()
		}
	})
}

function upDate(){
	const roomInput = document.getElementById('room-input')
	const userInput = document.getElementById('user-input')
	const childInput = document.getElementById('child-input')
	const numUserText = document.getElementById('numUserText')
	const numUserInput = document.getElementById('numUser')
	const numRoomsInput = document.getElementById('numRooms')
	const numRoomsText = document.getElementById('numRoomsText')
	
	numUserInput.innerText = userInput.value
	numRoomsInput.innerText = roomInput.value
	if(+userInput.value === 1){
		numUserText.innerHTML = '&nbsp;взрослый'
	} else {
		numUserText.innerHTML = '&nbsp;взрослых'
	}
	if(+roomInput.value === 1){
		numRoomsText.innerHTML = '&nbsp;номер'
	} else if(+roomInput.value >1 && +roomInput.value<5){
		numRoomsText.innerHTML = '&nbsp;номера'
	}
	else{
		numRoomsText.innerHTML = '&nbsp;номеров'

	}

}
upDate()

//Blur for Input
document.getElementById('room-input').addEventListener('focus', function(event) {
  this.blur();
})

document.getElementById('user-input').addEventListener('focus', function(event) {
  this.blur();
})

document.getElementById('child-input').addEventListener('focus', function(event) {
  this.blur();
})

let numUser = document.getElementById('numUser').textContent
let numUserText = document.getElementById('numUserText').textContent
let numRooms = document.getElementById('numRooms').textContent
let numRoomsText = document.getElementById('numRoomsText').textContent

//btn-submit
document.getElementById('btn-submit').addEventListener('click', (event)=>{
	event.preventDefault()
	document.querySelector('.result__text').innerHTML = `
		<h3>Результаты Поиска</h3>
		<p><b>Отель:</b> ${hotelInput.value}</p>
		<p><b>Дата:</b> ${daysInput.value}</p>
		<p><b>Бронь:</b> ${numRooms} ${numRoomsText} (${numUser} ${numUserText}) </p>
	`


})


}); //END TAG
