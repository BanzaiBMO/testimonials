// JavaScript Document

const testimonialsContainer = document.querySelector('.testimonials-Container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-Image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')


const testimonials = [
	{
		name: 'Dog',
		position: 'Barker',
		photo: 'https://randomuser.me/api/portraits/women/66.jpg',
		text:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel orci justo. Sed rutrum ante nisl, in luctus neque vestibulum ut. In et sem rutrum, eleifend eros a, vestibulum massa. Vestibulum pharetra, justo sit amet viverra rutrum, mauris lacus viverra neque, ac laoreet magna neque in nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque consectetur auctor lectus, eget suscipit augue suscipit non. Donec consequat, velit a tristique tempus, ligula dui mattis nibh, at molestie leo dolor non ante. Integer bibendum nisi quis blandit euismod. Ut auctor arcu non enim condimentum semper. Etiam dapibus faucibus ipsum, sit.",
	},
	
	{
		name: 'Obama',
		position: 'Hula Dancer',
		photo: 'https://randomuser.me/api/portraits/women/43.jpg',
		text:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel orci justo. Sed rutrum ante nisl, in luctus neque vestibulum ut. In et sem rutrum, eleifend eros a, vestibulum massa. Vestibulum pharetra, justo sit amet viverra rutrum, mauris lacus viverra neque, ac laoreet magna neque in nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque consectetur auctor lectus, eget suscipit augue suscipit non. Donec consequat, velit a tristique tempus, ligula dui mattis nibh, at molestie leo dolor non ante. Integer bibendum nisi quis blandit euismod. Ut auctor arcu non enim condimentum semper. Etiam dapibus faucibus ipsum, sit.",
	},
	
	{
		name: 'Jason',
		position: 'Analist',
		photo: 'https://randomuser.me/api/portraits/women/96.jpg',
		text:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel orci justo. Sed rutrum ante nisl, in luctus neque vestibulum ut. In et sem rutrum, eleifend eros a, vestibulum massa. Vestibulum pharetra, justo sit amet viverra rutrum, mauris lacus viverra neque, ac laoreet magna neque in nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque consectetur auctor lectus, eget suscipit augue suscipit non. Donec consequat, velit a tristique tempus, ligula dui mattis nibh, at molestie leo dolor non ante. Integer bibendum nisi quis blandit euismod. Ut auctor arcu non enim condimentum semper. Etiam dapibus faucibus ipsum, sit.",
	},
	
	{
		name: 'Yolo',
		position: 'Owner of Twitter',
		photo: 'https://randomuser.me/api/portraits/women/42.jpg',
		text:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel orci justo. Sed rutrum ante nisl, in luctus neque vestibulum ut. In et sem rutrum, eleifend eros a, vestibulum massa. Vestibulum pharetra, justo sit amet viverra rutrum, mauris lacus viverra neque, ac laoreet magna neque in nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque consectetur auctor lectus, eget suscipit augue suscipit non. Donec consequat, velit a tristique tempus, ligula dui mattis nibh, at molestie leo dolor non ante. Integer bibendum nisi quis blandit euismod. Ut auctor arcu non enim condimentum semper. Etiam dapibus faucibus ipsum, sit.",
	},
]

let idx = 1

function updateTestimonial() {
	const {name, position, photo, text} = testimonials[idx]
	
	testimonial.innerHTML = text
	userImage.src = photo
	username.innerHTML = name
	role.innerHTML = position
	
	idx++
	
	if(idx > testimonials.length - 1) {
		idx = 0
	}
}



setInterval(updateTestimonial, 10000)