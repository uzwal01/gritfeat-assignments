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
Document
└── <html>
        ├── <head>
        └── <body>
                ├── <h1>
                └── <p>
```

- Each HTML element becomes an element node.
- Text inside elements becomes a text node.
- HTML attributes are attribute nodes.

---

### 3. Accessing the DOM

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

```js 
    const title = document.getElementById("mainTitle");
    const buttons = document.querySelectorAll(".btn");
```

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
    element.classList.add("active");
    element.classList.remove("hidden");
    element.classList.toggle("highlight");
```

**Get Computed Styles:**

```js
    let color = window.getComputedStyle(element).color;
```

---

### 5. DOM Forms

- Used to access and manipulate HTML form elements.

**Access Form Fields:**

```html
    <form id="myForm">
        <input type="text" name="username" />
        <input type="submit" />
    </form>
```


```js
    const form = document.getElementById("myForm");
    console.log(form.elements["username"].value);```
```

**Other Form-Related Properties:**

- `form.elements` – all form controls

- `form.action` – the action URL

- `form.method` – GET or POST

**Validating Forms:**

```js
    form.addEventListener("submit", function(e) {
        if (form.elements["username"].value === "") {
            alert("Username is required!");
            e.preventDefault(); // Stop form submission
        }
    });
```

---

### 6. DOM Events

- Events are actions that occur in the browser.
- Example:- `click`, `hover`, `input`, etc.

**Add Event Listener:**


```js
    element.addEventListener("click", function() {
        alert("Clicked!");
    });
```


**Common Event Types:**

- `click`, `dblclick`

- `mouseover`, `mouseout`

- `keydown`, `keyup`, `keypress`

- `submit`, `change`, `focus`, `blur`

**Remove Event Listener:**


```js
    function handleClick() {
        console.log("Clicked!");
    }
    btn.addEventListener("click", handleClick);
    btn.removeEventListener("click", handleClick);
```


---

### 7. DOM Manipulation
* DOM manipulation means changing the structure, content, or style of HTML elements using JavaScript after the page has loaded.
* It allows dynamic interactivity like adding/removing content, updating UI, etc.
**Changing Text or HTML:**
* Example:
```js
    element.textContent = "New Text";
    element.innerHTML = "<strong>Bold Text</strong>";
```
- `textContent`: Replaces all text inside the element. Treats content as plain text (ignores HTML).

- `innerHTML`: Replaces content with HTML markup. Use it when you need to insert tags dynamically.

**Create / Add Elements:**
* Example:
```js
    const newDiv = document.createElement("div");
    newDiv.textContent = "Hello!";
    document.body.appendChild(newDiv);
```
- `createElement(tag)`: Creates a new DOM node (not yet attached to the page).

- `appendChild(element)`: Adds the element as the last child of the specified parent (e.g., body or another div).

**Remove Elements:**
* Example:
```js
    element.remove();
```
- `remove()`: Deletes the element from the DOM completely.

- Very useful when hiding UI elements permanently (like dismissing a message box).

**Replace Elements:**
* Example:
```js
    parent.replaceChild(newElement, oldElement);
```
- Replaces an existing child node (`oldElement`) with a new node (`newElement`) under the same parent.


---

### 8. Attributes and Properties
* In the DOM, attributes are the values defined in the HTML (like href, class, id), and properties are the JavaScript representations of those attributes on the DOM object.
* For example:

```html
    <a id="link" href="https://example.com">Visit</a>
```
*  Here, `href` is an attribute in HTML. When accessed via JavaScript, it's treated as a property of the `element` object.

**Get Attribute: `element.getAttribute("attrName")`**
* Retrieves the value of the specified attribute exactly as written in HTML.
```js
    let link = document.getElementById("link");
    console.log(link.getAttribute("href")); 
```

**Set Attribute: `element.setAttribute("attrName", "value")`**
* Adds a new attribute or updates the value of an existing attribute.
```js
    link.setAttribute("href", "https://openai.com");
```
**Remove Attribute: `element.removeAttribute("attrName")`**
* Removes the specified attribute from the element.
```js
    element.removeAttribute("disabled");
```

**Check for Attribute: `element.hasAttribute("attrName")`**
* Checks if the element has a specific attribute.
* Returns: `true` or `false`.
```js
    if (link.hasAttribute("target")) {
        console.log("This link opens in a new tab");
    }
```