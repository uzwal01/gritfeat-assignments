import { OldPrinter, OldPrinterAdapter, NewPrinter } from "./implementation";

// Create an old printer
const legacyPrinter = new OldPrinter();

// Adapt it to the new interface
const adaptedPrinter: NewPrinter = new OldPrinterAdapter(legacyPrinter);

// Use it as if it were a NewPrinter
adaptedPrinter.print("Hello from the new interface.");