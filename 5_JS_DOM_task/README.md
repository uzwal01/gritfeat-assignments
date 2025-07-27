# JavaScript DOM

1. What is **DOM**?

- DOM (Document Object Model) is a programming interface for HTML and XML documents.
- It represents the structure of a document as a tree of nodes (`elements`, `text`, `attributes`, etc.).
- The DOM allows JavaScript to access and manipulate web pages dynamically (e.g., change content, styles, structure).

---

2. DOM Tree Structure

- The DOM represents the HTML document as a tree of nodes.
- Example:

```html
<html>
  <body>
    <p>Hello</p>
  </body>
</html>


turns into:

<!-- Document
└── <html>
├── <head>
└── <body>
├── <h1>
└── <p> -->


- Each HTML element becomes an element node.
- Text inside elements becomes a text node.
- HTML attributes are attribute nodes.

---

3. Accessing the DOM

- The `document` object is the root of the DOM in JavaScript.

**_Common DOM Selection Methods:_**

| Method                          | Description                                                   |
| ------------------------------- | ------------------------------------------------------------- |
| `getElementById(id)`            | Selects an element by its ID                                  |
| `getElementsByClassName(class)` | Returns a live HTMLCollection of all elements with that class |
| `getElementsByTagName(tag)`     | Returns elements by tag name                                  |
| `querySelector(selector)`       | Returns the first element that matches the CSS selector       |
| `querySelectorAll(selector)`    | Returns a static NodeList of all matching elements            |

- Example:

`const title = document.getElementById("mainTitle");`
`const buttons = document.querySelectorAll(".btn");`

---

4. DOM CSS

- We can change the style of elements dynamically using JS.

**Inline Style Manipulation:**

- `element.style.color = "red";`
- `element.style.backgroundColor = "yellow";`

**Add/Remove CSS Classes:**

- `element.classList.add("active");`
- `element.classList.remove("hidden");`
- `element.classList.toggle("highlight");`

**Get Computed Styles:**

- `let color = window.getComputedStyle(element).color;`

---

5. DOM Forms

- Used to access and manipulate HTML form elements.

**Access Form Fields:**

<pre>
    <form id="myForm">
        <input type="text" name="username" />
        <input type="submit" />
    </form>
</pre>

<pre>
    ```const form = document.getElementById("myForm");
    console.log(form.elements["username"].value);```
</pre>

**Other Form-Related Properties:**

- `form.elements` – all form controls

- `form.action` – the action URL

- `form.method` – GET or POST

**Validating Forms:**

<pre>
    ```form.addEventListener("submit", function(e) {
  if (form.elements["username"].value === "") {
    alert("Username is required!");
    e.preventDefault(); // Stop form submission
  }
});```
</pre>

---

6. DOM Events

- Events are actions that occur in the browser.
- Example:- `click`, `hover`, `input`, etc.

**Add Event Listener:**

<pre>
    ```element.addEventListener("click", function() {
  alert("Clicked!");
});```

</pre>


**Common Event Types:**

- `click`, `dblclick`

- `mouseover`, `mouseout`

- `keydown`, `keyup`, `keypress`

- `submit`, `change`, `focus`, `blur`

**Remove Event Listener:**

<pre>
    ```function handleClick() {
  console.log("Clicked!");
}
btn.addEventListener("click", handleClick);
btn.removeEventListener("click", handleClick);```
</pre>


***

7. DOM Manipulation

**Changing Text or HTML:**

- `element.textContent = "New Text";`
- `element.innerHTML = "<strong>Bold Text</strong>";`

**Create / Add Elements:**

<pre>
    ```const newDiv = document.createElement("div");
newDiv.textContent = "Hello!";
document.body.appendChild(newDiv);```

</pre>

**Remove Elements:**

- `element.remove();`

**Replace Elements:**

- `parent.replaceChild(newElement, oldElement);`


***

8. Attributes and Properties


