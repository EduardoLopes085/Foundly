import React from "react";

// Importa corretamente o logo e o avatar
import logoFoundly from "../../assets/Início.svg";
import avatar from "../../assets/avatar.png";

// Importa o CSS corretamente
import "../navigationBar/navigation.css";

function NavigationBar() {
    return (
        <>
            <div className="navigation-container">
                
                {/* Perfil do usuário com imagem */}
                <div className="user-perfil">
                    <img className="user-image" src={avatar} alt="foto de perfil do usuário" />
                    <div className="user-name">Ingrid Almeida</div>
                </div>

                {/* Links de navegação */}
                <div className="nav-options">
                    <a href="">
                        <i className="fa-solid fa-bars"></i> Meus achados
                    </a>

                    <a href="">
                        <i className="fa-solid fa-pen-to-square"></i> Editar perfil
                    </a>
                    
                    <a href="">
                        <i className="fa-solid fa-magnifying-glass"></i> Buscar item perdido
                    </a>
                </div>

                {/* Logo do Foundly na parte inferior */}
                <img src={logoFoundly} alt="Logo Foundly" className="logo" />

                {/* Link para sair */}
                <div className="logoff">
                    <a href="">
                        <i className="fa-solid fa-arrow-up-right-from-square"></i> Sair
                    </a>
                </div>
            </div>
        </>
    );
}

export default NavigationBar;
