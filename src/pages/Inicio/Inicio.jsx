import s from './Inicio.module.scss'
import imagem1 from '../../assets/imagem1.png'
import imagem2 from '../../assets/imagem2.png'
import imagem3 from '../../assets/imagem3.png'
import imagem4 from '../../assets/imagem4.png'

export default function Inicio(){
    return(
        <main>
            <section className={s.primeiraSessaoInicio}>
                <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
            </section>
                <div className={s.containerCards}>
                    <section className={s.porqueDoarSection}>
                        <h2>Por que devo doar?</h2>
                        <section>
                            <img src={imagem1} alt="Imagem ilustrando circulo social 4 pessoa" />
                            <p></p>
                        </section>
                        <section>
                            <img src={imagem2} alt="" />
                            <p></p>
                        </section>
                        <section>
                            <img src={imagem3} alt="" />
                            <p></p>
                        </section>
                            <img src={imagem4} alt="" />
                            <p></p>
                        <section>
                        </section>
                        </section>
                     </div>   
        </main>
    )
}