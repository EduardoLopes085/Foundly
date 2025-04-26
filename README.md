<div align="center">
  <a name="readme-top"></a>

  <h1>Foundly</h1>
  <h2>Aplicação Web para Itens Perdidos e Encontrados</h2>
  
  <p>
    Plataforma web para cadastro, busca e gerenciamento de itens perdidos e encontrados, com autenticação de usuários, upload de imagens e interface moderna.
  </p>
</div>

<p align="center">

![React](https://img.shields.io/badge/React-19.x-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-6.x-purple?logo=vite)
![ESLint](https://img.shields.io/badge/ESLint-9.x-blueviolet?logo=eslint)
![Prettier](https://img.shields.io/badge/Prettier-Code_Style-ff69b4?logo=prettier)
![React Router](https://img.shields.io/badge/React_Router-7.x-red?logo=react-router)
![Toastify](https://img.shields.io/badge/React_Toastify-11.x-orange?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)

</p>

---

## 🚀 Como Rodar o Projeto Frontend Localmente

A aplicação Foundly pode ser executada com **Node.js** e **Vite**.

### Passos:

1. **Clone o repositório do Frontend:**

   ```bash
   git clone https://github.com/izaacledererjunior/foundly
   cd foundly
   ```

2. **Instale as dependências do projeto:**

   ```bash
   npm install
   ```

3. **Configure a URL da API:**

   Edite o arquivo `src/config.api.json` e coloque a URL da sua API, por exemplo:
   ```json
   {
     "URL_API": "http://localhost:8000"
   }
   ```

4. **Inicie o servidor de desenvolvimento:**

   ```bash
   npm run dev
   ```

5. **Acesse o projeto no navegador:**

   ```
   http://localhost:5173
   ```

---

## 🌐 Hospedagem

A aplicação esta hospedada na **Vercel** e pode ser acessada aqui [Foundly](https://foundly.vercel.app/)

---

## 🖥️ Funcionalidades

- Cadastro e login de usuários (JWT)
- Cadastro, edição e busca de itens perdidos/encontrados
- Upload de imagens para itens
- Listagem de categorias
- Edição de perfil do usuário
- Página 404 customizada e moderna
- Toasts de feedback para ações do usuário
- Interface responsiva e intuitiva

---

## 📦 Estrutura de Pastas

```
src/
  assets/           # Imagens e ícones
  components/       # Componentes reutilizáveis (Navbar, Forms, etc)
  pages/            # Páginas principais (Login, Register, etc)
  config.api.json   # Configuração da URL da API
  App.jsx           # Arquivo principal de rotas
```

---

## 🛠️ Principais Tecnologias

- **React 19**
- **Vite**
- **React Router DOM**
- **React Toastify**
- **ESLint + Prettier**
- **CSS Modules**

---

## 🧑‍💻 Scripts Úteis

- `npm run dev` — inicia o servidor de desenvolvimento
- `npm run build` — gera a build de produção
- `npm run lint` — executa o ESLint
- `npm run format` — executa o Prettier para formatar o código

---

## 🔒 Autenticação

A autenticação é feita via JWT. O token é salvo no `localStorage` e utilizado para proteger rotas privadas.

---

## 📄 Integração com a API

A aplicação consome a [Foundly API](https://github.com/izaacledererjunior/api-foundly) para todas as operações de autenticação, itens, usuários e categorias.

---

## 👥 Desenvolvedores

- **izaacledererjunior@gmail.com**
- **amandaellem2023@gmail.com**
- **ingridalmeida3197@gmail.com**
- **Eduardo Lopes** [![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:eduardolcb18@gmail.com)[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/eduardo-lopes-b74827232/)
- **jonasmonteirotst@gmail.com**
- **sunamitasantana56@gmail.com**

---

<p align="right">(<a href="#readme-top">voltar ao topo</a>)</p>
