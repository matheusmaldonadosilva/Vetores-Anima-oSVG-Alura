import { Cards } from './Cards.js'
import { Icones } from './Icones.js'

window.onload = () => {

    const animaCards = new Cards();
    document.addEventListener('scroll', animaCards.scrollCards.bind(animaCards));

    const icones = new Icones();
    icones.animaIcones();
}

/* com importação do javascript não precisamos declarar todos as classes de java script, importamos todos do script.js */
/* passamos para variavel animaCards */
/* adicionando um ouvidor de evento */
/* puchar instancia de cards */ /*movimento scroll */

