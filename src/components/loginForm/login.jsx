import '../loginForm/login.css'


function LoginForm(){
    return (
       
        <div className='form-container'>
            
            <div className='login-text'>
                <div>
                    <h1>Registre, busque e <br /> encontre </h1>
                    <h2>O Foundly <br /> cuida do resto</h2>
                </div>
            </div>
            
            
            
            
            <form action="" className='login-form'>
                
                <div className="login-form-title">
                    <h1>Bem vindo ao <span>Foundly!</span></h1>
                </div>
                
                <div className='login-form-input-email'>
                    <input type="email" placeholder="e-mail" required />
                    <i class="fa-solid fa-user"></i>
                </div>
                
                <div className='login-form-input-password'>
                    <input type="password" placeholder="senha" required />
                    <i class="fa-solid fa-key"></i>

                    

                </div>
                
                <a href="http://google.com.br"> Esqueci a senha </a>

                <button className='form-login-button' type='submit'> Entrar </button>

                

                <div className="login-form-title-botton">
                    <h1>Ainda não possui uma conta? <span> <a href="http://google.com.br" target='_blank'>Cadastre-se!</a> </span></h1>
                </div>
            </form>
        </div>    

    );
}


export default LoginForm;
