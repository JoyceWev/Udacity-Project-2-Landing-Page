# Landing Page Project

In this project the focus was mainly to:
	create dynamically a navbar from content in the sections
	make the navbar clickable and scrollable, corrresponding to where they got the content from
	change the active state of the sections
	change the active state of the navbar
	change the layout of the active item for
		active sections
		active navbar

## HTML

the HTML can be found in the `index.html` file

The HTML exists out of a header and 4 sections, each with the height of the viewport, with some custom lorum ipsum text and 4 words. the page ends with a footer

## CSS

Some additional images have been linked to `img` folder, for change in background.

The css can be found in the `styles.css` file

the css structure is build as followed:
Base rules
	Typeography general
Layout rules
Module Rules
	Navigation styles
	header styles
Theme Rules
	landing container styles
Theme State Rules
	section active styles <- these list what happens when the section and navbar is active
Media Rules
	smartphone
	tablet
	tablet landscape / desktop 

## Javascript

the javascript can be found in the `app.js` file

javascript handles:
scroll event
dynamic build of nav menu
making sections active
making nav bar items active

the javascript file is build as followed:
definition of global variables
helper functions
	checking if something is in viewport function
main functions
	builder of the navigation menu and its items
	function to get elements out of the sections and make list items of it that are clickable
events
	scroll event for checking if sections are in viewport and make active
	scroll event for navbar to check if corresponding sections are in viewport and make nav list items active

