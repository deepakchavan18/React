# React Notes 

## RoadMap

### **Why to Learn React**
- Hype ,Job , Trend , Build UI
- Makes easy to manage & <u>**build complex front-end**</u>

### **When to learn React**
- After mastering JS 

### **When React was Created**
- when variables and DOM were not able to communicate easily 
- Syncing problem 

### **React Learning Process**
- Go in Depth <br/>
By learning topics like Babel , Fibre , Virtual DOM , Diffing Algorithm , Hydration

- By making Projects <br/>
Todo , Calculator , Github API
<br>

> We can select any path to learn React we can either choose Depth study and then shift to projects or we can directly start working on projects and simultaneously learn the concepts further 

### **React Features**
- Virtual DOM
- Components
- Simplicity
- Performance
- Flexible

### **What is React** 
- React is a JavaScript library for building user interfaces
- React is a view library, not a full-fledged framework like Angular or Vue.js
- Basically, React is an SPA ( Singe Page Application )


### **Topics to Learn** 
- Core of React { State or UI Manipulation , **<u>JSX</u> ( writing Html code in JS )** }
- Components Reusability
- Reusing of Components **(Properties such as Keys and Values )**
- How to propogate changes ( change of variable in not updated in UI so its done through - **<u>hooks</u>** )
- ### **Additional Addon to React** 
- Router ( React dont have Router , It's an additional Package - React-Router-DOM )
- State Management ( React don't have state Management )<br>
-Library - Redux, Redux Toolkit , zustand , context API
- Class Based Component - Legacy Code 
- BAAS Apps ( Backend-as-a-Service ) 
<br>Apps that use this - Appwrite , Firebase , Superbase <br> We make - social media clone , e-commerce App <br>
<a>freeapi.app</a>


### **To Run React Project**

#### **Create using default React App**

**npm** ( node package manager  ) - to install the library <br>
**npx** ( node package executor ) - to execute the library

React app is bulky and gives big bundle and has more packages size
so,bundler like  vite or parcel is used 

1. ``` create-react-app folder_name```
- Script helps to run the project or to make it ready for production level<br>
    -    **start** -  to run the project in development environment 
    -    **build** - to deploy the project in production level 
    -   **test** - to run the test cases 
    -   **eject** - to eject the application from the react , when we want to use other library or framework

2. check <u>package.json</u> file should be present in the folder if it's not then run the command <br>``` npm i```<br>or<br>``` npm install ```

3. To run the Project <br> ``` npm run start ```

4. To build the project <br>
build helps to generate an build folder , so when the Application is ready for production deployment build folder is serverd to all the users rather than source
<br> ```npm run build``` 

#### **Create Application using Vite**

- Go to vite official website - 
<a>vitejs.dev</a>

1. ```npm create vite@latest```
<br> - Give the project name 
<br> - Select Framework - **react**
<br> - Select Varient - **javascript**

2. check <u>package.json</u> file should be present in the folder if it's not then run the command <br>``` npm i```<br>or<br>``` npm install ```

3. To run <br> ```npm run dev```


###  **Key Points**

1. in Vite all the js files should have an extension as (.jsx)
2. In jsx rule we can return only one element so to return multiple element we can use div and if we dont want to use the div we can use 
<br> <> empty known as fragment 

3. Either we work with React or Vite the function names should be Capatalize

4. Capatalize the file names in the project

5. If the html is being returned in the file , the file should be in the ( .jsx ) format


### **Hooks** 
Hooks are special functions in React that let you use state and other React features without writing a class. They are the new way to write React components using functional components, making your code cleaner and easier to understand.

- Common Hooks:
    1. **useState:** Allows you to add state to a functional component.
        - It lets you add a state variable to your component.
        </br> Syntax : ```const [state, setState] = useState(initialValue);```</br>
        Example 
        - count: The current count value.
        - setCount: Updates the count value when the button is clicked.
        ```javascript  
            import { useState } from 'react';

            function Counter() {
            const [count, setCount] = useState(0); // Initial value is 0

            return (
                <div>
                <p>You clicked {count} times</p>
                <button onClick={() => setCount(count + 1)}>Click me</button>
                </div>
            );
            }
        ```
    2. **useEffect:** Allows you to run side effects (e.g., fetching data, updating DOM).
        - It lets you perform side effects in function components (like fetching data or manipulating the DOM)
        - Syntax ``` useEffect(() => {
                    // side effect code here
                    }, [dependency]);```
        - Runs the effect after rendering.
        - If dependency changes, the effect will re-run.

    3. **useContext:** Allows you to use context for managing global state.
        - It allows components to share data (or "context") without passing props down manually at every level.
        - It returns the current context value for that context.
        - Syntax : 
        ```const value = useContext(MyContext);```


### **React Fiber Architecture**
<a>https://github.com/acdlite/react-fiber-architecture</a>
- React Fiber is a new architecture for React that was introduced in React 16. It's a way 
to optimize the rendering of components by breaking them down into smaller, more manageable pieces. 
- **React Fiber architecture** is a reimplementation of React's core algorithm that allows for more efficient rendering of the virtual DOM. It's designed to make React better for animations, gestures, and layout

- #### What is Reconciliation ?
    Reconciliation refers to the process of determining how the UI should be updated when a component's state or props change. React compares the previous state of the Virtual DOM with the new state to figure out the minimal number of changes required to update the actual DOM efficiently.

### **Tailwind and Props** 
Tailwind CSS is an open-source CSS framework that helps you style websites using HTML without external CSS. It's designed to help you build custom user interfaces and responsive designs faster and easier

<a>https://tailwindcss.com/</a>

**To Create Project with Vite follow these Steps :**
1. visit - https://tailwindcss.com/docs/guides/vite

2. Create your Project of vite as ususal </br>
```> npm create vite@latest my-project -- --template react```</br>
```> cd my-project```

3. Install Tailwind CSS </br>
```> npm install -D tailwindcss postcss autoprefixer```</br>
This installs the Tailwind <br/>
```> npx tailwindcss init -p```<br/>
Tailwind CSS config file is created - tailwind.config.js

4. Configure your template paths
    ```javascript 
    /** @type {import('tailwindcss').Config} */
    export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
    }
    ```

5. Add the Tailwind directives to your CSS
</br>Go to <a>./src/index.css</a> and add these decorator injectors 
    ```tailwind 
    @tailwind base;
    @tailwind components;
    @tailwind utilities; 
    ```

6. Start your build Process </br>
`> npm run dev`

7. Start using Tailwind in your project

#### **Props** 
Props is a special keyword in React that stands for properties and is used for passing data from one component to another. Data with props are passed in a unidirectional flow from parent to child


### **useCallBack**
- useCallback is a React Hook that lets you cache a function definition between re-renders.
- useCallback is a hook that allows you to memoize a function, meaning it returns the same function reference across multiple renders as long as its dependencies remain the same. This is useful for optimizing performance and preventing unnecessary re-renders in certain situations.



### **Hooks**
`https://daily.dev/blog/react-hooks-explained-simply` <br/>
React Hooks are like special tools that let you add features such as keeping track of data (state) and doing things when your component loads or updates, all from within function components. This means you can do a lot without needing to write class components.
- They are just functions - But they have to follow two rules:
- You can only use them inside function components.
- You have to use them at the top of your component, not inside loops or conditions.
- They let function components have their own state - With the `useState` hook, your components can remember things and change what they show based on that memory.
- You can share logic between components - By making your own hooks, you can take some logic about state out of your components and use it elsewhere. This is handy for things like fetching data.


### **useState**
The `useState` Hook lets you keep track of data in your components
```js
import { useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0); 
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```
In this example, `useState(0)` starts the `count` at 0. The `setCount` function updates it. `useState` gives back an array with the current state and a function to change it, which is why we use array destructuring to get `count` and `setCount`.


### **useEffect**
The `useEffect` Hook lets you do things after your component renders. For example, you can fetch data, set up subscriptions, or manually change the DOM.

``` js
import { useState, useEffect } from 'react';

function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  //
}
```
`useEffect` needs two things: a function to run and an array of values it depends on. If the array is empty `[]` , it means the effect runs only once when the component is first shown and when it goes away.




### **Router** 
Link - https://reactrouter.com/en/main

#### What is Router ?
In React JS, a router is a library that enables navigation between different views or components in a single-page application (SPA). It allows you to define routes, which are essentially mappings between URLs and specific components. When the URL changes, the router determines which component should be rendered based on these defined routes.

#### Key Components of React Router:
- BrowserRouter: The core component that wraps your application, enabling routing functionality.
- Routes: A component that defines a collection of routes.
- Route: A component that defines a single route, mapping a URL path to a specific component.
- Link: A component that creates links to navigate between different routes.

```js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
```


### **Link**
A `<Link>` is an element that lets the user navigate to another page by clicking or tapping on it. In react-router-dom, a `<Link>` renders an accessible `<a>` element with a real href that points to the resource it's linking to. This means that things like right-clicking a `<Link>` work as you'd expect. You can use `<Link reloadDocument>` to skip client side routing and let the browser handle the transition normally (as if it were an `<a href>`).
<br/>
```js
import * as React from "react";
import { Link } from "react-router-dom";

function UsersIndexPage({ users }) {
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={user.id}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

### **Navlink**
A <NavLink> is a special kind of <Link> that knows whether or not it is "active", "pending", or "transitioning". This is useful in a few different scenarios:
- When building a navigation menu, such as a breadcrumb or a set of tabs where you'd like to show which of them is currently selected
- It provides useful context for assistive technology like screen readers
- It provides a "transitioning" value to give you finer-grained control over    
  Loader
<br/>
``` js
import { NavLink } from "react-router-dom";

<NavLink
  to="/messages"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
  Messages
</NavLink>;
```


### Context API and Redux 

Context API and Redux are both state management tools for React applications that help share data between components

#### Context API
- What it is: A tool built into React that helps you share data (like user info, themes, or settings) across multiple components in your app without having to pass that data through props at every level.
- Why it's useful: It solves the problem of "prop drilling," where you have to pass the same data through many components. With Context API, you can just "provide" the data at a high level and "consume" it anywhere in your app.
- When to use it: It's great for simple apps or situations where you need to share a few pieces of data across multiple components. 

#### Redux
- What it is: An external library that helps manage a more complex state in your app. It provides a central place called a "store" where all your app's data is kept, and a structured way to update that data.
- Why it's useful: In large applications with lots of state (like user data, form data, etc.), it can become difficult to keep track of everything. Redux helps you manage all the state in one place, making it easier to organize and debug.
- When to use it: It's better for bigger apps with a lot of complex state changes and interactions, like e-commerce platforms or social media apps.