class Example {
    message: string;
    constructor(message: string) {
        this.message = message;
    }

    getMessage() {
        return `Message value: ${this.message}`;
    }
}

export default Example;
