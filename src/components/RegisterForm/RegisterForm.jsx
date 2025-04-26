import React, { useState } from 'react';
import './RegisterForm.css';
import apiConfig from '../../../config.api.json';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [telefoneError, setTelefoneError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [apiMessage, setApiMessage] = useState('');

  const navigate = useNavigate();
  const BASE_URL = apiConfig.URL_API.replace(/\/$/, '');

  const nameRegex = /^[A-Za-zÀ-ÿ]+(?: [A-Za-zÀ-ÿ]+)+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const telefoneRegex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{4,}$/;
  const cleanTelefone = (tel) => tel.replace(/\D/g, '');

  const validateName = (value) => {
    if (!nameRegex.test(value.trim())) {
      setNameError('Digite seu nome completo (nome e sobrenome).');
      return false;
    }
    setNameError('');
    return true;
  };

  const validateEmail = (value) => {
    if (!emailRegex.test(value)) {
      setEmailError('Digite um e-mail válido.');
      return false;
    }
    setEmailError('');
    return true;
  };

  const validateTelefone = (value) => {
    if (!telefoneRegex.test(value)) {
      setTelefoneError('Digite um telefone válido no padrão (41) 99999-9999.');
      return false;
    }
    setTelefoneError('');
    return true;
  };

  const validatePassword = (value) => {
    if (!passwordRegex.test(value)) {
      setPasswordError(
        'A senha deve ter pelo menos 4 caracteres, uma letra maiúscula, uma minúscula, um número e um caractere especial.',
      );
      return false;
    }
    setPasswordError('');
    return true;
  };

  const validateConfirmPassword = (value) => {
    if (value !== password) {
      setConfirmPasswordError('As senhas não coincidem.');
      return false;
    }
    setConfirmPasswordError('');
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validName = validateName(name);
    const validEmail = validateEmail(email);
    const validTelefone = validateTelefone(telefone);
    const validPassword = validatePassword(password);
    const validConfirmPassword = validateConfirmPassword(confirmPassword);

    if (
      !validName ||
      !validEmail ||
      !validTelefone ||
      !validPassword ||
      !validConfirmPassword
    ) {
      return;
    }

    try {
      const response = await fetch(`${BASE_URL}/api/auth/register`, {
        method: 'POST',
        headers: {
          accept: '*/*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          name,
          telefone: cleanTelefone(telefone),
        }),
      });

      if (response.ok) {
        toast.success(
          'Cadastro realizado com sucesso! Faça login para continuar.',
          {
            onClose: () => navigate('/'),
            autoClose: 2500,
          },
        );
      } else {
        const data = await response.json();
        setApiMessage(data.message || 'Erro ao cadastrar. Verifique os dados.');
      }
    } catch (err) {
      setApiMessage('Erro ao conectar com o servidor.');
    }
  };

  const handleTelefoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);
    if (value.length > 0) value = '(' + value;
    if (value.length > 3) value = value.slice(0, 3) + ') ' + value.slice(3);
    if (value.length > 10) value = value.slice(0, 10) + '-' + value.slice(10);
    setTelefone(value);
    validateTelefone(value);
  };

  return (
    <div className="form-container-register">
      <ToastContainer position="top-center" autoClose={2500} />
      <div className="register-text">
        <div>
          <h1>
            Registre, busque e <br /> encontre{' '}
          </h1>
          <h2>
            O Foundly <br /> cuida do resto
          </h2>
        </div>
      </div>
      <form className="register-form" onSubmit={handleSubmit} noValidate>
        <div className="register-form-title">
          <h1>Cadastre-se</h1>
        </div>
        <div className="register-form-input-nome">
          <input
            type="text"
            placeholder="Nome Completo"
            required
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              validateName(e.target.value);
            }}
            onBlur={(e) => validateName(e.target.value)}
          />
          <i className="fa-solid fa-user"></i>
          {nameError && <span className="input-error">{nameError}</span>}
        </div>
        <div className="register-form-input-email">
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              validateEmail(e.target.value);
            }}
            onBlur={(e) => validateEmail(e.target.value)}
          />
          <i className="fa-solid fa-envelope"></i>
          {emailError && <span className="input-error">{emailError}</span>}
        </div>
        <div className="register-form-input-phone">
          <input
            type="tel"
            placeholder="Telefone (41) 99999-9999"
            required
            value={telefone}
            onChange={handleTelefoneChange}
            onBlur={(e) => validateTelefone(e.target.value)}
            maxLength={16}
          />
          <i className="fa-solid fa-phone"></i>
          {telefoneError && (
            <span className="input-error">{telefoneError}</span>
          )}
        </div>
        <div className="register-form-input-senha">
          <input
            type="password"
            placeholder="Senha"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              validatePassword(e.target.value);
            }}
            onBlur={(e) => validatePassword(e.target.value)}
          />
          <i className="fa-solid fa-key"></i>
          {passwordError && (
            <span className="input-error">{passwordError}</span>
          )}
        </div>
        <div className="register-form-input-senha-2">
          <input
            type="password"
            placeholder="Confirmar a senha"
            required
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              validateConfirmPassword(e.target.value);
            }}
            onBlur={(e) => validateConfirmPassword(e.target.value)}
          />
          <i className="fa-solid fa-key"></i>
          {confirmPasswordError && (
            <span className="input-error">{confirmPasswordError}</span>
          )}
        </div>
        <button className="form-register-button" type="submit">
          Cadastrar
        </button>
        {apiMessage && (
          <div
            className="api-message"
            style={{
              marginTop: 16,
              color: '#5B86E5',
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            {apiMessage}
          </div>
        )}
      </form>
    </div>
  );
}

export default RegisterForm;
