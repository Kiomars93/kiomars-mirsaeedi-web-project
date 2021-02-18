import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Sign In");
    }


    async getHtml() {
        return `
        <h1> You can log in to your account here! </h1>
        <p>
            <a href="/signin" data-link> View My Sign in Page</a>.
        </p>
        `
    }

}