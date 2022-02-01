const doc = fetch('https://viacep.com.br/ws/01001000/json/');

doc.then(resolucao => {
    return resolucao.json();
}).then((body) =>{
    console.log(body);
    const conteudo = document.querySelector('.conteudo');
    conteudo.innerHTML = body.logradouro;
})