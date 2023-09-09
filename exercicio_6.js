class Produto {
    constructor(nomeProduto, precoProduto, quantidadeProduto) {
      this.nome = nomeProduto;
      this.preco = precoProduto;
      this.quantidade = quantidadeProduto;
    }
  }
  
  class Estoque {
    constructor() {
      this.produtos = [];
    }
  
    adicionarProduto(produto) {
      this.produtos.push(produto);
    }
  
    removerProduto(produto) {
      const index = this.produtos.findIndex((p) => p.nome === produto.nome);
      if (index !== -1) {
        this.produtos.splice(index, 1);
      }
    }
  
    listarProdutos() {
      return this.produtos;
    }
  }
  
  class GerenciarEstoque {
    constructor(estoque) {
      this.estoque = estoque;
    }
  
    adicionarProduto(produto) {
      this.estoque.adicionarProduto(produto);
    }
  
    removerProduto(produto) {
      this.estoque.removerProduto(produto);
    }
  
    listarProdutos() {
      return this.estoque.listarProdutos();
    }
  }
  
  // Utilização do Estoque
  const estoque = new Estoque();
  const gerenciadorDeEstoque = new GerenciarEstoque(estoque);
  
  const produto1 = new Produto('Camiseta', 29.99, 50);
  gerenciadorDeEstoque.adicionarProduto(produto1);
  
  const produto2 = new Produto('Calça Jeans', 89.99, 30);
  gerenciadorDeEstoque.adicionarProduto(produto2);
  
  console.log('Produtos em estoque:', gerenciadorDeEstoque.listarProdutos());
  
  gerenciadorDeEstoque.removerProduto(produto1);
  
  console.log('Produtos em estoque após a remoção:', gerenciadorDeEstoque.listarProdutos());  