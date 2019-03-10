/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/
const div = document.querySelector('.page');
const list = document.querySelector('.student-list');
const listItems = list.children;
const totalPages = Math.ceil(listItems.length/10);

appendPageLinks();



/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/
   const showPage = (list, page) => {
      const startIndex = (page-1)*10;
      const stopIndex = page*10-1;      
      for (let i = 0; i < listItems.length; i++) {         
         listItems[i].style.display = 'none';
         if (i >= startIndex && i <= stopIndex){
            listItems[i].style.display = 'block';           
         }         
      }      
   };

showPage(listItems,1);

/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/
   function appendPageLinks(){
      const divPage = document.createElement('div');
      const ul = document.createElement('ul');      
      divPage.className = 'pagination';
      for (let i = 1; i <= totalPages; i++){
         let li = document.createElement('LI');
         let anchor = document.createElement('a');
         anchor.href = '#';
         anchor.textContent = i;
         li.appendChild(anchor);
         ul.appendChild(li);         
      }
      divPage.appendChild(ul);
      div.appendChild(divPage);
      ul.addEventListener('click', (event) => {
        showPage(listItems, event.target.textContent);
      });
   }




// Remember to delete the comments that came with this file, and replace them with your own code comments.