import logoFoundly from "../../assets/logo-foundly.svg";
import accountCircle from "../../assets/account_circle.svg";
import '../cadastrarItem/cadastrar.css'


function CadastrarItem(){
    return(
        <div className="card-total"> 
            <div className="card-perfil">
 
               <div className="card-user">
                    <img src= {accountCircle} 
                    alt="Icon user"
                    className="icon-user" />
                    <h1>Ingrid Almeida</h1>
               </div>
                
                <div className="card-lista">
                   <button><i class="fa-solid fa-bars"></i>Meus achados</button>
                    <button><i className="fa-solid fa-pen-to-square"></i>Editar perfil</button>
                    <button><i className="fa-solid fa-magnifying-glass"></i>Buscar item perdido</button>
                </div>

                <img src= {logoFoundly} 
                alt="Logo Foundly"
                className='logoFoundly' />

                <p><i class="fa-solid fa-arrow-up-right-from-square"></i>Sair</p>
            </div>
           
            <div className="card-form">
               <form action= "" className='cadastrar-form'>
                    <h1>Achei um item</h1>
                    <hr />

                    <div className="campo-nome">
                        <p>Nome do item</p>
                        <input type="texto" placeholder="o que você achou?" required />
                    </div>

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
                        <label htmlFor="categoria">Localização:</label>
                        <select id="localizacao" name="localizacao" required>
                            <option value="">Selecione uma opção</option>
                            <option value="roupa">Ceará</option>
                            <option value="eletronico">Pernambuco</option>
                            <option value="documento">São Paulo</option>
                            <option value="outro">Outro</option>
                        </select>
                    </div>
                    
                    <div className="campo-contato">
                        <p>Contato</p>
                        <input type="texto" placeholder="disponibilize número ou email para contato" required />
                    </div>

                    <div className="campo-imagem">
                        <p>Imagem do item</p>
                     <button className='envio-foto' type='submit'> + UPLOAD </button>
                    </div>

                   <div className="campo-observacao">
                     <p>Observação (opcional)</p>
                        <input type="texto" placeholder="Deixe alguma observação sobre o item" required />
                   </div>

                    <button className='button-salvar' type='submit'>Salvar</button>


               </form>

            </div>
        </div>
        
    );
}

export default CadastrarItem;