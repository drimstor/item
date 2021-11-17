
let photos = [
	'img/photo1.jpg',
	'img/photo2.jpg',
	'img/photo3.jpg',
	'img/photo4.jpg'
  ];
  
  
  let thumbnails = document.querySelectorAll('.gallery__photo-preview');
  let fullPhoto = document.querySelector('.full-photo');
  let zoom = document.querySelector('#zoom1');

  fullPhoto.addEventListener('click', (evt) => {
	evt.preventDefault();
  })

  let addThumbnailClickHandler = function (thumbnail, photo) {
	thumbnail.addEventListener('click', function (evt) {
		evt.preventDefault();
		fullPhoto.src = photo;
	});
  };

  for (let i = 0; i < thumbnails.length; i++) {
	addThumbnailClickHandler(thumbnails[i], photos[i]);
  }
  
/* ___________________________________________________________________ */


  let sections = document.querySelectorAll('section');
  let navBtns = document.querySelector('.nav__btns');
  let navBtn = document.querySelectorAll('.nav__btn');
 
	navBtns.addEventListener('click', (e) => {
	for (let i = 0; i < sections.length; i++) {
		sections[i].style.display='none';
		navBtn[i].classList.remove('btn__active')
	}
	

	if (e.target.innerHTML === 'Описание') {
		sections[0].style.display='block'
		e.target.classList.add('btn__active')
	}
	if (e.target.innerHTML === 'Характеристики') {
		sections[1].style.display='block'
		e.target.classList.add('btn__active')
	}
	if (e.target.innerHTML === 'Обзоры 19') {
		sections[2].style.display='block'
		e.target.classList.add('btn__active')		
	}
})


/* ___________________________________________________________________ */

	
	const body = document.querySelector('body')
	let popup = document.querySelector('.popup')
	let closePop = document.querySelectorAll(".close")
	let popupContent = document.querySelector('.popup__content')
	let links = document.querySelectorAll('.btn')
	console.log(links)

	let openPopup = function (link) {
	link.addEventListener('click', () => {
		popup.classList.add('open')
		popupContent.classList.add('opentoo')
		body.classList.add('lock')
	})
	}

	let popupClose = function (link) {
	link.addEventListener('click', () => {
		popup.classList.remove('open')
		popupContent.classList.remove('opentoo')
		body.classList.remove('lock')
	})
	}

	for (let i = 0; i < links.length; i++) {
		openPopup(links[i]);
		popupClose(closePop[i])
	}

	document.addEventListener('click', (e) => {
		if(e.target === popup) { 
			popup.classList.remove('open')
			popupContent.classList.remove('opentoo')
			body.classList.remove('lock')
		}
	});
	  
	