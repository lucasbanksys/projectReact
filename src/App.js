import React, {useState, useEffect} from 'react';
import './App.css';

export default function Cadastro() {
    
    const [cadastro, setCadastro] = useState([
        {
            nome: 'Lucas',
            instagram: '@lssimao'
        },
        {
            nome: 'Pedro',
            instagram: '@pedrinosh'
        },
        {
            nome: 'Allysson',
            instagram: '@alywosz'
        }
    ])

const [nomeCadastro, setNomeCadastro] = useState("");

const [instaCadastro, setInstaCadastro] = useState("");

const [editando, setEditando] = useState(false);

const [indiceEdit, setIndiceEdit] = useState(null);

useEffect(() => {

    if((indiceEdit != null) && editando) {
        setNomeCadastro(cadastro[indiceEdit].nome)
        setInstaCadastro(cadastro[indiceEdit].instagram)
    }

}, [indiceEdit])

const handleNameChange = (evento) => {
    setNomeCadastro(evento.target.value);
}

const handleInstaChange = (evento) => {
    setInstaCadastro(evento.target.value);
}

const handleSubmit = (evento) => {
    evento.preventDefault();

    if(editando) {
        const cadastroUpdated = cadastro.map((cadastro, indice) => {
            if(indiceEdit === indice){
                cadastro.nome = nomeCadastro;
                cadastro.instagram = instaCadastro;
            }
            return cadastro
        });

        setCadastro(cadastroUpdated);

        setEditando(false);

        setIndiceEdit(null);
    } else {
        setCadastro([
            ...cadastro,
            {
                nome: nomeCadastro,
                instagram: instaCadastro
        }
    ]);
    setNomeCadastro("");
    setInstaCadastro("");
    }
}

const handleDelete = (index) => {
    setCadastro(cadastro.filter((cadastro, indexCadastro) => index !==indexCadastro))
};

return(
    <div id="container">
    {/* <h1>Lista de contatos</h1>
    <h2>Cadastrar um novo contato</h2> */}
    <div class="form">
      <form onSubmit={handleSubmit}>
          <div class="title">Lista de contatos</div>
          <div class="subtitle">Vamos criar um novo cadastro</div>
          <br />
          <div class="input-container ic1">
            <input id="nome" class="input" type="text" placeholder=" " value={nomeCadastro} onChange={handleNameChange}/>
            <div class="cut"></div>
            <label for="nome" class="placeholder">Nome</label>
          </div>
        <div class="input-container ic2">
          <input id="email" class="input" type="text" placeholder=" " value={instaCadastro} onChange={handleInstaChange} />
          <div class="cut cut-short"></div>
          <label for="email" class="placeholder">Instagram</label>
          <br />
          <br />
          <center>
          <button type="submit" class="submit">Salvar</button>
          </center>
        </div>
      </form>
    </div>


  <ul>
   {cadastro.map((cadastro, index) => (
     <li key={index}>
      <p>
        { cadastro.nome }
      </p>
     <p>
       { cadastro.instagram }
     </p>
      <button class="btn-alterar" type="button" onClick={() => handleDelete(index) }>Excluir</button>
    <button class="btn-alterar" type="button" onClick={() => {
        setEditando(true);
       setIndiceEdit(index);
     }}>Editar</button>
   </li>
  ))}
</ul>
</div>
)
}

