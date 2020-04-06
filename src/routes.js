
// import {Router,Route,Link} from "svelte-routing";
import Dashboard from "./Dashboard.svelte"
import App from "./App.svelte"

// import Router from "svelte-spa-router"
const routes=[
    {name:'/',
component:App}
   ,  {name:'dashboard',
   component:Dashboard}
    // '*':Post
]
// export let url=""

export {routes}
// <!-- <Router url="{url}">
// <Link to="">Home</Link>
// <Link to="ap">dashboard</Link>
// <div>
// <Route path="/" component="{App}" />
// <Route path="ap" component="{Post} "/></div>
// </Router> -->