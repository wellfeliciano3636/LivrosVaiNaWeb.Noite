import logoFacebook from '../../assets/logoFacebook.png'
import logoTwitter from '../../assets/logoTwitter.png'
import logoYoutube from '../../assets/logoYoutube.png'
import logoLinkedin from '../../assets/logoLinkedin.png'
import logoInstagram from '../../assets/logoInstagran.png'
import s from './footer.module.scss'

export default function Footer(){
    return(
        <footer>
            <section className={s.contatosFooter}>
                <p>4002-8922</p>
                <nav>
                    <a href=""><img src={logoFacebook} alt="" /></a>
                    <a href=""><img src={logoTwitter} alt="" /></a>
                    <a href=""><img src={logoYoutube} alt="" /></a>
                    <a href=""><img src={logoLinkedin} alt="" /></a>
                    <a href=""><img src={logoInstagram} alt="" /></a>
                </nav>
            </section>
            <section className={s.copyright}>
                <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024  </p>
            </section>
        </footer>
    )
}


// export default function Footer (){
//     return(
//        <footer >
//             <section className={s.contatosFooter}>
//                 <p>8399156-1578</p>
//                 <nav>
//                     <a href=""><img src={logoFacebook} alt="Imagem da logo facebook" /></a>
//                     <a href=""><img src={logoTwitter} alt="Imagem da logo Twitter" /></a>
//                     <a href=""><img src={logoYoutube} alt="Imagem da logo Youtube" /></a>
//                     <a href=""><img src={logoLinkedin} alt="Imagem da logo Linkedin" /></a>
//                     <a href=""><img src={logoInstagran} alt="Imagem da logo Instagran" /></a>
//                 </nav>
//             </section>   
//                 <section className={s.copyright}>
//                     <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024</p>
//                 </section>
//             </section>
//        </footer>
//     )
// }