import { DocumentTemplate } from "./implementation";

// Create original document
const originalDoc = new DocumentTemplate(
    "Original Title",
    "This is the main content.",
    "This is Footer."
);

console.log("Original Document:");
originalDoc.display();

// Clone the document
const clonedDoc = originalDoc.clone();
clonedDoc.title = "Cloned Document Title";

console.log("Cloned Document (modified title):");
clonedDoc.display();

// Show that the original is unchanged
console.log("Original Document (unchanged):");
originalDoc.display();
