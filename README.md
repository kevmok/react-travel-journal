# Travel Journal Built with React

Lightweight React app that takes in an "API" and generates components from the data retrieved.
In this project that API is just a file called "data.js" that export a list with 3 objects that contain the data for each component.

## Overview

### The Goal

User should be able to:

-   [x] Change the "API" data and modify the components generated
-   [x] Add more travel locations

### Demo

[Website Demo](https://react-travel-journal.vercel.app/)

## Screenshot

![App Screenshot](https://i.imgur.com/2AIplBD.jpg)

## My process

### Built with

-   React
-   HTML markup
-   CSS
-   Javascript
-   JSX

### What I learned

-   How to work with a "fake" API and objects with React
-   Mapping arrays to show multiple components
-   The usage of props
-   Manipulating data

```jsx
// Imported data array with objects
import Navbar from './components/navbar';
import Main from './components/main';
import data from './data';

// React allows the user to display multiple components by mapping an array
// that returns a component for each item in the array.
function App() {
    const travelData = data.map((item) => {
        return <Main key={item.id} {...item} />;
    });

    return (
        <div>
            <Navbar />
            {travelData}
        </div>
    );
}
```

## Installation

Clone this repository and install the dependencies...

```bash
  git clone https://github.com/kevmok/svelte-developer-card.git my-app
  cd my-app
  npm install
```

```bash
npm run start
```

## Author

-   Website - [kevinmok.com](https://kevinmok.com)
-   GitHub - [@kevmok](https://www.github.com/Kevmok)
-   Twitter - [@hustlerBoxer](https://twitter.com/hustlerBoxer)

## Acknowledgements

-   [Scrimba](https://scrimba.com) - For the guidance and incredible courses
