class PedidoItem {
    constructor(produto, quantidade) {
      this.quantidade = quantidade;
      this.nomeProduto = produto.nome;
      this.precoProduto = produto.preco;
    }
  
    calcularSubtotal() {
        return this.precoProduto * this.quantidade;
    }
}
  
class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}
  
class NotaFiscal {
    constructor(pedido) {
        this.pedido = pedido;
        this.dataEmissao = new Date();
        this.itensDaNota = pedido.itens;
    }
  
    gerarNotaFiscal() {
        const subtotal = this.pedido.calcularTotal();
        const impostos = subtotal * 0.1;
        const total = subtotal + impostos;
  
        return {
            itensDaNota: this.itensDaNota,
            subtotal,
            impostos,
            total,
            dataEmissao: this.dataEmissao
        };
    }
}
  
class Pedido {
    constructor() {
        this.itens = [];
    }
  
    adicionarItem(item) {
        this.itens.push(item);
    }
  
    calcularTotal() {
        return this.itens.reduce((total, item) => total + item.calcularSubtotal(), 0);
    }
}
  
// Testes

const produto1 = new Produto('Camiseta', 10);
const produto2 = new Produto('Calça', 20);
const produto3 = new Produto('Blusa', 30);
  
const item1 = new PedidoItem(produto1, 2);
const item2 = new PedidoItem(produto2, 3);
const item3 = new PedidoItem(produto3, 5);
  
const pedido = new Pedido();
pedido.adicionarItem(item1);
pedido.adicionarItem(item2);
pedido.adicionarItem(item3);
  
const notaFiscal = new NotaFiscal(pedido);
const nota = notaFiscal.gerarNotaFiscal();
  
console.log('Itens do pedido:', pedido.itens);
console.log('Total do pedido:', pedido.calcularTotal());
console.log('Nota fiscal:', nota);