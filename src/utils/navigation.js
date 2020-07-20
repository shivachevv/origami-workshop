const getNavigation = (id) => {
    return [
        {
            title: "Publicatons",
            path: "/"
        },
        {
            title: "Share your thoughts",
            path: "/share"
        },
        {
            title: "Profile",
            path: `/profile/${id}`
        },
        {
            title: "Register",
            path: "/register"
        },
        {
            title: "Login",
            path: "/login"
        },
        {
            title: "Logout",
            path: "/logout"
        },
    ]
}



export default getNavigation