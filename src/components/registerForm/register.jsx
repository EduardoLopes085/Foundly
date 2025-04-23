import '../registerForm/register.css'


function RegisterForm(){
    return (
       
        <div className='form-container'>
            
            <div className='register-text'>
                <div>
                    <h1>Registre, busque e <br /> encontre </h1>
                    <h2>O Foundly <br /> cuida do resto</h2>
                </div>
            </div>
            
            
            
            
            <form action="" className='register-form'>
                
                <div className="register-form-title">
                    <h1>Cadastre-se</h1>
                </div>
                
                <div className='register-form-input-nome'>
                    <input type="text" placeholder="Nome Completo" required />
                    <i class="fa-solid fa-user"></i>
                </div>
                
                <div className='register-form-input-email'>
                    <input type="email" placeholder="Email" required />
                    <i class="fa-solid fa-envelope"></i>
                </div>

                <div className='register-form-input-phone'>
                    <input type="tel" placeholder="Telefone" required />
                    <i class="fa-solid fa-phone"></i>
                </div>

                <div className='register-form-input-senha'>
                    <input type="password" placeholder="Senha" required />
                    <i class="fa-solid fa-key"></i>
                </div>

                <div className='register-form-input-senha-2'>
                    <input type="password" placeholder="Confirmar a senha" required />
                    <i class="fa-solid fa-key"></i>
                </div>

                <button className='form-register-button' type='submit'> Cadastrar </button>
            </form>
        </div>    

    );
}


export default RegisterForm;
