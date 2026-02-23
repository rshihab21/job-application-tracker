# Job Apllication Tracker

## 1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
### getElementById 
Select the perticular unique one element by ID name 

### getElementsByClassName()
The getElementsByClassName() method returns a collection of elements with a specified class name.

### querySelector / querySelectorAll?
querySelector selects the first matching element using a CSS selector and returns a single element (or null if not found).
querySelectorAll selects all matching elements using a CSS selector and returns a NodeList (empty if none found).

## 2.How do you create and insert a new element into the DOM?
For Create and insert the element to the DOM. For it Follow this step
- Create the element using document.createElement()
- Insert it using methods like appendChild(), append(), or prepend()

## 3.What is Event Bubbling? And how does it work?
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
## 4.What is Event Delegation in JavaScript? Why is it useful?
Event delegation is a technique in JavaScript where a single event listener is attached to a parent/ancestor element instead of attaching separate listeners to multiple child elements. It leverages event bubbling: when an event occurs on a child, it bubbles up to the parent, where the listener checks event.target to identify which child triggered it and handles the action accordingly.

- Improves performance : Fewer event listeners reduce memory usage and improve speed (especially with large/dynamic lists).
- Handles dynamically added elements:  New children (added via JS/AJAX) are automatically supported without rebinding listeners.
- Cleaner & more maintainable code — Logic stays in one central place.
### Example
<div>
  <button>Button 1</button>
  <button>Button 2</button>
  <button>Button 3</button>
</div>
const buttons = document.querySelectorAll('button')
buttons.forEach(button => {
  button.addEventListener("click", (event) => {
    console.log(event.target.innerText)
  })
})
const div = document.querySelector('div')

div.addEventListener("click", (event) => {
  if(event.target.tagName === 'BUTTON') {
    console.log(event.target.innerText)
  }
})
Now, we have just one event listener, but the same logic: when you click the first button, "Button 1" is logged to the console, and the same thing for the other buttons.
Even if we add an extra button like this:
<div>
  <button>Button 1</button>
  <button>Button 2</button>
  <button>Button 3</button>
  <button>Button 4</button>
</div>

## 5.What is the difference between preventDefault() and stopPropagation() methods?
These two methods control different aspects of event handling in JavaScript. They are independent  using one does not affect the other.
#### event.preventDefault()
- Cancels the browser's default action for the event (if the event is cancelable).
- Browser built-in behavior (e.g., form submit, link navigation, checkbox toggle, context menu, etc.)
- No — event still bubbles and triggers other listeners
#### event.stopPropagation()
- Stops the event from propagating (bubbling up or capturing down) to other elements.
- Event flow through the DOM → other event listeners on parent/child/ancestor elements
- Yes — stops further propagation (no more listeners on parents/ancestors)



