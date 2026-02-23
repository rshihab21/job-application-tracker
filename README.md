# Job Apllication Tracker

## What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
### getElementById 
Select the perticular unique one element by ID name 

### getElementsByClassName()
The getElementsByClassName() method returns a collection of elements with a specified class name.

### querySelector / querySelectorAll?
querySelector selects the first matching element using a CSS selector and returns a single element (or null if not found).
querySelectorAll selects all matching elements using a CSS selector and returns a NodeList (empty if none found).

## How do you create and insert a new element into the DOM?
For Create and insert the element to the DOM. For it Follow this step
- Create the element using document.createElement()
- Insert it using methods like appendChild(), append(), or prepend()

## What is Event Bubbling? And how does it work?
Event bubbling in JavaScript is a mechanism where an event triggered on a child element propagates upward through its ancestors in the DOM. It allows parent elements to respond to events triggered by their child elements.
- Propagation Direction: In event bubbling, the event starts at the target element and propagates upward through its parent elements to the root of the DOM.
- Default Behavior: Event bubbling is enabled by default in JavaScript.
- Event Listeners: If multiple event listeners are attached in the bubbling phase, they are executed in sequence, starting from the innermost target element.
- Event Triggering: The click event is triggered on the child element (button), initiating the event propagation.
- Event Capturing: In the capturing phase, the event propagates from the root of the DOM down to the target (child). However, no listeners are explicitly set to handle events in this phase in the given code.
- Event Bubbling: After reaching the target element (child), the event enters the bubbling phase, propagating back up through the DOM tree to the parent (parent).
- Listener Behavior: Event listeners are attached to both parent and child elements using addEventListener. By default, these listeners respond during the bubbling phase unless the capture option is set to true.
- Execution Order: When the button is clicked, the child listener executes first (console.log("Child")), followed by the parent listener (console.log("Parent")) as the event bubbles up.

- Event Bubbling: Clicking the child triggers the event to propagate upward, activating listeners on the parent and grandparent.
- Console Output: The order is "Child Clicked", "Parent Clicked", "Grandparent Clicked", showing the bubbling flow.
- Event Object: Each listener receives the event object e, which includes details like e.target and methods like e.stopPropagation().
- CSS Structure: Visual borders and sizes make the DOM hierarchy and event propagation clear.