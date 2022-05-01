import { BookmarkProvider } from 'contexts/bookmarkContext';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import Router from 'routes';
import 'styles/global.css';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <QueryClientProvider client={queryClient}>
            <BookmarkProvider>
                <Router />
            </BookmarkProvider>
        </QueryClientProvider>
    </BrowserRouter>
);
