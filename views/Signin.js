import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Sign in");

    }


    async getHtml() {
        return `
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <!-- <link rel="icon" href="Images/logo.png" type="image/icon type" /> -->
    <style>
        h1 {
            margin: 2em 0;
        }
    </style>
    <!-- widget stuff here -->
    <script src="https://global.oktacdn.com/okta-signin-widget/5.3.3/js/okta-sign-in.min.js"
        type="text/javascript"></script>
    <link href="https://global.oktacdn.com/okta-signin-widget/5.3.3/css/okta-sign-in.min.css" type="text/css"
        rel="stylesheet" />
    <div class="container">
        <h1 class="text-center">Simple Web Page</h1>
        <div id="messageBox" class="jumbotron">
            You are not logged in. Get outta here! Shoo! >:S
        </div>
        <!-- where the sign-in form will be displayed -->
        <div id="okta-login-container"></div>
        <button id="logout" class="button" onclick="logout()" style="display: none">Logout</button>
    </div>
    
        `
    }

}