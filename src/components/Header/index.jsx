import styles from './styles.module.css';

import { Tabs, Tab } from 'react-bootstrap';

export function Header({ title, navbar }) {
    return (
        <header className={styles.header}>
            <div className={styles.content}>
                <img className={styles.logo} src="/logo.svg" />
                <h1>{title.toUpperCase()}</h1>
                <div></div>
            </div>
            {navbar && (
                <navbar className={styles.navbar}>
                    <ul>
                        <li><a href="">Início</a></li>
                        <li><a href="">Histórico</a></li>
                        <li><a href="">Sair</a></li>
                    </ul>
                </navbar>
            )}
            
        </header>
    );
}
