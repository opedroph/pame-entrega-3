import React from "react";
import './produto.css'

//tipo marca nome preco


const Produto =({item}) =>{
    return (
        <div>
            <div className="produto-bg">
                {/* <img></img> */}
                <p>{item.nome}</p>
                <p>{item.marca}</p>
                <p>{'R$ '+ item.preco}</p>
            </div>
        </div>
    );
};

export default Produto