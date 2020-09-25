window.onload = function() {
    console.log('Script tag loaded');
    const newDiv = document.createElement("div"); 

    newDiv.id = 'timer';
    newDiv.style.backgroundColor = 'rgba(223, 161, 96, 0.83)';
    newDiv.style.position = 'sticky';
    newDiv.style.bottom = '0';
    newDiv.style.zIndex = '10';
    newDiv.style.height = '75px';
    newDiv.style.textAlign = 'center';
    newDiv.style.padding = '0';
    newDiv.style.margin = '0px';
    newDiv.style.width = '100%';
    newDiv.style.fontFamily = 'Helvetica';
    newDiv.style.fontSize = '20px';
    newDiv.style.color = 'rgb(255, 255, 255)';
    newDiv.style.fontWeight = 'Bold';
    newDiv.style.display = 'inline-block';
    newDiv.style.lineHeight = '70px';

    // and give it some content 
    const newContent = document.createTextNode("FREE Worldwide Shipping Ends in:"); 

    // add the text node to the newly created div
    newDiv.appendChild(newContent);  
    // add the newly created element and its content into the DOM 
    const currentDiv = document.getElementById("div1");
    console.log(document.body);
    document.body.appendChild(newDiv);
}