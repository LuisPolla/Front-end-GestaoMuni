import { AuthContextProvider } from './contexts/AuthContext';
import { MunicaoContextProvider } from './contexts/MunicaoContext';
import { Routes } from "./routes";

export function App() {
    return (
        <AuthContextProvider>
            <MunicaoContextProvider>
                <Routes />
            </MunicaoContextProvider>
        </AuthContextProvider>
    );
}
