import { useContext, useEffect, useState } from "react";
import { Header } from "../../components";
import styles from './styles.module.css';
import { Table, Button, Dropdown, DropdownButton, Spinner, Pagination, FormControl, InputGroup } from 'react-bootstrap';
import { MunicaoContext } from "../../contexts/MunicaoContext";
import { useForm } from "react-hook-form";
import EditMunicaoModal from '../../components/editar municao/index';
import CreateMunicaoModal from '../../components/criar municao/index';
import MunicaoDetailsModal from "../../components/ver mais/MunicaoDetailsModal";

export function Gestao() {
    const { getAllMunicao, loading, municoes, createMunicao, updateMunicao, deleteMunicao, setMunicoes } = useContext(MunicaoContext);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedMunicao, setSelectedMunicao] = useState(null);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [searchTerm, setSearchTerm] = useState("");
    const [filterType, setFilterType] = useState("all");
    const [dateFilter, setDateFilter] = useState("all");
    const [currentPage, setCurrentPage] = useState(1);
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    const columnsPerPage = 5;

    const [createdAlertVisible, setCreatedAlertVisible] = useState(false);
    const [editedAlertVisible, setEditedAlertVisible] = useState(false);
    const [deletedAlertVisible, setDeletedAlertVisible] = useState(false);

    const startIndex = (currentPage - 1) * columnsPerPage;
    const endIndex = startIndex + columnsPerPage;

    const currentDate = new Date();

    // Função para calcular as datas recentes e antigas
    function filterMunicoesByDate(municoes, dateFilter, currentDate) {
        return municoes.filter((municao) => {
            const includesTerm = municao.modelo.toLowerCase().includes(searchTerm.toLowerCase());

            if (dateFilter === "recentes") {
                return includesTerm && new Date(municao.dataFabriacao) <= currentDate;
            } else if (dateFilter === "antigas") {
                return includesTerm && new Date(municao.dataFabriacao) > currentDate;
            } else {
                return includesTerm;
            }
        });
    }

    const filteredMunicoes = municoes
        ? filterMunicoesByDate(municoes, dateFilter, currentDate)
        : [];

    const columnsOnCurrentPage = filteredMunicoes.slice(startIndex, endIndex);
    const totalPages = Math.ceil(filteredMunicoes.length / columnsPerPage);

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleDetailsClick = (municao) => {
        setSelectedMunicao(municao);
        setIsEditModalOpen(false);
    };

    async function addMunicao(data) {
        await createMunicao({
            modelo: data.modelo,
            calibragem: data.calibragem,
            dataFabriacao: data.dataFabricacao,
            estadoConservacao: data.estadoConservacao,
            quatidadeEmEstoque: data.quantidade,
            tipoPonta: data.tipoPonta,
            material: data.material,
            peso: data.peso,
            empresaFabricante: data.empresaFabricante
        });
        await getAllMunicao();
        setIsCreateModalOpen(false);
        setCreatedAlertVisible(true);
        hideAlerts();
    }

    async function editMunicao(data) {
        if (selectedMunicao) {
            const result = await updateMunicao(selectedMunicao.id, data);
            const updatedMunicoes = municoes.map((municao) => {
                if (municao.id === selectedMunicao.id) {
                    return {
                        ...municao,
                        modelo: data.modelo,
                        calibragem: data.calibragem,
                        dataFabriacao: data.dataFabricacao,
                        estadoConservacao: data.estadoConservacao,
                        quatidadeEmEstoque: data.quantidade,
                        tipoPonta: data.tipoPonta,
                        material: data.material,
                        peso: data.peso,
                        empresaFabricante: data.empresaFabricante
                    };
                }
                return municao;
            });
            setSelectedMunicao(null);
            reset();
            setIsEditModalOpen(false);
            setMunicoes(updatedMunicoes);
            setEditedAlertVisible(true);
            hideAlerts();
        }
    }

    const handleEditClick = (municaoId) => {
        const municaoParaEditar = municoes.find((municao) => municao.id === municaoId);
        setSelectedMunicao(municaoParaEditar);
        setIsEditModalOpen(true);
        reset();
    };

    const handleDeleteMunicao = (municaoId) => {
        try {
            if (window.confirm("Tem certeza de que deseja apagar esta munição?")) {
                deleteMunicao(municaoId);
                setDeletedAlertVisible(true);
                hideAlerts();
            }
        } catch (error) {
            console.error(error, `Erro ao deletar a Munição`)
        }
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
    };

    const handleFilterSelect = (filter) => {
        setFilterType(filter);
        setCurrentPage(1);
        getAllMunicao();
    };

    const handleDateFilterSelect = (filter) => {
        setDateFilter(filter);
        setCurrentPage(1);
        getAllMunicao();
    };

    useEffect(() => {
        async function getMunicoes() {
            await getAllMunicao();
        }
        getMunicoes();
    }, []);

    const hideAlerts = () => {
        setTimeout(() => {
            setCreatedAlertVisible(false);
            setEditedAlertVisible(false);
            setDeletedAlertVisible(false);
        }, 3000); // Oculta os alertas após 3 segundos (pode ajustar o tempo conforme necessário)
    };

    return (
        <div>
            <Header title="Arsenal de Munições" navbar={true} />

            <MunicaoDetailsModal isViewModalOpen={isViewModalOpen} municao={selectedMunicao} setIsViewModalOpen={setIsViewModalOpen}/>

            <div className={styles.homeContainer}>
                <div className={styles.fundoCentral}>
                    <div className='flex'>
                        <img src="/TituloGestao.svg" className={styles.icon} alt="Título" />
                        <h1 className={styles.titulo}>Gestão de Munição</h1>
                        <div className={styles.filtros}>
                            {/* <div className={styles.filterContainer}>
                                <DropdownButton id="filter-dropdown" title={`Conservação: ${filterType === "all" ? "Todas" : filterType}`} variant="secondary">
                                    <Dropdown.Item onClick={() => handleFilterSelect("all")}>Qualquer um</Dropdown.Item>
                                    <Dropdown.Item onClick={() => handleFilterSelect("ABERTA")}>Caixa de munição abertas</Dropdown.Item>
                                    <Dropdown.Item onClick={() => handleFilterSelect("FECHADA")}>Caixa de munição fechadas</Dropdown.Item>
                                </DropdownButton>
                            </div>
                            <div className={styles.dateFilterContainer}>
                                <DropdownButton id="date-filter-dropdown" title={`Data: ${dateFilter === "all" ? "Qualquer uma" : dateFilter}`} variant="secondary">
                                    <Dropdown.Item onClick={() => handleDateFilterSelect("all")}>Qualquer uma</Dropdown.Item>
                                    <Dropdown.Item onClick={() => handleDateFilterSelect("recentes")}>Mais recentes</Dropdown.Item>
                                    <Dropdown.Item onClick={() => handleDateFilterSelect("antigas")}>Mais antigas</Dropdown.Item>
                                </DropdownButton>
                            </div> */}
                            <div className={styles.searchContainer}>
                                <InputGroup>
                                    <FormControl
                                        type="text"
                                        placeholder="Pesquisar por modelo..."
                                        value={searchTerm}
                                        onChange={handleSearchChange}
                                    />
                                    <Button variant="outline-secondary" onClick={() => setSearchTerm("")}>
                                        Limpar
                                    </Button>
                                </InputGroup>
                            </div>
                        </div>
                    </div>
                    {loading ? (
                        <Spinner animation="border" role="status">
                            <span className="visually-impaired"></span>
                        </Spinner>
                    ) : municoes && (
                        <>
                                            {createdAlertVisible && (
                                                <div className="alert alert-success" role="alert">
                                                    Munição criada com sucesso!
                                                </div>
                                            )}
                                            
                                            {editedAlertVisible && (
                                                <div className="alert alert-info" role="alert">
                                                    Munição editada com sucesso!
                                                </div>
                                            )}
                                            
                                            {deletedAlertVisible && (
                                                <div className="alert alert-danger" role="alert">
                                                    Munição apagada com sucesso!
                                                </div>
                                            )}
                            <div className={styles.container}>
                                <div className={styles.Tabela}>
                                    <Table striped hover>
                                        <thead>
                                            <tr>
                                                <th>id</th>
                                                <th>Modelo</th>
                                                <th>Calibre</th>
                                                <th>Conservação</th>
                                                <th>Ações</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {columnsOnCurrentPage.map((item, index) => {
                                                return (
                                                    <tr key={item.id}>
                                                        <td>{item.id}</td>
                                                        <td>{item.modelo}</td>
                                                        <td>{item.calibragem} mm</td>
                                                        <td>{item.estadoConservacao}</td>
                                                        <td>
                                                            <DropdownButton id={`dropdown-${item.id}`} title="Opções">
                                                                <Dropdown.Item onClick={() => {handleDetailsClick(item); setIsViewModalOpen(true)}}>Ver mais</Dropdown.Item>
                                                                <Dropdown.Item onClick={() => handleEditClick(item.id)}>Editar Munição</Dropdown.Item>
                                                                <Dropdown.Item onClick={() => handleDeleteMunicao(item.id)}>Apagar Munição</Dropdown.Item>
                                                            </DropdownButton>
                                                        </td>
                                                    </tr>
                                                )
                                            })}
                                            <tr>
                                                <td className={styles.buttonCadastrar}>
                                                    <Button variant="primary" onClick={() => setIsCreateModalOpen(true)}>
                                                        Cadastrar Nova Munição
                                                    </Button>
                                                </td>
                                                <td></td><td></td><td></td><td></td>
                                            </tr>
                                        </tbody>
                                    </Table>

                                    <div className={styles.paginaBotao}>
                                        <Pagination>
                                            <Pagination.First onClick={() => handlePageClick(1)} />
                                            <Pagination.Prev onClick={() => handlePageClick(Math.max(currentPage - 1, 1))} />
                                            {Array.from({ length: totalPages }).map((_, index) => (
                                                <Pagination.Item
                                                key={index + 1}
                                                active={index + 1 === currentPage}
                                                onClick={() => handlePageClick(index + 1)}
                                                >
                                                    {index + 1}
                                                </Pagination.Item>
                                            ))}
                                            <Pagination.Next onClick={() => handlePageClick(Math.min(currentPage + 1, totalPages))} />
                                            <Pagination.Last onClick={() => handlePageClick(totalPages)} />
                                        </Pagination>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>

            <CreateMunicaoModal
                isOpen={isCreateModalOpen}
                onClose={() => setIsCreateModalOpen(false)}
                onCreate={addMunicao}
            />

            {isEditModalOpen && selectedMunicao && (
                <EditMunicaoModal
                    isOpen={isEditModalOpen}
                    onClose={() => setIsEditModalOpen(false)}
                    onSave={editMunicao}
                    municao={selectedMunicao}
                />
            )}

        </div>
    );
}
