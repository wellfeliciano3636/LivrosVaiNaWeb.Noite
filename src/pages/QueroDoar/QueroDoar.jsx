import iconeLivro from '../../assets/iconeLivro.png'
import s from './queroDoar.module.scss'

export default function QueroDoar(){
    return(
        <section>
            <p>Por favor preencha o formulario com suas infornaçoes e as infornaçoes do Livros.  </p>
            <form action="">
                <div>
                    <img src={iconeLivros} alt="Imagen com icone de livro com bordas" />
                    <h2>infornaçoes do Livros</h2>
                </div>
                    <input type="text" name="" id="" placeholder='Titulo'/>
                    <input type="text" name="" id="" placeholder='Categoria'/>
                    <input type="text" name="" id="" placeholder='Autor'/>
                    <input type="text" name="" id="" placeholder='link da imagem'/>
                    <input type="submit" volve="Doar" className={s.buttonDoar}/>

            </form>
        </section>
    )
}