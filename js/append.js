console.log('append.js')

//where to add
const 
placeslist=document.getElementById('places-list');
//what to added
const li=document.createElement('li');
li.innerText='bandarban';

//add child
placeslist.appendChild(li);
//process to add a section
//where to add
const 
 mainContainer=document.getElementById('main-container');
 //console.log(mainContainer);
 //what to add
const section=document.createElement('section');
 const h1=document.createElement('h1');
 h1.innerText="my food list";
 
 //add child
 section.appendChild(h1); 
 //console.log(section);
 //const ul=document.createElement('ul');
 //mainContainer.appendChild(section); 
 const ul=document.createElement('ul') ;
 const li1=document.createElement('li');
 li1.innerText='biriyani';
 ul.appendChild(li1);
 const li2=document.createElement('li');
 li2.innerText='fried rice';
 ul.appendChild(li2);
 const li3=document.createElement('li');
 li3.innerText='chiken fry';
 ul.appendChild(li3);
 section.appendChild(ul); 
console.log(section);
 mainContainer.appendChild(section)
 
 //2nd process to add a section
 
 const 
 sectionDress=document.createElement('section');
 sectionDress.innerHTML= `
 <h1>my dress section</h1>
 <ul>
    <li>abx</li>
    <li>pant</li>
    <li>shirt</li>
 </ul>
 `
 mainContainer.appendChild(sectionDress);
 console.log(sectionDress);
  
  