import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Dev Page");

    }
    async getHtml() {
        return ``
    }
}