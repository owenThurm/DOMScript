alert('Script Tag Loaded');
console.log('Script tag loaded');
const newDiv = document.createElement("div"); 

newDiv.id = 'timer';
newDiv.style.backgroundColor = '#dfa160';
newDiv.style.position = 'sticky';
newDiv.style.bottom = '0';
newDiv.style.zIndex = '10';
newDiv.style.height = '75px';
newDiv.style.textAlign = 'center';
newDiv.style.paddingTop = '25px';

// and give it some content 
const newContent = document.createTextNode("Here is our new app!"); 

// add the text node to the newly created div
newDiv.appendChild(newContent);  
// add the newly created element and its content into the DOM 
const currentDiv = document.getElementById("div1");
console.log(document.body);
document.body.insertBefore(newDiv, currentDiv);