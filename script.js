const router = async () => {
    const routes = [
        { path: "/", view: () => console.log("View Home") },
        { path: "/devpage", view: () => console.log("View Dev Page") },
        { path: "/signin", view: () => console.log("View Sign In") }
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

    console.log(match);
};

// Once DOM is loaded up vi kan run this function
document.addEventListener("DOMContentLoaded", () => {
    router();
});