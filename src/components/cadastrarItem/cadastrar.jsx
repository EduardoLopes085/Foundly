import logoFoundly from "../../assets/logo-foundly.svg";
import accountCircle from "../../assets/account_circle.svg";
import '../cadastrarItem/cadastrar.css'
import NavigationBar from "../navigationBar/navigationBar";


function CadastrarItem(){
    return(
        <div className="card-total"> 
            
            <NavigationBar userName="Eduardo Lopes de Castro Barbosa" imageProfile={accountCircle} logo={logoFoundly} linkMeusAchados={{ href: "/meus-achados", label: "Meus achados" }}
                linkEditarPerfil={{ href: "/editar-perfil", label: "Editar perfil" }}
                linkBuscarItem={{ href: "/buscar", label: "Buscar item perdido" }}
                linkSair={{ href: "/logout", label: "Sair" }}
            />  
           
            <div className="card-form">
               <form action= "" className='cadastrar-form'>
                    
                    <div className="cadastrar-header">
                        <h1>Achei um item</h1>
                    </div>
                    

                    <div className="campo-nome">
                        <p>Nome do item</p>
                        <input className="input-cadastrar" type="texto" placeholder="o que você achou?" required />
                    </div>

                    <div className="row">
                        
                        <div className="campo-categoria">
                            <label htmlFor="categoria">Categoria:</label>
                            <select id="categoria" name="categoria" required>
                                <option value="">Selecione uma opção</option>
                                <option value="roupa">Papelaria</option>
                                <option value="eletronico">Eletrônico</option>
                                <option value="documento">Documento</option>
                                <option value="outro">Outro</option>
                            </select>
                        </div>
                        
                        <div className="campo-localizacao">
                            <label htmlFor="categoria">Local:</label>
                            <select id="localizacao" name="localizacao" required>
                                <option value="">Selecione uma opção</option>
                                <option value="roupa">Ceará</option>
                                <option value="eletronico">Pernambuco</option>
                                <option value="documento">São Paulo</option>
                                <option value="outro">Outro</option>
                            </select>
                        </div>
                    </div>
                    
                    <div className="campo-contato">
                        <p>Contato</p>
                        <input className="input-cadastrar" type="texto" placeholder="disponibilize número ou email para contato" required />
                    </div>

                    <div className="campo-img">
                        <p>Imagem do item</p>
                        <button className='envio-foto' type='submit'> + UPLOAD </button>
                    </div>

                   <div className="campo-observacao">
                     <p>Observação (opcional)</p>
                     <input className="input-cadastrar" type="texto" placeholder="Deixe alguma observação sobre o item" required />
                   </div>

                    <button className='button-salvar' type='submit'>Salvar</button>
                </form>

            </div>
        </div>
        
    );
}

export default CadastrarItem;