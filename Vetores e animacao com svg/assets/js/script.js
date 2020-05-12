import { Cards } from './Cards.js'
import { Icones } from './Icones.js'
import { Footer } from './Footer'

window.onload = () => {

    const animaCards = new Cards();
    document.addEventListener('scroll', animaCards.scrollCards.bind(animaCards));
    /*bind usamos para prender quando referenciamos com this */
    const icones = new Icones();
    icones.animaIcones();

    const footer = new Footer();
    footer.efeitoOnda();
}
