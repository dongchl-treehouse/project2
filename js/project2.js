/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
 ******************************************/

//Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing



const list = document.getElementsByClassName("student-item cf"); //create a variable to store the student list items
const itemsPerPage = 10;




/* Create the `showPage` function to hide all of the items in the 
   list except for the  wanted ten to show */
const showPage = (list, page) => {

/* Loop over items in the list parameter
   -- If the index of a list item is >= the index of the first
   item that should be shown on the page
   -- && the list item index is <= the index of the last item
   that should be shown on the page, show it	 */
	for ( let i = 0; i < list.length; i++) {
		if((i>=(page-1)*itemsPerPage)&&(i<page*itemsPerPage)){
			list[i].style.display = "block";
		}
		else{
			list[i].style.display = "none";
		}
	}

	appendPageLinks(list);
}

/* Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.*/

   const appendPageLinks = (list) => {

	// no need to recreate pagination links.
	const pagi = document.getElementsByClassName("pagination");
	if (pagi.length > 0) return;
	
	
//	1. Determine how many pages are needed for the list 

	const numPages = Math.ceil(list.length/itemsPerPage);
	

//	2. Create a div, give it the “pagination” class, and append it to the .page div
	var div = document.createElement("div");
	div.setAttribute('class', 'pagination');
	
	var pagediv = document.getElementsByClassName('page');
	pagediv[0].appendChild(div);

//	3. Add a <ul> to the “pagination” div to store the pagination links
	var ul = document.createElement("ul");
	div.appendChild(ul);

//	4. for every page, add <li> and <a> tags with the page number text
	for (var n=1; n<=numPages; n++)
	{
		var li = document.createElement("li");
		var anchorTag = document.createElement('a');
		anchorTag.innerText = n.toString();

		li.appendChild(anchorTag);
		ul.appendChild(li);

		/* 5. Add an event listener to each a tag. When they are clicked
		 call the showPage function to display the appropriate page*/

		li.addEventListener("click", function (event){
			const cn = event.target.innerText;
			showPage(list,cn);

		// 6. find the active class
	    	/*	If there's no active class, remove the active class. 
			 We assume that only one active class exists in all pagination links and this should be true.*/
			 var current = document.getElementsByClassName("active");
			if (current.length > 0) {
				current[0].className = current[0].className.replace(" active", "");
			}

			// 7. Add the active class to the current pagination link
			event.target.className += " active";
		})

	}//for loop
}


window.onload = function(){
	showPage(list,1)
};                       // load 1st page
