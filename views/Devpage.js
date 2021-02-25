import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Dev Page");

    }
    async getHtml() {
        return `
        <div class="text">
        <h1> This is my developer page </h1>
        <div class="pic">
        <img src="/Img/Kio.jpg" width=100 height=100>
        </div>
        <p>My name is Kiomars Mirsaeedi, I am 27 years old, I live in gothenburg city.
        I love to code, training, dance and music aside from programming.</p>
            <a href="/contact" data-link> View My Contacts</a>.
        </div>
        <style>
         .text {
            color: aqua;
             text-align: center;
            }
            body{
                color: white;
            }
        </style>
        `
    }
}