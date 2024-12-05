import lupa from '../../assets/lupa.png'
import logoLivro from '../../assets/logolivro.png'
import Inicio from '../../pages/Inicio/Inicio'
import LivrosDoados from '../../pages/LivrosDoados/LivrosDoados'
import QueroDoar from '../../pages/QueroDoar/QueroDoar'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import s from './header.module.scss'

export default function Header(){
    return(
        <BrowserRouter>
            <header >
                <section className={s.logoHeader}>
                    <img src={logoLivro} alt='Imagem de ilustraçao'></img>
                    <h1>Livro vai na web</h1>
                </section>
                <nav className={s.navHeader}>
                    <ul>
                        <li><Link className={s.link} to='/' >Inicio</Link></li>
                        <li><Link className={s.Link} to='/livros-doados'>Livros doados</Link></li>
                        <li><Link className={s.Link} to='/quero-doar'>quero doar</Link></li>
                    </ul>
                </nav>
                <section className={s.barraDeBusca}>
                    <input type="search" name="" id="" placeholder='o que vc procura' />
                    <button>
                        <img src={lupa} alt='Imagem de lupa branca'/>
                    </button>
                </section>
            </header>
            <Routes>
                <Route path='/' element={<Inicio/>} />
                <Route path='/livros-doados' element={<LivrosDoados/>}/>
                <Route path='/quero-doar' element={<QueroDoar/>}/>
            </Routes>
        </BrowserRouter>

    )
}