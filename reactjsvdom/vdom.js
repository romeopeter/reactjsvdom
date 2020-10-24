/*
 * Create virtual DOM element.
 * Element is parent to child node (text and other elements)
 */

// const headerTag = React.createElement("h1", null, "Hello World!");
/* Added text node to element type */
const headerTag = React.createElement("h1", null, "Hello World!");

/*
 * The code below selects the div element in HTML to render react.
 * Either of the two ways of selecting HTML DOM element works.
 */

// const mountTag = document.getElementById("app");
/* Using query selector */
const mountTag = document.querySelector("#app");

// Render react to in browser
// ReactDOM.render(headerTag, mountTag);

/* Render virtual node then run callback */
ReactDOM.render(headerTag, mountTag, () => alert("Think before reacting!"));
