/* Assignment 1: Todo List with localStorage

1. Create a new Vite React project.
2. Create a file named TodoList.jsx that exports a TodoList component.
3. Inside TodoList.jsx:
   - Initialize state for an array of todos and a string for the new todo input using useState.
   - Render an input field and a button. Typing in the input should update the new todo state.
   - Clicking the button should add the new todo to the list.
4. Use useEffect to:
   - Load saved todo items from localStorage when the component mounts.
   - Save the updated todo list to localStorage every time the todos state changes.
5. Render the list of todos on the page.
6. Import TodoList in main.jsx and replace <App /> with it to test in your browser.
*/

/* Assignment 2: Random Joke Fetcher

sql
Copy
Edit
1. Create a new Vite React project.
2. Create a file named RandomJoke.jsx that exports a RandomJoke component.
3. Inside RandomJoke.jsx:
   - Use useState to create state for storing a joke (both setup and punchline) and a loading indicator.
4. Use useEffect to:
   - Fetch a random joke from the API: https://official-joke-api.appspot.com/random_joke when the component mounts.
   - Update the state with the fetched joke data.
5. Display the joke (setup and punchline) inside appropriate HTML elements.
6. Add a button that, when clicked, fetches a new random joke.
7. Import RandomJoke in main.jsx and replace <App /> with it to test in your browser.
*/

/* Assignment 3: Editable User Profile with Logging

python
Copy
Edit
1. Create a new Vite React project.
2. Create a file named UserProfile.jsx that exports a UserProfile component.
3. Inside UserProfile.jsx:
   - Initialize state for a user's name and age using useState.
   - Render a form with input fields for name and age and a button to update the profile.
4. Use useEffect to:
   - Log a message to the console every time the user's profile (name or age) changes.
5. Display the current profile information on the page.
6. Import UserProfile in main.jsx and replace <App /> with it to test in your browser.
*/

/* Assignment 4: Image Rotator

sql
Copy
Edit
1. Create a new Vite React project.
2. Create a file named ImageRotator.jsx that exports an ImageRotator component.
3. Inside ImageRotator.jsx:
   - Initialize state for the current image index using useState.
   - Define an array of image URLs (feel free to use any public image links).
4. Use useEffect to:
   - Set up a setInterval that updates the current image index every 3 seconds.
   - Ensure that the interval is cleared when the component unmounts to avoid memory leaks.
5. Render the current image based on the index.
6. Import ImageRotator in main.jsx and replace <App /> with it to test in your browser.
*/

/* Assignment 5: Stopwatch

sql
Copy
Edit
1. Create a new Vite React project.
2. Create a file named Stopwatch.jsx that exports a Stopwatch component.
3. Inside Stopwatch.jsx:
   - Initialize state for the elapsed time (in seconds) and a boolean indicating whether the stopwatch is running using useState.
4. Use useEffect to:
   - When the stopwatch is running, set up a setInterval that increments the elapsed time every second.
   - Clear the interval when the stopwatch stops or when the component unmounts.
5. Render:
   - An <h1> element displaying the elapsed time.
   - Three buttons: "Start" to begin counting, "Stop" to pause, and "Reset" to set the elapsed time back to 0.
6. Import Stopwatch in main.jsx and replace <App /> with it to test in your browser.
*/

Each assignment focuses on practical use cases of useState and useEffect:

Assignment 1 reinforces managing component state and persistence with localStorage.
Assignment 2 introduces fetching data on component mount and updating state.
Assignment 3 deals with form handling and tracking state changes.
Assignment 4 demonstrates using setInterval with proper cleanup in useEffect.
Assignment 5 challenges you to create a dynamic, interactive component with multiple controls and lifecycle management.