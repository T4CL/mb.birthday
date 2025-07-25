
document.getElementById('submitBtn').addEventListener('click', function() {
    const nameInput = document.getElementById('nameInput').value.toLowerCase();
    
    if (nameInput === "branquela") {
        // Se acertar o nome
        document.getElementById('final-msg').style.display = 'block';
        document.getElementById('question-section').style.display = 'none';
        document.getElementById('final-section').style.display = 'block';
    } else {
        // Se errar o nome
        document.getElementById('error-msg').style.display = 'none';
        document.getElementById('retry-msg').style.display = 'block';
        document.getElementById('submitBtn').innerText = 'Tentar novamente';
    }
});

document.getElementById('moveBtn').addEventListener('click', function() {
    const moveBtn = document.getElementById('moveBtn');
    const finalMsg2 = document.getElementById('final-msg2');
    const finalMsg3 = document.getElementById('final-msg3');
    const finalMsg4 = document.getElementById('final-msg4');
    
    // Movimento do botão e troca de mensagens
    if (finalMsg2.style.display === 'none') {
        moveBtn.style.transform = 'translateX(200px)';
        finalMsg2.style.display = 'block';
    } else if (finalMsg3.style.display === 'none') {
        moveBtn.style.transform = 'translateX(400px)';
        finalMsg3.style.display = 'block';
    } else if (finalMsg4.style.display === 'none') {
        moveBtn.style.transform = 'translateX(600px)';
        finalMsg4.style.display = 'block';
    } else {
        window.location.href = 'https://www.notion.so/my-dearest-m-b-21bffba3f25680bca1e2c9d933b61f14?source=copy_link';
    }
});
