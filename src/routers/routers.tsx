import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import PostPage from "../pages/PostPage";
import UserDetailPage from "../pages/UserDetailPage";

const router = createBrowserRouter([
    {
        element: (
            <>
                <Header />
                <Outlet />
                <Footer />
            </>
        ),
        children: [
            { path: "/", element: <HomePage /> }, 
            { path: "/users/:id", element: <UserDetailPage /> }, 
            { path: "/posts", element: <PostPage /> },       
            { path: "*", element: <NotFoundPage /> }
        ]
    }
])

export default router