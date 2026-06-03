const produtos = [
    { nome: "Teclado Mecânico", preco: 200, emEstoque: true },
    { nome: "Mouse Gamer", preco: 150, emEstoque: false },
    { nome: "Monitor 24pol", preco: 800, emEstoque: true },
    { nome: "Webcam HD", preco: 300, emEstoque: true }
];

function calcularPrecoFinal(preco, temDesconto) {
    return temDesconto ? preco * 0.9 : preco;
}

const container = document.getElementById('lista-produtos');

for (let i = 0; i < produtos.length; i++) {
    const prod = produtos[i];

    const card = document.createElement('div');
    card.className = 'card';

    if (prod.emEstoque) {
        const precoFinal = calcularPrecoFinal(prod.preco, true);

        card.innerHTML = `
            <h3>${prod.nome}</h3>
            <p>Preço: R$ ${precoFinal.toFixed(2)}</p>
        `;
    } else {
        card.innerHTML = `
            <h3>${prod.nome}</h3>
            <p class="indisponivel">Produto indisponível</p>
        `;
    }

    container.appendChild(card);
}