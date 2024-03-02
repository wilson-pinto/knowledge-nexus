import { createBrowserRouter } from "react-router-dom";
import ArticleList from "../pages/ArticleList";
import ArticleDetail from "../pages/ArticleDetail";
import { Navigate } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to='/article' />, //Redirect to article
    },
    {
        path: "/article", // mapping for article listing page
        element: <ArticleList />,
    },
    {
        path: "article/:id/:slug", // mapping for article detail page
        element: <ArticleDetail />,
    },
]);

export default router