import './style.css'

interface IProps {
    href: string
    type: number
}

function DetailsButtun(props: IProps) {

    const { href, type } = props
    const buttonStyle = type === 0 ? 'button-yellow' : type === 1 ? 'button-blue' : 'button-red'

    return (
        <a href={href} target="_blank" className={buttonStyle}>Mais Informações</a>
    )
}

export default DetailsButtun