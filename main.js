const form = document.getElementById("myform");
const inputnome = [];
const inputnumero = [];
const inputemail = [];

let linhas = "";

// Adiciona o evento ao formulário
form.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionarLinha();
});

function adicionarLinha() {
    const nomeContato = document.getElementById("nomecontato");
    const numeroContato = document.getElementById("numerocontato");
    const emailContato = document.getElementById("emailcontato");

    // Verifica se o contato já existe
    if (inputnome.includes(nomeContato.value)) {
        alert(`O contato: ${nomeContato.value} já foi inserido.`);
    } else {
        // Adiciona os dados aos arrays
        inputnome.push(nomeContato.value);
        inputnumero.push(numeroContato.value);
        inputemail.push(emailContato.value);

        // Cria a nova linha
        let linha = '<tr>';
        linha += `<td>${nomeContato.value}</td>`;
        linha += `<td>${numeroContato.value}</td>`;
        linha += `<td>${emailContato.value}</td>`;
        linha += '</tr>';

        // Acumula a nova linha
        linhas += linha;

        // Atualiza a tabela
        const contatosTableBody = document.getElementById("contatos");
        
        // Remove os tracinhos (exibindo a tabela corretamente)
        contatosTableBody.innerHTML = linhas;

        // Limpa o formulário
        form.reset();

        // Mensagem de sucesso
        alert(`Contato ${nomeContato.value} adicionado com sucesso!`);
    }
}
