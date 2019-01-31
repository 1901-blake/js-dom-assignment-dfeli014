// /*-----------------------------------------------------------------------------------
// PART II

// Part II will focus on Javascript's ability to manipulate the DOM.
// Use the provided index.html
// -----------------------------------------------------------------------------------

// 1. USA
// Define function getUSA()
// Find the html element that contains "USA".
// Print that element's contents.

function getUSA() {
    const spanElements = document.getElementsByTagName('span');
    let foundElement = '';
    
    for (const key in spanElements) {
        if (spanElements[key].innerText === 'USA') {
            foundElement = spanElements[key];
        }
    }

    return foundElement.innerText;
}
console.log(getUSA());
  
// 2. Sales
// Define function getPeopleInSales()
// Print the names of all the people in the sales department.

function getPeopleInSales() {
    const tdElements = document.getElementsByTagName('td');
    let names = [];

    for (const key in tdElements) {
        if(tdElements[key].innerText === 'Sales') {
            const prev = tdElements[key].previousElementSibling;
            names.push(prev.innerText);
        }
    }
    return names;
}
console.log(getPeopleInSales());
  
// 3. Click Here
// Define function getAnchorChildren()
// Find all anchor elements with a <span> child.
// Print the contents of <span>

function getAnchorChildren() {
    const anchorElements = document.getElementsByTagName('a');
    let spanChildren = [];
    let spanChildren2 = [];

    for (const key in anchorElements) {
        if (anchorElements[key].hasChildNodes) {
           if (anchorElements[key].firstChild !== null) {
               spanChildren.push(anchorElements[key].getElementsByTagName('span'));
           }
        }
    }

    for (const key in spanChildren) {
       if (spanChildren[key].length === 1) {
           spanChildren2.push(spanChildren[key].item(0).innerText);
       }
    }

    return spanChildren2;
}
console.log(getAnchorChildren());
  
// 4. Hobbies
// Define function getHobbies()
// Find all checked options in the 'skills' select element.
// Print the value and the contents.

function getHobbies() {
    const optionsArr = [];
    let temphold, selectArr = document.getElementsByTagName('select');

    for (let i = 0; i < selectArr.length; i++) {
        if (selectArr[i].name === 'skills') {
            temphold = selectArr[i];
        }
    }

    for (let i = 0; i< temphold.children.length; i++) {
        if (temphold.children.item(i).getAttribute('selected')) {
            optionsArr.push(temphold.children.item(i).innerText);
        }
    }

    return optionsArr;
}
console.log(getHobbies());
  
// 5. Custom Attribute
// Define function getCustomAttribute()
// Find all elements with "data-customAttr" attribute
// Print the value of the attribute.
// Print the element that has the attribute.

function getCustomAttribute() {
    const elemtAttr = [];
}
console.log(getCustomAttribute());

// 6. Sum Event
// NOTE: Write unobtrusive Javascript
// Regarding these elements:
// 	<input id="num1" class="nums" type="text"/>
// 	<input id="num2" class="nums" type="text"/>
// 	<h3>Sum: <span id="sum"></span></h3>

// Define onchange event handler.
// Add <input> element values.
// Put the sum in the <span> element.
// If values cannot be added, put "Cannot add" in the <span> element

// 7. Skills Event
// NOTE: Write unobtrusive Javascript
// When user selects a skill, create an alert with a message similar to:
// 	"Are you sure CSS is one of your skills?"
// NOTE: no alert should appear when user deselects a skill.

// 8. Favorite Color Event
// NOTE: Write unobtrusive Javascript
// NOTE: This is regarding the favoriteColor radio buttons.
// When a user selects a color, create an alert with a message similar to:
// 	"So you like green more than blue now?"
// In this example, green is the new value and blue is the old value.
// Make the background color (of all favoriteColor radio buttons) the newly selected favoriteColor

// 9. Show/Hide Event
// NOTE: Write unobtrusive Javascript
// When user hovers over an employees name:
// 	Hide the name if shown.
// 	Show the name if hidden.

// 10. Current Time
// Regarding this element:
// 	<h5 id="currentTime"></h5>
// Show the current time in this element in this format: 9:05:23 AM
// The time should be accurate to the second without having to reload the page.

// 11. Delay
// Regarding this element:
// 	<p id="helloWorld">Hello, World!</p>
// Three seconds after a user clicks on this element, change the text to a random color.

// 12. Walk the DOM
// Define function walkTheDOM(node, func)
// This function should traverse every node in the DOM. Use recursion.
// On each node, call func(node).


// */