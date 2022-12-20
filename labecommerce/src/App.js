
import { useState } from "react";
import Footer from "./Footer";
import { GlobalStyle } from "./Globalstyle/Globalstyle";
import Header from './Header'
import { ContainerApp, ContainerMain } from "./styleApp";
import ContainerApresentacao from "./TelaApresentacao";
import Produtos from "./Produtos";

function App() {
  //Estados 
  // input controlado de pesquisa 
  const [search, setSearch] = useState("")
  // onChange do input
  const changeSearch = (e) => {
    setSearch(e.target.value)
  };

  //input controlado para valor minimo
  const [valueMin, setValueMin] = useState('0')
  // onChange do input
  const changeValueMin = (e) => {
    setValueMin(e.target.value)
  }

  // input controlado para valor Maximo
  const [valueMax, setValueMax] = useState(Infinity)
  // onChange do input
  const changeValueMax = (e) => {
    setValueMax(e.target.value)
  }
  // estado para ordenar crescente e decrescente
  const [ordenacao, setOrdenacao] = useState('')
  const changeOrdenacao = (e) => {
    setOrdenacao(e.target.value)
  }
  //estado para filtrar Categorias
  const [categoria, setCategoria] = useState('')
  const changeCategoria = (e) => {
    setCategoria(e.target.value)
  }

  //Estado Carrinho e funcao para adicionar e remover items

  const [listaCarrinho, setListaCarrinho] = useState([])
  const adicionarCarrinho = (nome, preco,quantidade) => {
    const exibirLista = {
      nome: nome,
      preco: preco,
      quantidade: quantidade
    }
    const addcarrinho = [...listaCarrinho, exibirLista]
    setListaCarrinho(addcarrinho)
    setTotal(preco)
  }
  //Estado para totalizar produtos
  const [total, setTotal] = useState([])
  // Contador para aumentar ou diminuir quantidade de items
  const [contador,setContador] = useState(1)


  // estado para trocar telas
  const [page, setPage] = useState(1)
  return (
    <ContainerApp>
      <GlobalStyle />
      { page ===1 ? <ContainerApresentacao page={page} setPage={setPage} /> :<ContainerMain> <Header search={search} changeSearch={changeSearch}
        valueMin={valueMin} changeValueMin={changeValueMin}
        valueMax={valueMax} changeValueMax={changeValueMax}
        ordenacao={ordenacao} changeOrdenacao={changeOrdenacao}
          categoria={categoria} changeCategoria={changeCategoria}
        />
      <Produtos categoria={categoria} changeCategoria={changeCategoria} search={search} ordenacao={ordenacao} adicionarCarrinho={adicionarCarrinho} total={total} setTotal={setTotal} listaCarrinho={listaCarrinho} setListaCarrinho={setListaCarrinho} valueMin={valueMin} valueMax={valueMax}  contador={contador} setContador={setContador} />
      <Footer/> 
      </ContainerMain>
 }
     
      
    </ContainerApp>
  );
}

export default App;
