// Old class with an incompatible interface
export class OldPrinter {
    public printText(text: string): void {
        console.log(`Old Printer printing: ${text}`);
    }
}

// New interface expected by the app
export interface NewPrinter {
    print(message: string): void;
}

// Adapter class that makes OldPrinter compatible with NewPrinter
export class OldPrinterAdapter implements NewPrinter {
    private oldPrinter: OldPrinter;

    constructor(oldPrinter: OldPrinter) {
        this.oldPrinter = oldPrinter;
    }

    public print(message: string): void {
        this.oldPrinter.printText(message);
    }
}