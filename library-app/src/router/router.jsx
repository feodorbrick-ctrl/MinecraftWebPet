//
// export const privateRoutes = [
//     {path: '/about', component: <About/>, exact: true},
//     {path: '/posts', component: <Posts/>, exact: true},
//     {path: '/posts/:id', component: <PostIdPage/>, exact: true},
//     {path: '/', component: <Home/>, exact: true},
// ]
//
// export const publicRoutes = [
//     {path: '/login', component: <Login/>, exact: true},
//     {path: '/about', component: <About/>, exact: true},
// ]
import About from "../pages/About";
import Login from "../pages/Login";

export const privateRoutes = []

export const publicRoutes = [
    {path: '/', element: <About/>, exact: true, name: 'About'},
    {path: '/login', element: <Login/>, exact: true, name: 'Login'},
]