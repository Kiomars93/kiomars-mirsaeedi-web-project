import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Dev Page");
    }

    async getHtml() {
        return `
        <h1> Thank you for visiting my page, here is a little info about me! </h1>
        <p id="demo"></p>
        <script type="module" src="/devcontent.js"></script>
        `
    }
}