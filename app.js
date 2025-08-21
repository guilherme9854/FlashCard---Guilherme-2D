function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById(&#39;container&#39;)
    let cartao = document.createElement(&#39;article&#39;)
    cartao.className = &#39;cartao&#39;

    cartao.innerHTML = `
        &lt;div class=&quot;cartao__conteudo&quot;&gt;
        &lt;h3&gt;${categoria}&lt;/h3&gt;
        &lt;div class=&quot;cartao__conteudo__pergunta&quot;&gt;
                &lt;p&gt;${pergunta}&lt;/p&gt;
        &lt;/div&gt;
       
        &lt;div class=&quot;cartao__conteudo__resposta&quot;&gt;
                &lt;p&gt;${resposta}&lt;/p&gt;
        &lt;/div&gt;
        &lt;/div&gt;
`
let respostaEstaVisivel = false
function viraCartao() {
        respostaEstaVisivel = !respostaEstaVisivel
        cartao.classList.toggle(&#39;active&#39;, respostaEstaVisivel)
    }
    cartao.addEventListener(&#39;click&#39;, viraCartao)

container.appendChild(cartao)
}