
import { useEffect, useState } from "react";
import Footer from "./Components/Footer";
import { GlobalStyle } from "./Globalstyle/Globalstyle";
import Header from './Components/Header'
import { ContainerApp, ContainerMain } from "./styleApp";
import ContainerApresentacao from "./Components/TelaApresentacao/index";
import Produtos from "./Components/Produtos/index";
import CarrinhoPage from "./Components/CarrinhoPage/index";
import CadastroCliente from "./Components/CadastroCliente/index";
import CadastroCompleto from "./Components/CadastroCompleto/index";

function App() {
  //Estados para input de cadastro
  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState('')
  const [email, setEmail] = useState('')
  const [confirmaEmail, setConfirmaEmail] = useState('')
  const [endereco, setEndereco] = useState('')
  const [numeroEnd, setNumeroEnd] = useState('')
  const [telefone, setTelefone] = useState('')

  //Estados 
  // input controlado de pesquisa 
  const [search, setSearch] = useState("")
  // onChange do input
  const changeSearch = (e) => {
    setSearch(e.target.value)
  };
  //Estado para totalizar produtos
  const [total, setTotal] = useState([])
  // estado para trocar telas
  const [page, setPage] = useState(1)
  //input controlado para valor minimo
  const [valueMin, setValueMin] = useState(0)
  // onChange do input
  const changeValueMin = (e) => {
    setValueMin(e.target.value)
  }
  // input controlado para valor Maximo
  const [valueMax, setValueMax] = useState(Infinity)
  // curto circuito para que se o input for string vazia, altera o valor para 2000
  valueMax === "" && setValueMax(Infinity)
  // onChange do input
  const changeValueMax = (e) => {
    // valueMax =
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

  const adicionarCarrinho = (produto) => {
    // função para verificar se o produto ja existe na lista , caso existir ele incrementa na quantidade
    listaCarrinho.forEach((novoProduto, index) => {
      if (novoProduto.id === produto.id) {
        listaCarrinho[index].quantidade++
      }
    })

    const exibirLista = {
      id: produto.id,
      nome: produto.nome,
      preco: produto.preco,
      quantidade: 1
    }

    const addcarrinho = [...listaCarrinho, exibirLista]
    setListaCarrinho(addcarrinho)
    setTotal(produto.preco)
    localStorage.setItem(`listaProdutos`, JSON.stringify(itensUnicos))
  }

  // estado para não repitir item do carrinho
  const listaCarrinhoitemUnico = new Set();
  // função para que os itens nao dupliquem
  const itensUnicos = listaCarrinho.filter((produto, add) => {
    const itemDuplicados = listaCarrinhoitemUnico.has(produto.id);
    listaCarrinhoitemUnico.add(produto.id);

    return !itemDuplicados;
  });

  // Remove itens do carrinho!
  const removeItemCarrinho = (item) => {
    const filterItem = listaCarrinho.filter((produto) => produto.id !== item)
    setListaCarrinho(filterItem)
    localStorage.setItem(`listaProdutos`, JSON.stringify(itensUnicos))
  }
  // função para soma de preços dos itens adicionados.
  const totalProdutos = itensUnicos.reduce((produto, nproduto) => {
    return produto + nproduto.quantidade * nproduto.preco
  }, 0)

  //  Lógica foi criado caso o localStorage do usúario esteja vazio, ele renderiza o array do estado, mas se houver algo no localStorage ele renderiza os itens!
  useEffect(() => {
    localStorage.length === 0 ? setListaCarrinho([]) : setListaCarrinho(JSON.parse(localStorage.getItem('listaProdutos')))
  }, [])
  

  // Separação de páginas para renderizar. 
  switch (page) {
    case 1:
      return (
        <ContainerApp>
          <GlobalStyle />
          <ContainerApresentacao
            page={page}
            setPage={setPage}
          />
        </ContainerApp>)
    case 2:
      return (
        <ContainerApp>
          <GlobalStyle />
          <ContainerMain>
            <Header
              // Props
              search={search}
              changeSearch={changeSearch}
              valueMin={valueMin}
              changeValueMin={changeValueMin}
              valueMax={valueMax}
              changeValueMax={changeValueMax}
              ordenacao={ordenacao}
              changeOrdenacao={changeOrdenacao}
              categoria={categoria}
              changeCategoria={changeCategoria}
              setPage={setPage}
              alert={alert}
            />
            <Produtos
              // Props
              itensUnicos={itensUnicos}
              categoria={categoria}
              changeCategoria={changeCategoria}
              search={search}
              ordenacao={ordenacao}
              adicionarCarrinho={adicionarCarrinho}
              total={total}
              setTotal={setTotal}
              listaCarrinho={listaCarrinho}
              setListaCarrinho={setListaCarrinho}
              valueMin={valueMin}
              valueMax={valueMax}
              setPage={setPage}
              removeItemCarrinho={removeItemCarrinho}
              totalProdutos={totalProdutos}
            />
            <Footer />
          </ContainerMain>
        </ContainerApp>
      )
    case 3:
      return (
        <ContainerApp>
          <GlobalStyle />
          <CarrinhoPage
            //Props 
            total={total}
            totalProdutos={totalProdutos}
            setPage={setPage} itensUnicos={itensUnicos}
            removeItemCarrinho={removeItemCarrinho}
          />
        </ContainerApp>)
    case 4:
      return (
        <ContainerApp>
          <GlobalStyle />
          <CadastroCliente
            setPage={setPage}
            nome={nome}
            setNome={setNome}
            email={email}
            setEmail={setEmail}
            confirmaEmail={confirmaEmail} 
            setConfirmaEmail={setConfirmaEmail}
            endereco={endereco} 
            setEndereco={setEndereco}
            numeroEnd={numeroEnd} 
            setNumeroEnd={setNumeroEnd}
            telefone={telefone} 
            setTelefone={setTelefone}
            idade={idade} 
            setIdade={setIdade}
          />
        </ContainerApp>)
    case 5:
      return (
        <ContainerApp>
          <GlobalStyle />
          <CadastroCompleto
            setPage={setPage}
            nome={nome}
            setNome={setNome}
            email={email}
            endereco={endereco}
            telefone={telefone}
            setEmail={setEmail}
            numeroEnd={numeroEnd}
            setConfirmaEmail={setConfirmaEmail}
            setIdade={setIdade}
            setTelefone={setTelefone}
            setNumeroEnd={setNumeroEnd}
            setEndereco={setEndereco}
          />
        </ContainerApp>)
    default:
      break;
  }
}

export default App;
