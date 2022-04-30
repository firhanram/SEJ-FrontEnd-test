import { BooksByCategory, Home } from 'pages';
import { Route, Routes } from 'react-router-dom';

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books/category/:categoryID" element={<BooksByCategory />} />
        </Routes>
    );
}

export default Router;
