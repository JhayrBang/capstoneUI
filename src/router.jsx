import Home from "./Layouts/Home";
import Login from "./Layouts/Login";
import Profile from "./Layouts/Profile";
import Register from "./Layouts/Register";


const routes = [
    {
        name: "Home",
        canBeIncludedOnHeader: true,
        path: "/",
        element: <Home />
    },
    {
        name: "Profile",
        canBeIncludedOnHeader: false,
        path: "/profile/:id",
        element: <Profile />
    },
    {
        name: "Login",
        canBeIncludedOnHeader: true,
        path: "/login",
        element: <Login />
    },
    {
        name: "Register",
        canBeIncludedOnHeader: true,
        path: "/register",
        element: <Register />
    },
    
];

export default routes