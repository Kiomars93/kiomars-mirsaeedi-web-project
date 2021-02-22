import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Home");
    }


    async getHtml() {
        return `
        <h1> Welcome back, Kio</h1>
        <p>
            <a href="/devpage" data-link> View My Dev Page</a>.
        </p>
        `
    }
}