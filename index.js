// We will use this in stead of the console.log("View Home") line "ADJUST the explanation"
import Home from "./views/Home.js";
import Devpage from "./views/Devpage.js";
import Signin from "./views/Contact.js";
//  EXPLAIN
const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}

const router = async () => {
    const routes = [
        { path: "/", view: Home },
        { path: "/devpage", view: Devpage },
        { path: "/contact", view: Signin }
        // { path: "/", view: () => console.log("View Home") },
        // { path: "/devpage", view: () => console.log("View Dev Page") },
        // { path: "/signin", view: () => console.log("View Sign In") }
    ];

    // test each for potetian match
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    });

    // This line shows the url path that is correctly matched
    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

    // If we don't find any matches then we will be redirected to the index route
    if (!match) {
        match = {
            route: routes[0],
            isMatch: true
        };
    }

    const view = new match.route.view();

    document.querySelector("#app").innerHTML = await view.getHtml();

    // console.log(match.route.view());
};

// The function below shows how  
window.addEventListener("popstate", router);

// Once DOM is loaded up vi kan run this function
// EXPLAIN MORE ******** You don't refresh the pages anymore
document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    })
    router();
});
