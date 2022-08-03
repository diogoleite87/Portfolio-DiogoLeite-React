import "./style.css"
import DetailsButton from '../DetailsButton/index'

interface IProps {
    name: string,
    description: string,
    id: string,
    href: string,
    type: number;
}

function Card(props: IProps) {

    const { name, description, id, href, type } = props;
    const cardStyle = type === 0 ? 'card-special' : type === 1 ? 'card' : 'card-master'

    return (
        <div className="container">

            <div className={cardStyle}>
                <div className="content">
                    <h2>{id}</h2>
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <DetailsButton href={href} type={type}/>
                </div>

            </div>
        </div>
    )
}

export default Card