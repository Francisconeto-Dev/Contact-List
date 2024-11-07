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
document.addEventListener("DOMContentLoaded", function() {
    const inputs = document.querySelectorAll('input');
    
    inputs.forEach(input => {
      const label = input.nextElementSibling;  // Assumindo que o label está logo após o input
  
      // Função para verificar se o campo está preenchido ou não
      input.addEventListener('input', function() {
        if (this.value.trim() !== "") {
          // Quando o input não estiver vazio, aplicamos a transformação
          label.style.transform = 'translateY(7px)';
          label.style.fontSize = '15px';
          label.style.color = '#ffffff';
          label.style.top = '-17px';
        } else {
          // Quando o input estiver vazio, revertendo a transformação
          label.style.transform = 'translateY(0)';
          label.style.fontSize = '16px';
          label.style.color = '#000000';
          label.style.top = '20px';
        }
      });
  
      // Função para subir o label quando o input recebe foco
      input.addEventListener('focus', function() {
        label.style.transform = 'translateY(7px)';
        label.style.fontSize = '15px';
        label.style.color = '#ffffff';
        label.style.top = '-17px';
      });
  
      // Função para garantir que o label desça quando o campo perder o foco e estiver vazio
      input.addEventListener('blur', function() {
        if (this.value.trim() === "") {
          label.style.transform = 'translateY(0)';
          label.style.fontSize = '16px';
          label.style.color = '#000000';
          label.style.top = '20px';
        }
      });
    });
  });
  const inputTel = document.getElementById('numerocontato');

// Função para validar e formatar o telefone
inputTel.addEventListener('input', function() {
    // Substitui qualquer caractere que não seja número ou +
    this.value = this.value.replace(/[^0-9+]/g, '');
});
