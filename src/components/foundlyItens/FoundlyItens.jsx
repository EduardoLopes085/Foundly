import React from "react";
import './foundlyItens.css'


import logoFoundly from "../../assets/logo-foundly.svg";
import accountCircle from "../../assets/account_circle.svg";
import NavigationBar from "../navigationBar/navigationBar";

import sample from '../../assets/image-3.jpg'
import ItemCard from "../itemCard/itemCard";

function FoundlyItens(){
    return(
        <>
            <div className="foundly-conatiner">

            

                <NavigationBar userName="Eduardo Lopes de Castro Barbosa" imageProfile={accountCircle} logo={logoFoundly} linkMeusAchados={{ href: "/meus-achados", label: "Meus achados" }}
                    linkEditarPerfil={{ href: "/editar-perfil", label: "Editar perfil" }}
                    linkBuscarItem={{ href: "/buscar", label: "Buscar item perdido" }}
                    linkSair={{ href: "/logout", label: "Sair" }}
                />      


                <div className="foundly-content">

                    <div className="foundly-header">

                        <h1>Meus achados</h1>

                        <button> <i class="fa-solid fa-plus"></i>  achei um item</button>

                    </div>

                    <div className="search-bar">
                        <i className="fa-solid fa-magnifying-glass search-icon"></i>
                        <input type="search" name="search" placeholder="Buscar em Meus achados" className="search-input"/>
                    </div>



                    <div className="card-grid-container">

                        <ItemCard image={sample} title="Chave azul com chaveiro" category="Chaves" date="01/04/2024" location="Praça do Ferreira" contact="(85) 98554-6521" status="Perdido"/>

                        <ItemCard image={sample} title="Chave azul com chaveiro" category="Chaves" date="01/04/2024" location="Praça do Ferreira" contact="(85) 98554-6521" status="Perdido"/>

                        <ItemCard image={sample} title="Chave azul com chaveiro" category="Chaves" date="01/04/2024" location="Praça do Ferreira" contact="(85) 98554-6521" status="Perdido"/>

                        <ItemCard image={sample} title="Chave azul com chaveiro" category="Chaves" date="01/04/2024" location="Praça do Ferreira" contact="(85) 98554-6521" status="Perdido"/>

                        <ItemCard image={sample} title="Chave azul com chaveiro" category="Chaves" date="01/04/2024" location="Praça do Ferreira" contact="(85) 98554-6521" status="Perdido"/>

                        <ItemCard image={sample} title="Chave azul com chaveiro" category="Chaves" date="01/04/2024" location="Praça do Ferreira" contact="(85) 98554-6521" status="Perdido"/>

                        <ItemCard image={sample} title="Chave azul com chaveiro" category="Chaves" date="01/04/2024" location="Praça do Ferreira" contact="(85) 98554-6521" status="Perdido"/>

                        <ItemCard image={sample} title="Chave azul com chaveiro" category="Chaves" date="01/04/2024" location="Praça do Ferreira" contact="(85) 98554-6521" status="Perdido"/>
                        

                    
                    </div>

                </div>



            </div>
        
        
        </>

    );
};


export default FoundlyItens;









