
import { useState } from "react";
import Footer from "./Footer";
import { GlobalStyle } from "./Globalstyle/Globalstyle";
import Header from './Header'
import { ContainerApp, ContainerMain } from "./styleApp";
import ContainerApresentacao from "./TelaApresentacao";
import Produtos from "./Produtos";
import CarrinhoPage from "./CarrinhoPage";

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
  const adicionarCarrinho = (id,nome, preco, quantidade) => {
    const exibirLista = {
      id: id,
      nome: nome,
      preco: preco,
      quantidade: quantidade
    }  
    const addcarrinho = [...listaCarrinho, exibirLista]
    setListaCarrinho(addcarrinho)
    setTotal(preco)
  }

  // estado para não repitir item do carrinho
  const listaCarrinhoitemUnico= new Set();
// função para que os itens nao dupliquem
const itensUnicos = listaCarrinho.filter((produto,add) => {
    const itemDuplicados = listaCarrinhoitemUnico.has(produto.id);
    listaCarrinhoitemUnico.add(produto.id);
    return !itemDuplicados ;
  });

  //Estado para totalizar produtos
  const [total, setTotal] = useState([])
  // Contador para aumentar ou diminuir quantidade de items
  const [contador, setContador] = useState(1)


  // estado para trocar telas
  const [page, setPage] = useState(1)

  
 // Separação de páginas para renderizar. 
  switch(page) {
    case 1:
      return (
        <ContainerApp>
          <GlobalStyle/>
            <ContainerApresentacao page = { page } setPage = { setPage }/> 
        </ContainerApp>) 
      case 2:
        return (
          <ContainerApp>
          <GlobalStyle/>
          <ContainerMain> <Header search={search} changeSearch={changeSearch}
          valueMin={valueMin} changeValueMin={changeValueMin} setPage={setPage}
          valueMax={valueMax} changeValueMax={changeValueMax}
          ordenacao={ordenacao} changeOrdenacao={changeOrdenacao}
          categoria={categoria} changeCategoria={changeCategoria}
        />
          <Produtos itensUnicos={itensUnicos}  categoria={categoria} changeCategoria={changeCategoria}
            search={search} ordenacao={ordenacao}
            adicionarCarrinho={adicionarCarrinho} total={total}
            setTotal={setTotal} listaCarrinho={listaCarrinho}
            setListaCarrinho={setListaCarrinho} valueMin={valueMin}
            valueMax={valueMax} contador={contador} setContador={setContador}
            setPage={setPage} 
          />
          <Footer /></ContainerMain>
        </ContainerApp> 
        )
      case 3:
        return (
          <ContainerApp>
            <GlobalStyle/>
              <CarrinhoPage  itensUnicos={itensUnicos}/>
          </ContainerApp>) 
    default:
      break;
  } 
}

export default App;
