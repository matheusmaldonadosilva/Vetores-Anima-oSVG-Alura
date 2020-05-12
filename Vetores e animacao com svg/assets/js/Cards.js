class Cards {
    constructor() { /*usamos o this para chamar e referenciar um objeto dentro de uma funcao para não ficar solto, chamamos no construtor e damos um nome de variavel para ser refenciado */
        /* https://www.w3schools.com/js/js_this.asp */
        this.posicaoSectionDicas = document.getElementById('section-dicas');
        this.cardEsq = document.querySelector('.card-esq');
        this.cardDir = document.querySelector('.card-dir');
    }

    scrollCards() {
        window.requestAnimationFrame(this.calculoScroll.bind(this));
    } /* método para corrigir o problema de scroll com compatibilidade de navegadores executando o metodo requestAnimationFrame */
    /*dentro do método sera chamado o calculoScroll */
    calculoScroll() {
        const posicao = this.posicaoSectionDicas.getBoundingClientRect()['y'];
        if (posicao >= 25) {
            this.cardEsq.style.transform = `translate(${((-posicao) + 25)/10}%)`;
            this.cardDir.style.transform = `translate(${(posicao - 25)/10}%)`;
        } /* `translate` recurso de template string, colocamo a variavel posicao e converter para string e colocar no html*/
    } /* dando uma unidade do valor -> % */
}

export { Cards }
