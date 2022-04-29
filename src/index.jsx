import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Router from 'routes';
import 'styles/global.css';

ReactDOM.render(
    <BrowserRouter>
        <Router />
    </BrowserRouter>,
    document.getElementById('root')
);
