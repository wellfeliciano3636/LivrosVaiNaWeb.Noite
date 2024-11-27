import s from './footer.module.scss'
import logoFacebook from '../../../assets/logoFacebook.png'
import logoTwitter from '../../../assets/logoTwitter.png'
import logoYoutube from '../../../assets/logoYoutube.png'
import logoLinkedin from '../../../assets/logoLinkedin.png'
import logoInstagran from '../../../assets/logoInstagran.png'

export default function Footer (){
    return(
       <footer className={s.footer}>
            <section className={s.contatosFooter}>
                <p>83991562578</p>
                <nav>
                    <a href=""><img src={logoFacebook} alt="Imagem da logo facebook" /></a>
                    <a href=""><img src={logoTwitter} alt="Imagem da logo Twitter" /></a>
                    <a href=""><img src={logoYoutube} alt="Imagem da logo Youtube" /></a>
                    <a href=""><img src={logoLinkedin} alt="Imagem da logo Linkedin" /></a>
                    <a href=""><img src={logoInstagran} alt="Imagem da logo Instagran" /></a>
                </nav>
                <section className={s.copyright}>
                    <p>layt</p>
                </section>
            </section>
       </footer>
    )
}