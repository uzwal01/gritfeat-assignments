export class DocumentTemplate {
    constructor(
        public title: string,
        public content: string,
        public footer: string
    ) {}

    public clone(): DocumentTemplate {
        // Return a new DocumentTemplate with the same values
        return new DocumentTemplate(this.title, this.content, this.footer);
    }

    public display(): void {
        console.log(`Title: ${this.title}`);
        console.log(`Content: ${this.content}`);
        console.log(`Footer: ${this.footer}`);
        console.log("------------------------");

    }
}