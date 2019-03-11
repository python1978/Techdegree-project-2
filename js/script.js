/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   


/*** 
   select the div class="page" and the ul containing all the li students
***/
const div = document.querySelector('.page');
const list = document.querySelector('.student-list');



/*** 
  Create `showPage function` which set the display behavior if the LIs
***/
   const showPage = (list, page) => {
      const startIndex = (page-1)*10;
      const stopIndex = page*10-1;      
      for (let i = 0; i < list.length; i++) {         
         list[i].style.display = 'none';
         if (i >= startIndex && i <= stopIndex){
            list[i].style.display = 'block';           
         }         
      }
   };



/*** 
   `appendPageLinks function` to generate, append, and add the pagination buttons   
***/
   const appendPageLinks = (list) => {      
      const listItems = list.children;
      const totalPages = Math.ceil(listItems.length/10);
      const divPage = document.createElement('div');
      const ul = document.createElement('ul');   
      showPage(listItems,1);
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
         const link = document.querySelectorAll('a');
         for(let i = 0; i<link.length; i++){
            link[i].className = '';
         }
         event.target.className = 'active'; 
         const a = event.target;
        showPage(listItems, a.textContent);        
      });
   }

appendPageLinks(list);

// select the "search" input and, depending what value is typed in it, is
// setting the display block or none to the LIs

const search = document.querySelector('input');
search.addEventListener('keyup', (event) => {
   const input = event.target;
   const textToSearch = input.value.toLowerCase();
   //const students = list.children;
   const studentDetails = document.querySelectorAll('.student-details');
   for (let i = 0; i< studentDetails.length; i++) {
      const li = studentDetails[i].parentNode;      
      const name = studentDetails[i].children[1].textContent;  
      //console.log(name.toLowerCase().indexOf('aa'));
       if (name.toLowerCase().indexOf(textToSearch) != -1){
         li.style.display = 'block';
      } else {
         li.style.display = 'none';
      } 
   }
});

// this code needs refactoring