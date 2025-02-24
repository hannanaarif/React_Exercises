Here are 5 structured questions in the same format as your original question to boost your learning curve with useContext.

**1️ Dynamic Context Update**

```
    1. Create a new Vite React Project.

    2. Create a file called Parent.jsx and export
       a Parent Component from inside it.

    3. Create a file called Child.jsx and export
       a Child Component from inside it.

    4. Create a new Context inside Parent as well
       as a contextState variable with a String
       value like "I love monkeys!".

    5. Add a function inside Parent that updates
       the contextState when called.

    6. Pass both contextState and the function
       as values to the Provider.

    7. In Child, use the useContext hook to
       display the contextState inside an <h1>.

    8. Add a button inside Child that, when clicked,
       updates the context value to 
       "I love bananas!" using the function.

    9. Open your browser and confirm that clicking
       the button updates the text.
```

**2️. Multiple Contexts Handling**

```
    1. Create a new Vite React Project.

    2. Inside Parent.jsx, create TWO contexts:
       - MessageContext with a string: "I love monkeys!"
       - ThemeContext with a string: "light"

    3. Wrap the Child component inside TWO Providers:
       - MessageContext.Provider
       - ThemeContext.Provider

    4. Pass appropriate values to both Providers.

    5. Inside Child.jsx, use useContext to get
       values from BOTH contexts.

    6. Display the message inside an <h1>
       and the theme inside a <p>.

    7. Test in the browser to ensure both values
       are being displayed correctly.
```

**3️. Context with Default Value**

```
    1. Create a new Vite React Project.

    2. Inside Parent.jsx, create a Context with
       a default value: "No Provider Found".

    3. Do NOT wrap Child inside a Provider.

    4. Inside Child.jsx, use useContext to
       access the context value.

    5. Display the context value inside an <h1>.

    6. Open the browser and check what happens when
       a component uses useContext without a Provider.

    7. Now, wrap Child inside a Provider in Parent.jsx
       and provide a custom value like "I love monkeys!".

    8. Refresh the browser and confirm the difference.
```

**4️. Custom Hook for Context**

```
    1. Create a new Vite React Project.

    2. Inside Parent.jsx, create a Context with
       a default string value: "I love monkeys!".

    3. Create a custom hook called useMessageContext 
       inside a separate file called useMessageContext.js.

    4. Inside the hook, return useContext(MyContext).

    5. Import and use the custom hook inside Child.jsx
       instead of using useContext directly.

    6. Display the context value inside an <h1>.

    7. Test in the browser to ensure it works as expected.

```
**5. Global Context Across Multiple Components**

```
    1. Create a new Vite React Project.

    2. Inside App.jsx, create a Context with a
       default value: "I love monkeys!".

    3. Wrap the entire App component inside
       the Provider to make the context global.

    4. Create TWO components:
       - Child.jsx
       - AnotherChild.jsx

    5. Inside both components, use useContext to
       access and display the context value.

    6. Test in the browser to confirm that both
       components can access the same context value.
```
