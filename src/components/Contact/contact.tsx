import './contact.css'

type State = {
    text: string;
};

const el = (
    <button
        onClick={(event) => {
            /* event will be correctly typed automatically! */
        }}
    />
);

function Contact() {
    return (
        <>
            <h1 className="title" id="contact">Contato</h1>
            <h3 className="title-description">/* preencha o formulario para entrar em contato */</h3>

            <div className="container-contact">
                <label>Nome:<input type="text" name="name" id="name" required placeholder="Nome"></input></label>
                <label>Email:<input type="email" name="email" id="email" required placeholder="E-mail"></input></label>
                <label>Assunto:<input type="text" name="subject" id="subject" required placeholder="Assunto"></input></label>
                <label>Mensagem:<textarea name="message" id="message" cols={30} rows={10} placeholder="Escreva um pouco sobre o assunto..."></textarea></label>
                <button type="submit">Enviar</button>
            </div>
        </>
    )
}

export default Contact