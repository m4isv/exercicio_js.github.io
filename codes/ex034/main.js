  
    document.body.bgColor='green'

    const nome = prompt('Digite seu nome completo:');

    document.body.innerHTML += `Seu nome é: <strong> ${nome} </strong> <br><br>`;

    document.body.innerHTML += `Seu nome tem <strong> ${nome.length} </strong> letras <br><br>`;

    document.body.innerHTML += `A segunda letra do seu nome é: <strong> ${nome[1]} </strong> <br><br>`;

    document.body.innerHTML += `Qual o primeiro índice da letra  [ A ]  no seu nome? <strong> ${nome.indexOf('a')} </strong> <br><br>`;

    document.body.innerHTML += `Qual o último índice da letra [ A ]  no seu nome? <strong> ${nome.lastIndexOf('a')} </strong><br><br>`;
    document.body.innerHTML += `As últimas 3 letras do seu nome são: <strong> ${nome.slice(-3)}</strong><br><br>`;

    document.body.innerHTML += `As palavras do seu nome são: <strong> ${nome.split(' ')}</strong><br><br>`;

    document.body.innerHTML += `Seu nome com letras maiúsculas: <strong> ${nome.toUpperCase()}</strong><br><br>`;

    document.body.innerHTML += `Seu nome com letras minúsculas: <strong> ${nome.toLowerCase()} </strong><br><br>`;
