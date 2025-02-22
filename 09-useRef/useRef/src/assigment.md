/*
    1. Create a new Vite React project

    2. Create an usePrevious.jsx with a custom hook called usePrevious
       that is exported

    3. Inside usePrevious, implement the hook to accept any value and return its previous value

    4. Use useRef to store the previous value across renders without triggering re-renders

    5. Create a DemoComponent that uses usePrevious to display both the current and previous values

    6. Replace the <App /> in main.jsx with your DemoComponent and test that it works in your Browser

    HINT* Check how to create custom hooks and persist values with useRef
*/

/*
    1. Create a new Vite React project

    2. Create an InputNavigator.jsx with an InputNavigator component
       that is exported

    3. Inside InputNavigator, return a <form> containing three text <input> fields and a <button> labeled "Next"

    4. Use useRef to create an array (or object) of refs corresponding to each input field

    5. When the "Next" button is clicked, shift focus to the next input field in sequence.
       If the last input is reached, cycle back to the first field.

    6. Replace the <App /> in main.jsx with your InputNavigator component and test that it works in your Browser

    HINT* Consider how to dynamically manage multiple refs and focus transitions
*/


/*
    1. Create a new Vite React project

    2. Create an MeasureElement.jsx with a MeasureElement component
       that is exported

    3. Inside MeasureElement, return a <div> with some content and a <button> labeled "Measure"

    4. Use useRef to reference the <div> element

    5. When the "Measure" button is clicked, use getBoundingClientRect() to obtain the <div>'s width and height,
       then display these dimensions in a <p> element below the button

    6. Replace the <App /> in main.jsx with your MeasureElement component and test that it works in your Browser

    HINT* Look up how getBoundingClientRect() works on DOM nodes
*/


/*
    1. Create a new Vite React project

    2. Create a DebouncedSearch.jsx with a DebouncedSearch component
       that is exported

    3. Inside DebouncedSearch, return a text <input> for entering search queries and a <p> element to display the current query

    4. Use useRef to store a timer ID for debouncing user input

    5. As the user types, wait 500ms after the last keystroke before updating the displayed search term.
       If the user types again within 500ms, clear the previous timer and restart it

    6. Replace the <App /> in main.jsx with your DebouncedSearch component and test that it works in your Browser

    HINT* Use setTimeout and clearTimeout with useRef to manage debouncing effectively
*/

/*
    1. Create a new Vite React project

    2. Create a RenderTracker.jsx with a RenderTracker component
       that is exported

    3. Inside RenderTracker, use useRef to keep track of the number of times the component renders

    4. Display the current render count in a <p> element without triggering additional re-renders

    5. Optionally, include a button that forces a re-render (using state) so you can observe the render count increasing

    6. Replace the <App /> in main.jsx with your RenderTracker component and test that it works in your Browser

    HINT* Remember that updating a useRef value does not cause a re-render
*/