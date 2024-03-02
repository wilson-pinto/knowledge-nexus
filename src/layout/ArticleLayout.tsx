import { Outlet } from 'react-router-dom'

const ArticleLayout = () => {
    return (
        <>
            <div className="bg-light text-dark py-5">
                <div className="container py-5">
                    <h1 className="display-3">Article Hub</h1>
                    <p className="lead fw-medium mb-0">
                        Explore Diverse Topics and Expand Your Understanding
                    </p>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default ArticleLayout
