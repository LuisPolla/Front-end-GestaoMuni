import styles from './styles.module.css';
export function Header({ title, navbar }) {
   
    return (
        <header className={styles.header}>
            <div className={styles.content}>
                <img className={styles.logo} src="/logo.svg"/>
                <h1>{title.toUpperCase()}</h1>
                <div></div>
            </div>
            {navbar && (
                <navbar className={styles.navbar}>
                    <ul>
                        <li className={styles.li}><a href="/home" >Início</a></li>
                        <li className={styles.li}><a href="/historico">Histórico</a></li>
                        <li className={styles.li}><a href="/">Sair</a></li>
                    </ul>                  
                </navbar>
            )}
            </header>
    );
}
