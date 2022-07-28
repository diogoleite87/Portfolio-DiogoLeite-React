import './contact.css'

function Contact() {
    return (
        <>
            <h1 className="title" id="contact">Contato</h1>
            <h3 className="title-description">/* preencha o formulario para entrar em contato */</h3>
            <div className="container-contact">
                <form action="https://formsubmit.co/diogoleite87@gmail.com" method="POST">
                    <label>Nome:<input type="text" name="name" id="name" required placeholder="Nome" /></label>
                    <label>Email:<input type="email" name="email" id="email" required placeholder="E-mail" /></label>
                    <label>Assunto:<input type="text" name="subject" id="subject" required placeholder="Assunto" /></label>
                    <label>Mensagem:</label>
                    <textarea name="message" id="message" cols={30} rows={10}
                        placeholder="Escreva um pouco sobre o assunto..."></textarea>
                    <button type="submit">Enviar</button>
                </form>
            </div>

        </>
    )
}

export default Contact