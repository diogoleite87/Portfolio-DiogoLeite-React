import './style.css'
import Card from '../Card'
import ButtonGitHub from '../ButtonGitHub'
import ButtonLinkedin from '../ButtonLinkedin'


function Projects() {
    return (
        <div>
            <h1 className="title" id="project">Projetos</h1>
            <h3 className="title-description">/* passe o mouse por cima ou clique para revelar */</h3>

            <h3 className="title-description">/* Último destaque */</h3>

            <div className="container">
                <Card name='FAQs BOT UFOP' description='Uma página simples em React e TypeScript para responder algumas perguntas sobre o BOT UFOP e BOT UFOP RU aos interessados.' id='01' href='https://botufop.netlify.app/' type={3}></Card>
            </div>

            <h3 className="title-description">/* Destaques */</h3>
            <div className="container">

                <Card name='BOT UFOP' description='Um Bot disponibilizado no Twitter, para trabalhar em postagens automáticas referente a datas
                            comemorativas e importantes na UFOP. Obs: O Bot em questão não possui vínculos com a instituição.' id='01' href='https://github.com/diogoleite87/BOT-TWITTER-UFOP' type={0}></Card>

                <Card name='BOT UFOP RU' description='Um Bot disponibilizado no Twitter, para trabalhar em postagens automáticas referente aos
                            cardápios dos
                            RUs(Restaurantes Universitários) da UFOP, dos campi Ouro Preto, Mariana e João Monlevade. Obs: O Bot em questão não possui vínculos com a instituição.' id='02' href='https://github.com/diogoleite87/BOT-TWITTER-UFOP-RU' type={0}></Card>

                <Card name='Portfólio' description='Meu portfólio em React e TypeScript.' id='03' href='https://github.com/diogoleite87/Portfolio-DiogoLeite-React' type={0}></Card>
            </div>

            <h3 className="title-description">/* Outros */</h3>
            <div className="container">
                <Card name='Portfólio' description='Meu portfólio em HTML, CSS e JavaScript puro.' id='01' href='https://github.com/diogoleite87/Portfolio-Diogo-Leite' type={1}></Card>
                <Card name='PROJETO IC UFOP' description='Similaridade entre Músicas em Plataformas de Streaming: Uma Abordagem via Metaheurísticas BRKGA e KNN PARA O Problema de Minimização da Soma das Diversidades - Trabalho de Iniciação Cientifica - UFOP' id='02' href='https://github.com/diogoleite87/IC-UFOP-BRKGA' type={1}></Card>
                <Card name='Alocação de Professores' description='Alocação de professores em disciplinas do departamento DECSI-UFOP com base em suas preferências, respeitando as capacidades e limitações. Trabalho desenvolvido durante disciplina AEDS3 do curso Sistemas de Informação - UFOP.' id='03' href='https://github.com/diogoleite87/TP02-AEDS3-UFOP' type={1}></Card>
                {/* <Card name='' description='' id='06' href='' type={1}></Card> */}
            </div>

            <div className='button-contact'>
                <ButtonGitHub />
                <ButtonLinkedin />
            </div>
        </div>
    )
}

export default Projects