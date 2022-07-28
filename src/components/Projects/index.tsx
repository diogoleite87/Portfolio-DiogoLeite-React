import './style.css'
import Card from '../Card'


function Projects() {
    return (
        <div>
            <h1 className="title" id="project">Projetos</h1>
            <h3 className="title-description">/* passe o mouse por cima ou clique para revelar */</h3>

            <div className="container">

                <Card name='BOT UFOP' description='Um Bot disponibilizado no Twitter, para trabalhar em postagens automáticas referente a datas
                            comemorativas e importantes na UFOP. Obs: O Bot em questão não possui vínculos com a instituição.' id='01' href='https://github.com/diogoleite87/BOT-TWITTER-UFOP' type={0}></Card>

                <Card name='BOT UFOP RU' description='Um Bot disponibilizado no Twitter, para trabalhar em postagens automáticas referente aos
                            cardápios dos
                            RUs(Restaurantes Universitários) da UFOP, dos campi Ouro Preto, Mariana e João Monlevade. Obs: O Bot em questão não possui vínculos com a instituição.' id='02' href='https://github.com/diogoleite87/BOT-TWITTER-UFOP-RU' type={0}></Card>

                <Card name='Portfólio' description='Meu portfólio.' id='03' href='https://github.com/diogoleite87/Portfolio-DiogoLeite-React' type={0}></Card>
            </div>
        </div>
    )
}

export default Projects