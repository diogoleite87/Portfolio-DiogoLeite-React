import './style.css'
import Profileimg from '../../img/profileimg.png'
import ButtonGitHub from '../ButtonGitHub'
import ButtonLinkedin from '../ButtonLinkedin'

function About () {
    return (
        <div className="about">
            <div>
                <h1 className="title" id="about">Sobre mim</h1>
                <h3 className="title-description">/* um pouquinho sobre mim */</h3>
            </div>
            <div className="about-content">
                <img src={Profileimg} width="400" height="480"/>
                <div className="about-content-text">
                    <p>Meu nome é Diogo, tenho 20 anos e atualmente estou cursando bacharel em Sistemas de Informação na
                        UFOP (Universidade Federal de Ouro Preto), no campus ICEA localizado em João Monlevade.
                    </p>
                    <p>Meu foco atualmente é sistemas (web) e programação mobile, como ReactJS e ReactNative. Possuo
                        conhecimento em linguagem Python, C, Java, HTML, CSS e JavaScript. Em constante evolução e
                        expandindo para suas libs e respectivos frameworks.</p>
                    <p>
                        Juntando o conhecimento que já possuo e a gigantesca vontade de aprender, acredito que estou
                        pronto
                        para adentrar no mercado de trabalho e estou em busca do meu primeiro emprego na área de
                        tecnologia.
                    </p>
                </div>
            </div>
            <div className='button-contact'>
                <ButtonGitHub />
                <ButtonLinkedin />
            </div>
        </div>
    )
}

export default About