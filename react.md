# ASSESSMENT 4: REACT ASSESSMENT
## Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.  

1. Correctable True/False: Mark the following TRUE or FALSE. If FALSE, correct the statement to be TRUE.

- React is a modern, efficient answer to complex UI applications (true/false)
  True

- React will only render on the server using Node.js (true/false)
  False, yarn start can be used to render the react app on a web browser

- React is a full stack framework for modern web applications (true/false)
  True

- React is a flexible library that plays the role of V in an MVC framework (true/false)
  Research: False, React isn’t an MVC framework. React is a library for building composable user interfaces. It encourages the creation of reusable UI components which present data that changes over time.

- You should always update a component's state directly using this.state (true/false)
  False, to update a componenet you use this.setState

- React is made up of encapsulated components that manage their own state (true/false)
  True

- React components render HTML (true/false)
  False, they render in JSX

2. What are "smart" and "dumb" components? Explain the difference and also add why we bother to make the distinction between them.

  Your answer:
  Smart components are created with the intent of being able to change their values.
  Dumb components will always keep the same value and can not be changed.
  It is important to make the distinction because they each serve different purposes.

  Researched answer:
  Smart components are app level components that perform functions and manage data while dumb components focus solely on the UI.


3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?

  Your answer:
  When you want to add something to the current directory

  Researched answer:
  Installs a package and any packages that it depends on into your packages.


4. What is the difference between component state and props? Your answer should include a short explanation of both.

  Your answer:
  State is when you are referring to an object that was initiliazed in the current component, making it a local component.
  Props is used when you are referring to an object that was initialized in another component.

  Researched answer:
  In a React component, props are variables passed to it by its parent component. State on the other hand is still variables, but directly initialized and managed by the component.


5. How would you explain state to a friend who doesn't know code?

  Your answer:
  If you had two different boxes, Box1 and Box2, items that are made inside the box are referred to as state because they belong to that box.