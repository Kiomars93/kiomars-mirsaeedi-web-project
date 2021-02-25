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
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus accusantium inventore in error tempore voluptatum fuga deleniti, delectus consequuntur</p>
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