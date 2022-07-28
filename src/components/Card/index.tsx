import { InputHTMLAttributes } from "react";
import "./style.css"

interface IProps {
    name: string,
    description: string, 
    id: string, 
    href: string,
    type: number;
}

function Card(props: IProps) {

    const {name, description, id, href, type} = props;

    return (
        <div className="container">

            <div className="card">
                <div className="content">
                    <h2>{id}</h2>
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <a href={href} target="_blank">Mais Informações</a>
                </div>

            </div>
        </div>
    )
}

export default Card