"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todo = void 0;
class Todo {
    constructor({ text, complete } = { complete: false }) {
        this.id = this.uuidv4();
        this.text = text;
        this.complete = complete;
    }
    uuidv4() {
        return ((1e7 + -1e3 + -4e3 + -8e3 + -1e11).toString()).replace(/[018]/g, c => (+c ^
            (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (+c / 4)))).toString(16));
    }
}
exports.Todo = Todo;
