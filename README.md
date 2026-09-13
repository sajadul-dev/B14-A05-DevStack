# Dev Stack

Dev Stack is a simple technology stack builder for developers. It helps users explore different technologies, check their details, and add the ones they like to their own stack.

## Technologies Used

- React.js
- Vite
- JavaScript
- Tailwind CSS
- React-Toastify
- JSON
- HTML

## Features

1. Users can explore different technologies with their category, rating, difficulty, and description.
2. Users can add technologies to their own stack and remove them whenever they want.
3. The website is fully responsive and shows toast notifications for stack actions.

## React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript. React uses JSX because it makes the UI easier to write and understand.

### 2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component. State is used to store and manage data that can change inside a component.

### 3. What does the useState hook do, and where did you use it in this project?

`useState` lets us store data in a React component and update it when needed. In this project, I used it in `App.jsx` to keep track of the selected technologies in the user's stack.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?

`useEffect` is used to run some code after the component renders. I used it in `App.jsx` to load the technology data from the local JSON file when the page starts.

### 5. Why does every item in a map() list need a unique key prop?

React needs a unique `key` to identify each item in a list. It helps React understand which item was added, removed, or changed.

### 6. What is conditional rendering? Show one place you used it in this project.

Conditional rendering means showing different content based on a condition. In this project, I used it in the Your Stack section. When there are no selected technologies, it shows an empty message. When technologies are selected, it shows the stack items instead.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child through props. A child can send something back by calling a function that the parent passes as a prop. In this project, `App.jsx` passes technology data and the add function to the child components, and the technology card calls that function when the user clicks "Add to Stack".