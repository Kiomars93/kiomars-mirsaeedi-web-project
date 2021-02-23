import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Contact");

        async function getUsers() {
            let url = 'users.json';
            try {
                let res = await fetch(url);
                return await res.json();
            } catch (error) {
                console.log(error);
            }
        }

        getUsers();

        async function renderUsers() {
            let users = await getUsers();
            let html = '';
            users.forEach(user => {
                let htmlSegment = `<div class="user">
                                    <img src="${user.profileURL}" width=100 height=100>
                                    <h2>${user.firstName} ${user.lastName}</h2>
                                    <div class="email"><a href="email:${user.email}">${user.email}</a></div>
                                </div>`;
                html += htmlSegment;
            });

            let container = document.querySelector('.container');
            container.innerHTML = html;
        }

        renderUsers();
    }

    async getHtml() {
        return `<div class="container"></div>`
    }
}