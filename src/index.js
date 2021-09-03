import React, { useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Cadastro from './App.js';

export default function Home() {
  return <h1>Site para cadastro de Instagram's</h1>
}

export function Subtitulo() {
  return <h3>Utilize o formulário abaixo para cadastrar/editar/excluir os cadastros</h3>
}

export function Imagem() {
  return (
  <div id="imagem">
  <center>
    <img src="https://i0.wp.com/trucao.com.br/wp-content/uploads/2018/07/instagram-logo.png" alt="Logomarca Instagram" width="100px"></img>
  </center>
  </div>
  )
}

export function Texto(props) {
  return <p>{props.text}</p>
}

// export function Botao(props){
//   const [botao, setBotao] = useState(0);

//   useEffect(() => {
//     document.title = botao;
//   },[botao])
  
//   return(
//     <div>
//       <p>Numero de clicks: {botao}</p>
//       <button onClick={() => setBotao(botao+1)}>{props.nome}</button>
//     </div>
//   )
// }

// export function Paragrafos() {
//   return(
//     <div>
//     <Texto text="teste1" text2="outro teste"/>
//     <Texto text="teste2"/>
//     <Texto text="Agora eu tô entendendo" />
//     </div>
//   )
// }

ReactDOM.render(
  <React.StrictMode>
    <Imagem />
    <Home />
    <Subtitulo />
    <Cadastro />
    {/* <Paragrafos /> */}
    {/* <Botao nome="Acumular" /> */}
    {/* <Teste />
    <Teste2 /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

