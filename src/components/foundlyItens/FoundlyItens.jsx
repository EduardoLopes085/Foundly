import React from "react";
import NavigationBar from "../navigationbar/navigationBar";
import '../foundlyItens/foundlyitens.css'

function FoundlyItens(){
    return(
        <>
            <div className="foundly-conatiner">

                <NavigationBar/>


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
                        <div class="card">Card 1</div>
                        <div class="card">Card 2</div>
                        <div class="card">Card 3</div>
                        <div class="card">Card 4</div>
                        <div class="card">Card 5</div>
                        <div class="card">Card 6</div>
                        <div class="card">Card 7</div>
                        <div class="card">Card 8</div>
                        <div class="card">Card 9</div>
                        <div class="card">Card 10</div>
                        <div class="card">Card 10</div>
                        <div class="card">Card 10</div>
                        <div class="card">Card 10</div>
                        <div class="card">Card 10</div>
                        <div class="card">Card 10</div>
                        <div class="card">Card 10</div>
                        <div class="card">Card 10</div>
                        <div class="card">Card 10</div>
                        <div class="card">Card 10</div>
                        <div class="card">Card 10</div>

                    </div>

                </div>



            </div>
        
        
        </>

    );
};


export default FoundlyItens;









