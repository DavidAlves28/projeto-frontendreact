# Projeto Front-end React  Parte-1
 

### Projeto  Labecommerce  

O intuito deste projeto é criar do zero uma página de e-commerce usando os pilares do react nessa parte, utilizando: 
- JSX
- Componentes
- Props
- Estado
- Fluxo de dados no React
- Renderização de listas
- Renderização condicional
- localStorage
 
## Página Inicial 
![alt tela-inicial](/labecommerce/src/assets/Gifs/telaInicial.gif)

 Layout com input no componente Header , com seguintes tipos de pesquisa: 
 - ```Pesquisar``` pesquisa o produto por nome ;
 - ```Valor Mínimo``` ordena o valor mínimo para pesquisa;
 - ```Valor Maxímo``` ordena o valor maxímo para pesquisa;
 - ```Ordenação``` ordena em ordem alfabética crescente ou decrescente;
 - ```Categoria``` rendiza apenas os itens da categoria selecionada;

Todos os inputs podem ser usados simultaneamente!
 ## Inputs de Pesquisa
 ![alt tela-inicial](/labecommerce/src/assets/Gifs/inputPesquisa.gif)
 ## Card Carrinho 
  O Card carrinho localizado do lado direito da tela, exibirá os itens adicionados ao carrinho, com Valor unitário , Quantidade e botão para remove o item.
 
 ![alt cardcarrinho](/labecommerce/src/assets/Imagens/cardCarrinho.png)

## Carrinho Page 

A Página do carrinho estará todos os produtos adicionados , valor, quantidade , total da compra e botão para remover
![alt carrinhoPAge](/labecommerce/src/assets/Imagens/carrinhoPage.png)



 ### Lista de Requisitos que foi pedido
- Home (Lista de Produtos)
    - [x]  O usuário deve ser capaz de visualizar uma lista de produtos
    - [x]  O usuário deve ser capaz de visualizar os dados do produto (nome, preço e imagem)
    - [x]  O usuário deve ser capaz de adicionar um produto no carrinho
- Carrinho
    - [x]  O usuário deve ser capaz de visualizar os produtos adicionados
    - [x]  O usuário deve ser capaz de visualizar a quantidade correta de cada produto
    - [x]  O usuário deve ser capaz de remover itens do carrinho
    - [x]  O usuário deve ser capaz de ver corretamente o valor total de sua compra
    - [x]  Quando a página é atualizada, os itens devem continuar no carrinho
- Filtros e Ordenação
    - [x]  O usuário deve ser capaz de filtrar os itens por preço mínimo
    - [x]  O usuário deve ser capaz de filtrar os itens por preço máximo
    - [x]  O usuário deve ser capaz de realizar uma busca por nome
    - [x]  O usuário deve ser capaz de ordenar os itens em ordem crescente ou decrescente
    - [x]  O usuário deve ser capaz de adicionar  filtros, busca e ordenação simultaneamente
    - [x]  O usuário deve ser capaz de retornar à visualização sem filtros


## Informações 
 - O projeto está responsivo, mas faltou incrementar um menu com filtrs mais dinâmico. 
 - O Design criado de forma simples, mas futuramente vou me aprofundas em  ```Material UI``` e ferramentas que englobam o Front-End.
 -  A proposta do projeto é conseguir implementar funcionalidades básicas de uma loja como carrinho , lista de produtos , adicionar e remover itens do carrinho.
 -  nessa primeira parte do projeto os arquivos como ```Produtos``` estão Mockados  ;
 - A Renderização de telas foi feita por meio de funções e não por ```Routes```.
 
