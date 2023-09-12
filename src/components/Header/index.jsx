import styles from './styles.module.css';

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
                        <li><a href="http://localhost:5173/">Sair</a></li>
                    </ul>
                    <div className={styles.userImg}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="114" height="114" viewBox="0 0 114 114" fill="none">
                    <circle cx="57" cy="57" r="57" fill="#D9D9D9" fill-opacity="0.8"/>
                    <path d="M57.5646 46.1615C66.1697 46.1615 73.1454 39.1858 73.1454 30.5808C73.1454 21.9757 66.1697 15 57.5646 15C48.9596 15 41.9839 21.9757 41.9839 30.5808C41.9839 39.1858 48.9596 46.1615 57.5646 46.1615Z" stroke="black" stroke-width="7.79038" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M92.6212 92.9038C92.6212 73.5425 76.9257 57.8471 57.5645 57.8471C38.2033 57.8471 22.5078 73.5425 22.5078 92.9038" stroke="black" stroke-width="7.79038" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </div>
                    
                </navbar>
            )}
            
        </header>
    );
}
