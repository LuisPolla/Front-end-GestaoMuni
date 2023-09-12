import React from 'react';
import { Header } from "../../components";
import { Tab, Tabs, Button } from 'react-bootstrap';
import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom'; // Importe useNavigate

export function Login() {
  const navigate = useNavigate(); // Crie uma instância de navigate

  const handleLoginClick = () => {
    // Redireciona para a rota desejada ao clicar no botão Login
    navigate('/gestao'); // Substitua '/gestao' pela rota que deseja redirecionar
  };

  const handleRegisterClick = () => {
    // Redireciona para a rota desejada ao clicar no botão Register
    navigate('/home'); // Substitua '/home' pela rota que deseja redirecionar
  };

  return (
    <div>
      <Header title="Arsenal de Munições" />
      <div className={styles.login}>
        <Tabs
          defaultActiveKey={"login"}
          transition={true}
          className={styles.loginTabs}
          variant="pills"
          id="login-tabs"
        >
          <Tab eventKey={"login"} title="Entrar">
            <div className={styles.inputs}>
              <div className={styles.titleInput}>insira seu E-mail</div>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Seu email"
                className="form-control dark-input"
              />
            </div>
            <div className={styles.inputs}>
            <div className={styles.titleInput}>insira sua Senha</div>
              <input
                type="password"
                id="senha"
                name="senha"
                placeholder="Sua senha"
                className="form-control dark-input"
              />
            </div>
            <Button variant="primary" className={styles.buttonRegister} block onClick={handleLoginClick}>
              Entrar
            </Button>
          </Tab>
          <Tab eventKey={"register"} title="Cadastrar">
            <div className={styles.inputs}>
            <div className={styles.titleInput}>insira seu Nome Completo</div>
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Nome Completo"
                className="form-control dark-input"
              />
            </div>
            <div className={styles.inputs}>
            <div className={styles.titleInput}>insira seu Registro Militar</div>

              <input
                type="text"
                id="cpf"
                name="cpf"
                placeholder="Registro Militar"
                className="form-control dark-input"
              />
            </div>
            <div className={styles.inputs}>
            <div className={styles.titleInput}>insira seu CPF</div>

              <input
                type="text"
                id="cpf"
                name="cpf"
                placeholder="CPF"
                className="form-control dark-input"
              />
            </div>
            <div className={styles.date}>
            <div className={styles.titleInput}>insira sua Data de Nascimento</div>

              <input
                type="date"
                id="Nascimento"
                name="Nascimento"
                className="form-control dark-input"
              />
            </div>
            <div className={styles.inputs}>
            <div className={styles.titleInput}>Crie Uma Senha (Mínimo 6 Caracteres)</div>

              <input
                type="password"
                id="senha"
                name="senha"
                placeholder="Senha"
                className="form-control dark-input"
              />
            </div>
            <Button variant="success" className={styles.buttonRegister} block onClick={handleRegisterClick}>
              Cadastrar
            </Button>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
