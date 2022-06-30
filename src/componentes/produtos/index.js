import React from "react";
import './produtos.css'
import Produto from "../produto";


let database = [{
    tipo: 'limpeza',
    nome:'amaciante',
    marca:'ype',
    preco:'12,00',
  },
  {
    tipo: 'limpeza',
    nome:'amaciante',
    marca:'downey',
    preco:'8,00',
  },{
    tipo: 'limpeza',
    nome:'sabão em po',
    marca:'ype',
    preco:'18,00',
  },{
    tipo: 'limpeza',
    nome:'amaciante',
    marca:'ype',
    preco:'12,00',
  },{
    tipo: 'limpeza',
    nome:'cloro',
    marca:'boa',
    preco:'4,00',
  },{
    tipo: 'padaria',
    nome:'bolinho',
    marca:'balduco',
    preco:'2,00',
  },{
    tipo: 'padaria',
    nome:'amendoim',
    marca:'pacha',
    preco:'4,00',
  },{
    tipo: 'frios',
    nome:'carne',
    marca:'sadia',
    preco:'120,00',
  },{
    tipo: 'frios',
    nome:'sorvete',
    marca:'cremoso',
    preco:'18,00',
  }
]


  /*{database.map((produto, key)=>(
    <Produto item = {produto} key = {key} />
))}*/

const Produtos = ()=>{
    return (
        <div className="produtos-bg">
            <div className="produtos">
                <div className="limpeza">
                    <h1>Limpeza</h1>
                    <div className="dados">
                        {database.filter(produto=>(produto.tipo === 'limpeza')).map((item, key) =>(<Produto item = {item} key = {key} />))}
                    </div>
                </div>
                <div className="frios">
                    <h1>Frios</h1>
                    <div className="dados">
                        {database.filter(produto=>(produto.tipo === 'frios')).map((item, key) =>(<Produto item = {item} key = {key} />))}
                        </div>
                </div>
                <div className="padaria">
                    <h1>Padaria</h1>
                    <div className="dados">
                        {database.filter(produto=>(produto.tipo === 'padaria')).map((item, key) =>(<Produto item = {item} key = {key} />))}
                        </div>
                </div>

            </div>
        </div>

    );
};


export default Produtos