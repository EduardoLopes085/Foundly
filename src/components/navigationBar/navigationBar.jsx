import React from "react";
import logoFoundly from "../../assets/logo-foundly.svg";
import accountCircle from "../../assets/account_circle.svg";
import '../navigationbar/navigation.css'

function NavigationBar(){
    return(
        <>
            <div className="navigation-container">
                
                <div className="user-perfil">
                    <img className="user-image" src={accountCircle} alt="foto de perfil do usuário" />

                    <div className="user-name">Eduardo Lopes de Castro Barbosa</div>
                </div>

                <div className="nav-options">
                    <a href="">
                        <i class="fa-solid fa-bars"></i> Meus achados
                    </a>

                    <a href="">
                        <i className="fa-solid fa-pen-to-square"> </i> Editar perfil
                    </a>
                    
                    <a href="">
                        <i className="fa-solid fa-magnifying-glass"></i> Buscar item perdido
                    </a>

                </div>

                <img className="FoundlyLogo" src={logoFoundly} alt="" />

                <div className="logoff">
                    <a href="">
                    <i class="fa-solid fa-arrow-up-right-from-square"></i> Sair
                    </a>
                </div>


            </div>
        
        
        
        
        
        </>
    );
};




export default NavigationBar;

