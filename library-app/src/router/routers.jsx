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
import SearchBooks from "../pages/searchBooks";
import Home from "../pages/Home";
import BookInformation from "../pages/BookInformation";
import MyBooks from "../pages/MyBooks";
import EnterThePassword from "../pages/enterThePassword";
import Setting from "../pages/Setting";

export const privateRoutes = [
    {path: '/', element: <About/>, exact: true, name: 'About'},
    {path: '/books', element: <SearchBooks/>, exact: true, name: 'Books'},
    {path: '/home', element: <Home/>, exact: true, name: 'Home'},
    {path: '/books/:id', element: <BookInformation/>, exact: true},
    {path: '/home/myBooks', element: <MyBooks/>, exact: true},
    {path: '/home/enterThePassword', element: <EnterThePassword/>, exact: true},
    {path: '/home/settings', element: <Setting/>, exact: true},
]

export const publicRoutes = [
    {path: '/', element: <About/>, exact: true, name: 'About'},
    {path: '/login', element: <Login/>, exact: true, name: 'Login'},
]