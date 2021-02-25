import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Home");
    }

    async getHtml() {
        return `
        <div class=text>
        <h1> Welcome to my web page!</h1>
        <p> You can navigate by using the navigation bar to the left of your screen to see my pages or the links below my descriptions!</p>
            <a href="/devpage" data-link> View My Dev Page</a>.
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