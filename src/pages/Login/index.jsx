import { useContext } from 'react';
import { Header } from "../../components";
import { Tab, Tabs, Button, Spinner, Alert } from 'react-bootstrap';
import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { useForm } from 'react-hook-form';

export function Login() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { register: register2, handleSubmit: handleSubmit2, formState: { errors: errors2 } } = useForm();
    const { loading, registerUser, loginUser, error } = useContext(AuthContext);

    const handleLogin = async (data) => {
        await loginUser({
            email: data.email,
            senha: data.password
        });
        if (!error) {
            navigate('/home');
        }
    };

    const handleRegister = async (data) => {
        await registerUser({
            nome: data.name,
            cpf: data.cpf,
            email: data.email,
            senha: data.password,
            dataNascimento: data.nascimento,
            registroMilitar: data.registro
        });
        if (!error) {
            navigate('/home');
        }
    };

    return (
        <div>
            <div className={styles.fundo}>
                <Header title="Arsenal de Munições" />
                <div className={styles.content}>
                    <Tabs
                        defaultActiveKey={"login"}
                        transition={true}
                        className={styles.loginTabs}
                        variant="pills"
                        id="login-tabs"
                    >
                        <Tab eventKey={"login"} title="Entrar" className={styles.customTab}>
                            <form onSubmit={handleSubmit2(handleLogin)} noValidate>
                                <div className={styles.inputs}>
                                    <div className={styles.titleInput}>insira seu E-mail</div>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Seu email"
                                        className="form-control dark-input"
                                        required
                                        {...register2('email', {
                                            required: 'E-mail obrigatório', // Mensagem de erro personalizada
                                            pattern: {
                                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                message: 'E-mail inválido'
                                            }
                                        })}
                                    />
                                    {errors2.email && <span style={{ color: 'red' }}>{errors2.email.message}</span>}
                                </div>
                                <div className={styles.inputs}>
                                    <div className={styles.titleInput}>insira sua Senha</div>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        placeholder="Sua senha"
                                        required
                                        className="form-control dark-input"
                                        {...register2('password', {
                                            required: 'Senha obrigatória', // Mensagem de erro personalizada
                                        })}
                                    />
                                    {errors2.password && <span style={{ color: 'red' }}>{errors2.password.message}</span>}
                                </div>
                                <Button
                                    variant="primary"
                                    className={styles.buttonRegister}
                                    type="submit"
                                >
                                    {loading ? (
                                        <Spinner animation="border" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </Spinner>
                                    ) : (
                                        <p>Entrar</p>
                                    )}
                                </Button>
                            </form>
                        </Tab>
                        <Tab eventKey={"register"} title="Cadastrar" className={styles.customTab} >
                            <form
                                onSubmit={handleSubmit(handleRegister)}
                                noValidate
                            >
                                <div className={styles.inputs}>
                                    <div className={styles.titleInput}>insira seu Nome Completo</div>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Nome Completo"
                                        required
                                        className="form-control dark-input"
                                        {...register('name', {
                                            required: 'Nome obrigatório', // Mensagem de erro personalizada
                                        })}
                                    />
                                    {errors.name && <span style={{ color: 'red' }}>{errors.name.message}</span>}
                                </div>
                                <div className={styles.inputs}>
                                    <div className={styles.titleInput}>insira seu Registro Militar</div>
                                    <input
                                        type="text"
                                        id="registro"
                                        name="registro"
                                        placeholder="00000000"
                                        className="form-control dark-input"
                                        required
                                        {...register('registro', {
                                            required: 'Registro Militar obrigatório', // Mensagem de erro personalizada
                                        })}
                                    />
                                    {errors.registro && <span style={{ color: 'red' }}>{errors.registro.message}</span>}
                                </div>
                                <div className={styles.inputs}>
                                    <div className={styles.titleInput}>insira seu CPF</div>
                                    <input
                                        type="text"
                                        id="cpf"
                                        name="cpf"
                                        placeholder="000.000.000-00"
                                        className="form-control dark-input"
                                        required
                                        {...register('cpf', {
                                            required: 'CPF obrigatório', // Mensagem de erro personalizada
                                            pattern: {
                                                value: /^((\d{3}).(\d{3}).(\d{3})-(\d{2}))*$/,
                                                message: 'CPF inválido'
                                            }
                                        })}
                                    />
                                    {errors.cpf && <span style={{ color: 'red' }}>{errors.cpf.message}</span>}
                                </div>
                                <div className={styles.date}>
                                    <div className={styles.titleInput}>insira sua Data de Nascimento</div>
                                    <input
                                        type="date"
                                        id="nascimento"
                                        name="nascimento"
                                        className="form-control dark-input"
                                        required
                                        {...register('nascimento', {
                                            required: 'Data de Nascimento obrigatória', // Mensagem de erro personalizada
                                        })}
                                    />
                                    {errors.nascimento && <span style={{ color: 'red' }}>{errors.nascimento.message}</span>}
                                </div>
                                <div className={styles.inputs}>
                                    <div className={styles.titleInput}>Insira um E-mail válido</div>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="email@gmail.com"
                                        className="form-control dark-input"
                                        {...register('email', {
                                            required: 'E-mail obrigatório', // Mensagem de erro personalizada
                                            pattern: {
                                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                message: 'E-mail inválido'
                                            }
                                        })}
                                    />
                                    {errors.email && <span style={{ color: 'red' }}>{errors.email.message}</span>}
                                </div>
                                <div className={styles.inputs}>
                                    <div className={styles.titleInput}>Crie Uma Senha (Mínimo 6 Caracteres)</div>
                                    <input
                                        type="password"
                                        id="senha"
                                        name="senha"
                                        placeholder="Senha"
                                        className="form-control dark-input"
                                        {...register('password', {
                                            required: 'Senha obrigatória', // Mensagem de erro personalizada
                                            minLength: {
                                                value: 6,
                                                message: 'A senha deve ter no mínimo 6 caracteres'
                                            }
                                        })}
                                    />
                                    {errors.password && <span style={{ color: 'red' }}>{errors.password.message}</span>}
                                </div>
                                <Button
                                    variant="success"
                                    className={styles.buttonRegister}
                                    type="submit"
                                >
                                    {loading ? (
                                        <Spinner animation="border" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </Spinner>
                                    ) : (
                                        <p>Cadastrar</p>
                                    )}
                                </Button>
                            </form>
                        </Tab>
                    </Tabs>
                    {error && (
                        <Alert className='w-100' variant="danger">
                            {error}
                        </Alert>
                    )}
                </div>
            </div>
        </div>
    );
}
