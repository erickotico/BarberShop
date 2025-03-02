// Função para simular a verificação de disponibilidade
document.getElementById('form-agendamento').addEventListener('submit', function (e) {
    e.preventDefault();

    const data = document.getElementById('data').value;
    const horario = document.getElementById('horario').value;
    const servico = document.getElementById('servico').value;

    if (!data || !horario || !servico) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Simulação de verificação de disponibilidade
    const mensagem = document.getElementById('mensagem-agendamento');
    mensagem.innerHTML = `
        <p>Agendamento confirmado!</p>
        <p><strong>Data:</strong> ${data}</p>
        <p><strong>Horário:</strong> ${horario}</p>
        <p><strong>Serviço:</strong> ${servico}</p>
    `;
});