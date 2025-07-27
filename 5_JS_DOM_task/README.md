# JavaScript DOM

### 1. What is **DOM**?

- DOM (Document Object Model) is a programming interface for HTML and XML documents.
- It represents the structure of a document as a tree of nodes (`elements`, `text`, `attributes`, etc.).
- The DOM allows JavaScript to access and manipulate web pages dynamically (e.g., change content, styles, structure).

---

### 2. DOM Tree Structure

- The DOM represents the HTML document as a tree of nodes.
- Example:

```html
<html>
  <body>
    <p>Hello</p>
  </body>
</html>
```

turns into:

```html
Document └──
<html>
  ├──
  <head>
    └──
    <body>
      ├──
      <h1>
        └──
        <p></p>
      </h1>
    </body>
  </head>
</html>
```

- Each HTML element becomes an element node.
- Text inside elements becomes a text node.
- HTML attributes are attribute nodes.

---

### 3. Accessing the DOM

- The `document` object is the entry point to interact with the DOM using JavaScript.

- It represents the entire web page and provides methods to select, inspect, and manipulate elements.

**_Common DOM Selection Methods:_**

| Method                          | Description                                                                                       |
| ------------------------------- | ------------------------------------------------------------------------------------------------- |
| `getElementById(id)`            | Returns the **first element** with the specified `id`. Fast and commonly used.                    |
| `getElementsByClassName(class)` | Returns a **live HTMLCollection** of all elements with the given class name.                      |
| `getElementsByTagName(tag)`     | Returns all elements with the specified tag name (e.g., `div`, `p`).                              |
| `querySelector(selector)`       | Returns the **first element** that matches a **CSS selector** (e.g., `#id`, `.class`, `div > p`). |
| `querySelectorAll(selector)`    | Returns a **static NodeList** of **all** elements that match the CSS selector.                    |

- Example:

```js
const title = document.getElementById("mainTitle");
const buttons = document.querySelectorAll(".btn");
```
* `getElementById()` is ideal when you're targeting a single, unique element.

* `querySelectorAll()` is more powerful and flexible — supports full CSS selectors and returns multiple matches.
---

### 4. DOM CSS

- We can change the style of elements dynamically using JS.

**Inline Style Manipulation:**

```js
element.style.color = "red";
element.style.backgroundColor = "yellow";
```

**Add/Remove CSS Classes:**

```js
element.classList.add("active");                  // Adds a class without removing existing ones.
element.classList.remove("hidden");               // Removes a specific class.
element.classList.toggle("highlight");            // Adds the class if it's missing, or removes it if it's present.
```

**Get Computed Styles:**

- Retrieves the final computed CSS value of an element — including styles from external stylesheets and inherited styles.

- Useful when you want to read actual styles applied to an element, not just inline ones.

```js
let color = window.getComputedStyle(element).color;
```

---

### 5. DOM Forms

- Used to access, read, and manipulate form elements like inputs, checkboxes, selects, and the form itself.

**Access Form Fields:**

```html
<form id="myForm">
  <input type="text" name="username" />
  <input type="submit" />
</form>
```

````js
    const form = document.getElementById("myForm");
    console.log(form.elements["username"].value);```
````

**Other Form-Related Properties:**

- `form.elements` – A collection of all input fields, textareas, selects, and buttons in the form.

- `form.action` – The URL where the form data will be submitted (as defined in HTML).

- `form.method` – The HTTP method used for submission, either `"GET"` or `"POST"`.

These properties allow you to inspect or change form behavior dynamically:

```js
form.action = "https://api.example.com/submit";
form.method = "POST";
```

**Validating Forms:**

```js
form.addEventListener("submit", function (e) {
  if (form.elements["username"].value === "") {
    alert("Username is required!");
    e.preventDefault(); // Stop form submission
  }
});
```

- Attach a `submit` event listener to validate input before sending the form.

- `e.preventDefault()` stops the form from submitting if validation fails.

- This is useful for client-side form validation, ensuring better UX before server processing.

---

### 6. DOM Events

- DOM events are interactions or changes that happen in the browser, either triggered by the user (e.g., clicking a button) or by the browser itself (e.g., page loading).
- Events let JavaScript respond to user actions and make web pages interactive.
- Example:- `click`, `hover`, `input`, `submit`, etc.

**Add Event Listener: `addEventListener(event, handler)`**

- Registers a callback function that runs when the specified event occurs.
- Example:

```js
element.addEventListener("click", function () {
  alert("Clicked!");
});
```

**Common Event Types:**

- `click`, `dblclick`: Mouse click interactions

- `mouseover`, `mouseout`: Hovering in/out of elements

- `keydown`, `keyup`, `keypress`: Keyboard interactions

- `submit`: Form submission

- `change`: Value change in input/select elements

- `focus`, `blur`: When an element gains or loses focus

**Remove Event Listener: `removeEventListener(event, handler)`**

- Detaches a previously attached event listener, using the same function reference.

```js
function handleClick() {
  console.log("Clicked!");
}
btn.addEventListener("click", handleClick);
btn.removeEventListener("click", handleClick);
```

---

### 7. DOM Manipulation

- DOM manipulation means changing the structure, content, or style of HTML elements using JavaScript after the page has loaded.
- It allows dynamic interactivity like adding/removing content, updating UI, etc.

**Changing Text or HTML:**

- Example:

```js
element.textContent = "New Text";
element.innerHTML = "<strong>Bold Text</strong>";
```

- `textContent`: Replaces all text inside the element. Treats content as plain text (ignores HTML).

- `innerHTML`: Replaces content with HTML markup. Use it when you need to insert tags dynamically.

**Create / Add Elements:**

- Example:

```js
const newDiv = document.createElement("div");
newDiv.textContent = "Hello!";
document.body.appendChild(newDiv);
```

- `createElement(tag)`: Creates a new DOM node (not yet attached to the page).

- `appendChild(element)`: Adds the element as the last child of the specified parent (e.g., body or another div).

**Remove Elements:**

- Example:

```js
element.remove();
```

- `remove()`: Deletes the element from the DOM completely.

- Very useful when hiding UI elements permanently (like dismissing a message box).

**Replace Elements:**

- Example:

```js
parent.replaceChild(newElement, oldElement);
```

- Replaces an existing child node (`oldElement`) with a new node (`newElement`) under the same parent.

---

### 8. Attributes and Properties

- In the DOM, attributes are the values defined in the HTML (like href, class, id), and properties are the JavaScript representations of those attributes on the DOM object.
- For example:

```html
<a id="link" href="https://example.com">Visit</a>
```

- Here, `href` is an attribute in HTML. When accessed via JavaScript, it's treated as a property of the `element` object.

**Get Attribute: `element.getAttribute("attrName")`**

- Retrieves the value of the specified attribute exactly as written in HTML.

```js
let link = document.getElementById("link");
console.log(link.getAttribute("href"));
```

**Set Attribute: `element.setAttribute("attrName", "value")`**

- Adds a new attribute or updates the value of an existing attribute.

```js
link.setAttribute("href", "https://facebook.com");
```

**Remove Attribute: `element.removeAttribute("attrName")`**

- Removes the specified attribute from the element.

```js
element.removeAttribute("disabled");
```

**Check for Attribute: `element.hasAttribute("attrName")`**

- Checks if the element has a specific attribute.
- Returns: `true` or `false`.

```js
if (link.hasAttribute("target")) {
  console.log("This link opens in a new tab");
}
```
