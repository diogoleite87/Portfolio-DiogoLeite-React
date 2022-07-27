import "./presentation.css";
import Memoji from "../../img/memoji.png"

function Presentation() {
  return (
    <div className="container-presentation">
      <div className="title-presentation">
        <h3>Sejam bem vindos ao meu portfólio,</h3>
        <h2>Eu sou o Diogo Leite,</h2>
        <h4>acesse meu github e linkedin!</h4>
        <div className="button-presentation">
          <a href="https://github.com/diogoleite87" target="_blank">
            Github
          </a>
          <a href="https://www.linkedin.com/in/diogoleitelucas" target="_blank">
            Linkedin
          </a>
        </div>
        <h4 className="opentowork">#OpenToWork</h4>
      </div>
      <img src={Memoji} className="memoji-presentation" />
    </div>
  );
}

export default Presentation;
