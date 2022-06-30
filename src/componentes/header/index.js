import React from "react"
import './header.css'

const Header = ()=>{
    return (
        <div>
            <div className="header-bg">
                    <div className="header">
                    <h1 className="titulo">BigMark</h1>
                    <div className="pesquisar">
                        <input type={'text'} placeholder="digite o que deseja pesquisar"></input>
                        <button>Pesquisar</button>
                    </div>
                    <ul className="menu">
                        <li><a href="#">Entrar</a></li>
                        <li><a href="#">Inscreva-se</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header