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
            <div>
                <Tabs
                    defaultActiveKey={"login"}
                    transition={true}
                    className='w-50 mt-5'
                    variant="pills"
                >
                    <Tab eventKey={"login"} title="Entrar">
                        <p>Form entrar</p>
                    </Tab>
                    <Tab eventKey={"register"} title="Cadastrar">
                        <p>Form Cadastrar</p>
                    </Tab>
                </Tabs>
            </div>
        </header>
    );
}
