//project_imgs is an array of elements 
let project_imgs = document.getElementsByClassName('card-image')
let accomplishment_hide_button = document.querySelectorAll('span.material-icons')

function show_accomplishment(){
	// use this to find the one element that is clicked
	let parent_element = this.closest('.card_medium')
	
	parent_element.querySelector('.card-image').style.display = 'none'
	parent_element.querySelector('.card-content').style.display = 'none'
	// parent_element.querySelector('.card-reveal').style.display = 'block';
    // parent_element.querySelector('.card-action').style.display = 'block';
	
}

function hide_accomplishment(){
	let parent_element = this.closest('.card_medium')
	parent_element.querySelector('.card-image').style.display = 'block'
	parent_element.querySelector('.card-content').style.display = 'block'
}

for (let i = 0; i<project_imgs.length;i++){
	project_imgs[i].addEventListener('click',show_accomplishment)
}

for (let i = 0; i<accomplishment_hide_button.length;i++){
	accomplishment_hide_button[i].addEventListener('click',hide_accomplishment)
}