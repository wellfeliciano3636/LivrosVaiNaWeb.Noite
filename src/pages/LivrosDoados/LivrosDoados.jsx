import livroProtagonista from '../../assets/livro.png'
import s from './livrosDoados.module.scss'

export default function LivrosDoados (){
    return(
        <section className={s.livrosDoadosSection}>
            <h2>Livros Doados</h2>
            <section className={s.containerCards}>
                <section>
                    <img src={livroProtagonista} alt="Imagem do livro O protagonista" />
                    <div>
                        <h3>O pratagonista</h3>
                        <p>Susane Andrade</p>
                        <p>Ficçao</p>
                    </div>
                </section>
            </section>
        </section>
    )
}