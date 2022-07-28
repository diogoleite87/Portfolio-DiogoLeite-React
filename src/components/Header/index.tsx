import './style.css'

function Header() {

    return (
        <header>
            <nav>
                <a className="logo" href="/">Portfólio | Diogo Leite</a>
                <ul className="nav-list">
                    <li><a href="#">Início</a></li>
                    <li><a href="#about">Sobre</a></li>
                    <li><a href="#project">Projetos</a></li>
                    <li><a href="#contact">Contato</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header