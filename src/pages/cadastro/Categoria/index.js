import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';


function CadastroCategoria() {
  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

      <from>

        <label>
          Nome da Categoria:
          <input type="texto"/>
        </label>

        <button>
          Cadastrar
        </button>
      </from>

    <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;