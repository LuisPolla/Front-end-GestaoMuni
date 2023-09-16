import { BrowserRouter, Routes as Router, Route, Navigate } from 'react-router-dom';
import { Login, Gestao, Home, Historico, Perfil } from './pages';

const isAuthenticated = () => {
    const accessToken = localStorage.getItem('accessToken');
    return !!accessToken;
}

export function PrivateRoute({ children }) {
    if (!isAuthenticated()) {
        return <Navigate to="/" replace />
    }
    return children;
}

export function Routes() {
    const navigateTo = (path) => {
        return <Navigate to={path} />;
    };

    return (
        <BrowserRouter>
            <Router>
                <Route path={'/'} element={<Login navigateTo={navigateTo} />} />
                <Route path={'/gestao'} element={
                    <PrivateRoute>
                        <Gestao />
                    </PrivateRoute>
                } />
                <Route path={'/home'} element={
                    <PrivateRoute>
                        <Home />
                    </PrivateRoute>
                } />
                <Route path={'/perfil'} element={
                    <PrivateRoute>
                        <Perfil />
                    </PrivateRoute>
                } />
                <Route path={'/historico'} element={
                    <PrivateRoute>
                        <Historico />
                    </PrivateRoute>
                } />
            </Router>
        </BrowserRouter>
    );
}
