/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Define Global Variables
 * 
 */

const textPart = document.querySelectorAll('.landing__container');
const section = document.querySelectorAll('section h2');
const ul = document.getElementById('navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 * 
 */

// Check if 'elem' is in viewport (used in textPart)
let isInViewport = function (elem) {
	let bounding = elem.getBoundingClientRect();
	const inBound = {};
	inBound.top = bounding.top >= 0 && bounding.top <= (window.innerHeight || document.documentElement.clientHeight);
	inBound.bottom = bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) && bounding.bottom >= 0;
	inBound.all = inBound.top && inBound.bottom;
	inBound.any = inBound.top || inBound.bottom;
	return inBound.any;
};

/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

//Build actual menu from h2 elements in body and make them active when corresponding section is in view (based on matching naming h2 and link content)
section.forEach(function (navLinks) {
	linkAnchor = navLinks.parentNode.parentNode.id;
	renderMenu(navLinks);
})

// function to build menu menu with list items and make them links
function renderMenu(text) {
	let li = document.createElement('li');
	let a = document.createElement('a');
	li.setAttribute('class', 'list__item');
	ul.appendChild(li);
	li.appendChild(a);
	a.innerHTML = text.textContent;
	a.setAttribute('class', 'linktosection');
	// make nav items corresponding with sections by placing them in the a href
	a.setAttribute('href', '#');
}

/**
 * End Main Functions
 * Begin Events
 * 
 */

// Add class 'active' to section when near top of viewport, and delete when out of it
window.addEventListener('scroll', function () {
	textPart.forEach(function (part) {
		if (isInViewport(part)) {
			part.parentNode.classList.add("active");
		} else {
			part.parentNode.classList.remove("active");
		}
	});
});

let aLink = document.querySelectorAll('li a');

//set nav menu items as active on scroll when corresponding section is in viewport (matched on h2 name and link name)
//and delete status when section is not in view anymore
window.addEventListener('scroll', function () {
	let classStatus = document.querySelectorAll('section');
	classStatus.forEach(function (status) {
		if (status.className == 'active') {
			aLink.forEach(function (linkItem) {
				if (status.querySelector('h2').textContent == linkItem.textContent) {
					let activeStatus = status.className;
					linkItem.classList.add(activeStatus);
				}
			});
		} else {
			aLink.forEach(function (linkItem) {
				if (status.querySelector('h2').textContent == linkItem.textContent) {
					linkItem.classList.remove("active");
				}
			});
		}
	});
});

//  scroll to corresponding nav item if clicked upon
aLink.forEach(function (linkItem) {
	linkItem.addEventListener('click', function(event) {
		textPart.forEach(function (part){
			let bounding = part.getBoundingClientRect();
			const inBound = {};
			inBound.top = bounding.top >= 0 && bounding.top <= (window.innerHeight || document.documentElement.clientHeight);
			inBound.bottom = bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) && bounding.bottom >= 0;
			console.log(inBound.top);
			window.scrollTo({
				top: inBound.top,
			  	left: 0,
			  	behavior: 'smooth'
			});
		});
	});
});
