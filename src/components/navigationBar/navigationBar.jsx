import React from "react";
import "../navigationBar/navigation.css";

function NavigationBar({ 
  userName, 
  imageProfile, 
  linkMeusAchados, 
  linkEditarPerfil, 
  linkBuscarItem, 
  linkSair,
  logo 
}) {
  return (
    <div className="navigation-container">
      
      <div className="user-perfil">
        <img className="user-image" src={imageProfile} alt="foto de perfil do usuário" />
        <div className="user-name">{userName}</div>
      </div>

      <div className="nav-options">
        <a href={linkMeusAchados?.href}>
          <i className="fa-solid fa-bars"></i> {linkMeusAchados?.label}
        </a>

        <a href={linkEditarPerfil?.href}>
          <i className="fa-solid fa-pen-to-square"></i> {linkEditarPerfil?.label}
        </a>

        <a href={linkBuscarItem?.href}>
          <i className="fa-solid fa-magnifying-glass"></i> {linkBuscarItem?.label}
        </a>
      </div>

      <img className="FoundlyLogo" src={logo} alt="Logo Foundly" />

      <div className="logoff">
        <a href={linkSair?.href}>
          <i className="fa-solid fa-arrow-up-right-from-square"></i> {linkSair?.label}
        </a>
      </div>
    </div>
  );
}

export default NavigationBar;
