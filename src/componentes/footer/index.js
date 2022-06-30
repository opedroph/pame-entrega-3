import React from "react";
import './footer.css'


const Footer = ()=>{
    return (
        <div>
            <div className="footer-bg">
                <div className="footer">
                    <div className="esquerda">
                        <p>telefone: 55212423-5290</p>
                        <p>Email: bigmarkcontato@gmail.com</p>
                        <p>Mercado  BigMark LTDA © 2022 - Todos os Direitos Reservados</p>
                    </div>
                    <div className="direita">
                        <p><a href="#">sobre a empresa</a></p>
                        <p><a href="#">acessibilidade</a></p>
                        <p><a href="#">nosso propósito</a></p>
                        <p><a href="#">entregas</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer