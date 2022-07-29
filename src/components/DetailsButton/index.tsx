import './style.css'

interface IProps {
    href: string
    type: number
}

function DetailsButtun(props: IProps) {

    const { href, type } = props
    const buttonStyle = type === 0 ? 'button-yellow' : 'button-blue' 

    return (
        <a href={href} target="_blank" className={buttonStyle}>Mais Informações</a>
    )
}

export default DetailsButtun