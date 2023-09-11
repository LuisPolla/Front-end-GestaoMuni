import { BrowserRouter, Routes as Router, Route } from 'react-router-dom';

import { Login, Gestao } from './pages';

export function Routes() {
    return (
        <BrowserRouter>
            <Router>
                <Route path={'/'} index element={<Login />} />
                <Route path={'/gestao'} element={<Gestao />} />
            </Router>
        </BrowserRouter>
    );
}
