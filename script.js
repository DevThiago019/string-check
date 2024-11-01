document.getElementById('countButton').addEventListener('click', contarA);
document.getElementById('generateText').addEventListener('click', gerarTextoAleatorio);

function contarA() {
    const string = document.getElementById('inputText').value;
    let contador = 0;
    const textoDestacado = string.replace(/a/gi, match => `<span class="highlight">${match}</span>`);
    
    // Verifica cada letra na string
    for (let i = 0; i < string.length; i++) {
        const letra = string[i].toLowerCase();
        if (letra === 'a') {
            contador++;
        }
    }

    // Exibe o resultado
    const resultado = contador > 0
        ? `A letra 'a' foi encontrada ${contador} vez(es) no texto.`
        : "A letra 'a' não foi encontrada.";
    document.getElementById('result').innerHTML = `<p>${resultado}</p><p>${textoDestacado}</p>`;
    document.getElementById('result').style.backgroundColor = contador > 0 ? '#d4edda' : '#f8d7da'; // Verde se encontrado, vermelho se não
    document.getElementById('result').style.color = contador > 0 ? '#155724' : '#721c24'; // Texto verde ou vermelho
}

function gerarTextoAleatorio() {
    const textos = [
        "A arte da programação é uma habilidade que se desenvolve com a prática. Cada linha de código é uma expressão criativa que pode transformar ideias em realidades.",
        "A inteligência artificial está revolucionando a forma como interagimos com a tecnologia. Em um mundo cada vez mais digital, entender algoritmos se torna essencial.",
        "A ciência da computação é um campo vasto que abrange muitos tópicos, incluindo algoritmos, estruturas de dados, redes e segurança cibernética.",
        "A tecnologia blockchain oferece um novo paradigma para a troca de informações e a realização de transações seguras, sem a necessidade de intermediários.",
        "A educação online tem proporcionado acesso a conhecimento de qualidade, permitindo que pessoas de diferentes origens aprendam habilidades valiosas a partir de qualquer lugar.",
        "Aprender a programar não é apenas uma tendência, mas uma porta aberta para oportunidades em diversas áreas do conhecimento.",
        "Os avanços na robótica estão mudando a forma como trabalhamos e vivemos, trazendo novas perspectivas e desafios."
    ];
    const textoAleatorio = textos[Math.floor(Math.random() * textos.length)];
    document.getElementById('inputText').value = textoAleatorio;
    document.getElementById('result').innerHTML = ""; // Limpa o resultado anterior
}
