import { createBrowserRouter } from "react-router-dom";
import ArticleList from "../pages/ArticleList";
import ArticleDetail from "../pages/ArticleDetail";
import { Navigate } from 'react-router-dom';
import ArticleLayout from "../layout/ArticleLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to='/article' />, //Redirect to article
    },
    {
        element: <ArticleLayout />,
        children: [
            {
                path: "/article",  // mapping for article listing page
                element: <ArticleList />,
            },
            {
                path: "/article/:id/:slug", // mapping for article detail page
                element: <ArticleDetail />,
            }
        ]
    },

]);

export default router