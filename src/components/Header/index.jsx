import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';

export function Header({ title, navbar }) {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <header className={styles.header}>
            <div className={styles.content}>
                <img className={styles.logo} src="/logo.svg" alt="Logo" />
                <h1>{title.toUpperCase()}</h1>
            </div>
            {navbar && (
                <nav className={styles.navbar}>
                    <ul>
                        <li className={styles.li} onClick={() => handleNavigation('/home')}>
                            Início
                        </li>
                        <li className={styles.li} onClick={() => handleNavigation('/historico')}>
                            Histórico
                        </li>
                        <li className={styles.li} onClick={() => handleNavigation('/')}>
                            Sair
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
}
