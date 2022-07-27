import './projects.css'

function Projects() {
    return (
        <div>
            <h1 className="title" id="project">Projetos</h1>
            <h3 className="title-description">/* passe o mouse por cima ou clique para revelar */</h3>

            <div className="container-card">

                <div className="card">
                    <div className="content-card">
                        <h2>01</h2>
                        <h3>BOT UFOP</h3>
                        <p>Um Bot disponibilizado no Twitter, para trabalhar em postagens automáticas referente a datas
                            comemorativas e importantes na UFOP.</p>
                        <p>Obs: O Bot em questão não possui vínculos com a instituição.</p>
                        <a href="https://github.com/diogoleite87/BOT-TWITTER-UFOP" target="_blank">Mais Informações</a>
                    </div>

                </div>

                <div className="card">
                    <div className="content-card">
                        <h2>02</h2>
                        <h3>BOT UFOP RU</h3>
                        <p>Um Bot disponibilizado no Twitter, para trabalhar em postagens automáticas referente aos
                            cardápios dos
                            RUs(Restaurantes Universitários) da UFOP, dos campi Ouro Preto, Mariana e João Monlevade.</p>
                        <p>Obs: O Bot em questão não possui vínculos com a instituição.</p>
                        <a href="https://github.com/diogoleite87/BOT-TWITTER-UFOP-RU" target="_blank">Mais Informações</a>
                    </div>

                </div>

                <div className="card">
                    <div className="content-card">
                        <h2>03</h2>
                        <h3>Portfólio</h3>
                        <p>Meu portfólio.</p>
                        <a href="https://github.com/diogoleite87/Portfolio-Diogo-Leite" target="_blank">Mais Informações</a>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Projects