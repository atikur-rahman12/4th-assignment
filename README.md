1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

    Ans :
    i. getElementById() is used to select a single element by its unique id. Since id should be unique, it always returns only one element. 

    ii. getElementsByClassName() selects elements by class name. It returns a live HTMLCollection, meaning if the DOM changes, the collection updates automatically.

    iii. querySelector() selects the first element that matches a CSS selector.

    iv. querySelectorAll() selects all matching elements and returns a NodeList.

2. How do you create and insert a new element into the DOM?

    Ans : 1. First, create it using document.createElement()

    2. Add content using innerText or innerHTML
    3. Insert it into the DOM using methods like:
    - appendChild()
    - append()
    - prepend()

3. What is Event Bubbling? And how does it work?

    Ans : Event Bubbling is a concept where an event starts from the target element and then moves upward to its parent elements.

4. What is Event Delegation in JavaScript? Why is it useful?

    Ans : Event Delegation is a technique where we add a single event listener to a parent element instead of adding listeners to multiple child elements.

    It's useful because it improves performance,
    Reduces memory usage, Works for dynamically added elements, Cleaner and more maintainable code.

5. What is the difference between preventDefault() and stopPropagation() methods?

    Ans : 1. preventDefault() stops the default behavior of an element.

    2. stopPropagation() stops the event from bubbling up to parent elements.